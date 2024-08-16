import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { GiCrossedSabres } from "react-icons/gi";
import { debounce } from "@/utils/helper";
import { CiSearch } from "react-icons/ci";
import { GoArrowUpLeft } from "react-icons/go";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/slices/querySlice";

export const SearchBarDesktop = () => {
    const containerRef = useRef(null)
    const searchInputRef = useRef(null)
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const searchQuery = new RegExp(query, 'i');
    const queryClient = useQueryClient()
    const data = queryClient.getQueryData(['videos'])
    const videos = data?.pages.flatMap(page => page.data) || []
    const dispatch = useDispatch()
    

    const handleSearch = debounce((value) => {
        // Your search logic here
        setQuery(value);
    }, 300);

    const handleChange = (e) => {
        const {value} = e.target;
        handleSearch(value);
        if(value !== ''){
            containerRef.current.classList.remove('hidden')
        }else{
            containerRef.current.classList.add('hidden')
        }
    }

    const handleClear = () => {
        searchInputRef.current.value = ''
        setQuery('')
        setSearchResults([])
        containerRef.current.classList.add('hidden')
    }

    //Clear the results container on input blur
    // const hideContainer = () => {
    //     containerRef.current.classList.add('hidden')
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        containerRef.current.classList.add('hidden')
        dispatch(setSearchQuery(query))
    }

    const handleSuggestion = (title) => {
        searchInputRef.current.value = title
        setQuery(title)
    }

    useEffect(() => {
        const uniqueOwners = new Set();
        const extractedResults = [];
      
        videos.forEach(video => {
          const titleMatch = video.title.match(searchQuery);
          const channelNameMatch = video.owner.fullName.match(searchQuery);
      
          if (titleMatch || channelNameMatch) {
            const ownerName = video.owner.fullName;
            if (!uniqueOwners.has(ownerName)) {
              uniqueOwners.add(ownerName);
              extractedResults.push({
                zab: video.title
              })
              extractedResults.push({
                zab: video.description
              })
              extractedResults.push({
                zab: video.owner.fullName
              })
            }
          }
        });
      
        setSearchResults(extractedResults.slice(0,8));
        console.log(searchResults);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [query]);

  return (
        <form className="flex-1 max-lg:hidden relative" onSubmit={handleSubmit}>
            <Input
                className='ring-offset-background dark:border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-black dark:border-slate-400 pe-10 min-[1900px]:h-[55px] min-[1900px]:text-[20px]'
                placeholder='Search EuropaTube'
                ref={searchInputRef}
                onChange={handleChange}
                // onBlur={hideContainer}
            ></Input>
            <GiCrossedSabres className="absolute min-[1900px]:h-[20px] min-[1900px]:w-[20px] right-3 top-3 min-[1900px]:top-4 cursor-pointer active:scale-75 transition duration-200"
                onClick={handleClear}
            />
            <div className="absolute bg-black/90 dark:bg-black border-2 border-lime-400 text-white w-full h-auto max-h-[300px] min-[1900px]:max-h-[500px] overflow-y-scroll overscroll-none hidden"
            ref={containerRef}
            >
                {/* Add your search results here */}
                {searchResults?.map((result, id) => {
                return(
                    <div key={id} className="flex gap-4 min-[1900px]:gap-5 items-center px-3 pb-3 min-[1900px]:pb-4 space-y-3 min-[1900px]:space-y-5 hover:bg-slate-500/90 hover:font-semibold cursor-pointer">
                        <CiSearch  className="mt-3 min-[1900px]:mt-5 h-[18px] w-[18px] min-[1900px]:h-[1.8rem] min-[1900px]:w-[1.8rem]" />
                        <h3 className="text-sm min-[1900px]:text-xl flex-1">{result.zab}</h3>
                        <GoArrowUpLeft className="mt-3 h-[18px] w-[18px] min-[1900px]:h-[1.6rem] min-[1900px]:w-[1.6rem]" 
                        onClick={() => handleSuggestion(result.zab)} />
                    </div>
                )
                })}
            </div>
        </form>
  )
}
