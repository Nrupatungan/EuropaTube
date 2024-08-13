import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { GiCrossedSabres } from "react-icons/gi";
import { debounce } from "@/utils/helper";
// import { videos } from "@/data/home";
import { CiSearch } from "react-icons/ci";
import { GoArrowUpLeft } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import api from "@/utils/api";

export const SearchBarDesktop = () => {
    const containerRef = useRef(null)
    const searchInputRef = useRef(null)
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([]);

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

    const handleSubmit = (e) => {
        e.preventDefault()
        mutatedQuery.mutate()
    }

    const handleSuggestion = (title) => {
        searchInputRef.current.value = title
        setQuery(title)
    }

    const mutatedQuery = useMutation({
        mutationKey: 'videos',
        mutationFn: api.get(`/videos/?query=${query}`),
        onSuccess: (data) => {
            setSearchResults(data.data)
        }
    })

  return (
        <form className="flex-1 max-lg:hidden relative" onSubmit={handleSubmit}>
            <Input
                className='ring-offset-background dark:border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-black dark:border-slate-400 pe-10 min-[1900px]:h-[55px] min-[1900px]:text-[20px]'
                placeholder='Search EuropaTube'
                ref={searchInputRef}
                onChange={handleChange}
            ></Input>
            <GiCrossedSabres className="absolute min-[1900px]:h-[20px] min-[1900px]:w-[20px] right-3 top-3 min-[1900px]:top-4 cursor-pointer active:scale-75 transition duration-200"
                onClick={handleClear}
            />
            <div className="absolute bg-black/90 dark:bg-black border-2 border-lime-400 text-white w-full h-auto max-h-[300px] min-[1900px]:max-h-[500px] overflow-y-scroll overscroll-none hidden"
            ref={containerRef}
            >
                {/* Add your search results here */}
                {searchResults?.map(result => {
                return(
                    <div key={result.id} className="flex gap-4 min-[1900px]:gap-5 items-center px-3 pb-3 min-[1900px]:pb-4 space-y-3 min-[1900px]:space-y-5 hover:bg-slate-500/90 hover:font-semibold cursor-pointer">
                        <CiSearch  className="mt-3 min-[1900px]:mt-5 h-[18px] w-[18px] min-[1900px]:h-[1.8rem] min-[1900px]:w-[1.8rem]" />
                        <h3 className="text-sm min-[1900px]:text-xl flex-1">{result.title}</h3>
                        <GoArrowUpLeft className="mt-3 h-[18px] w-[18px] min-[1900px]:h-[1.6rem] min-[1900px]:w-[1.6rem]" 
                        onClick={() => handleSuggestion(result.title)} />
                    </div>
                )
            })}
            </div>
        </form>
  )
}
