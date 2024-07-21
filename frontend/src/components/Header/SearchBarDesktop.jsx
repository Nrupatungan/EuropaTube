import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { GiCrossedSabres } from "react-icons/gi";
import { debounce } from "@/utils/helper";
import { videos } from "@/data/home";
import { CiSearch } from "react-icons/ci";
import { GoArrowUpLeft } from "react-icons/go";

export const SearchBarDesktop = () => {
    const containerRef = useRef(null)
    const searchInputRef = useRef(null)
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const searchQuery = new RegExp(query, 'i')

    const handleSearch = debounce((value) => {
        // Your search logic here
        setQuery(value);
    }, 300);

    const handleChange = (e) => {
        const {value} = e.target;
        handleSearch(value);
        console.log('Query:', query);
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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSuggestion = (title) => {
        searchInputRef.current.value = title
        setQuery(title)
    }

    useEffect(() => {
        const matchResults = videos.map(video => {
            const titleMatch = video.title.match(searchQuery)
            const channelNameMatch = video.channel.name.match(searchQuery)
            const channelIdMatch = video.channel.id.match(searchQuery)
            if (titleMatch || channelNameMatch || channelIdMatch) {
                return video
            }
            return null
        })
        setSearchResults(matchResults.filter(Boolean))
        console.log(searchResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

  return (
        <form className="flex-1 max-lg:hidden relative" onSubmit={handleSubmit}>
            <Input
                className='ring-offset-background dark:border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-black dark:border-slate-400 pe-10'
                placeholder='Search EuropaTube'
                ref={searchInputRef}
                onChange={handleChange}
            ></Input>
            <GiCrossedSabres className="absolute right-3 top-3 cursor-pointer active:scale-75 transition duration-200"
                onClick={handleClear}
            />
            <div className="absolute bg-black/90 dark:bg-black border-2 border-lime-400 text-white w-full h-auto max-h-[300px] overflow-y-scroll overscroll-none hidden"
            ref={containerRef}
            >
                {/* Add your search results here */}
                {searchResults?.map(result => {
                return(
                    <div key={result.id} className="flex gap-4 items-center px-3 pb-3 space-y-3 hover:bg-slate-500/90 hover:font-semibold cursor-pointer">
                        <CiSearch size={'18'} className="mt-3" />
                        <h3 className="text-sm flex-1">{result.title}</h3>
                        <GoArrowUpLeft size={'18'} onClick={() => handleSuggestion(result.title)} />
                    </div>
                )
            })}
            </div>
        </form>
  )
}
