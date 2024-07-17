/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { GoArrowUpLeft } from "react-icons/go";
import { Input } from "../ui/input";
import { useEffect, useRef, useState } from "react";
import { debounce } from "@/utils/helper";
import { videos } from "@/data/home";


export const SearchBar = ({className=''}) => {
    const containerRef = useRef(null)
    const inputRef = useRef(null)
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const searchQuery = new RegExp(query, 'i')

    const handleClick = () => {
        containerRef.current.classList.toggle('hidden')
    }

    const handleSearch = debounce((value) => {
        // Your search logic here
        setQuery(value);
    }, 300);

    const handleChange = (e) => {
        const {value} = e.target;
        handleSearch(value);
        console.log('Query:', query);
    }

    const handleClear = () => {
        inputRef.current.value = ''
        setQuery('')
        setSearchResults([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
    <div className={`${className}`}>
        <CiSearch size={'22'} className="cursor-pointer active:scale-75 transition-all " onClick={handleClick}/>
        <div  className="bg-background absolute z-[10000] top-0 left-0 h-screen w-[100svw] hidden"
         ref={containerRef}
        >
            <div className="h-14 w-full border-b-2 px-3 flex gap-4 items-center">
                <BsArrowLeft size={'26'} className="cursor-pointer active:scale-75 transition-all" onClick={handleClick} />
                <form className="flex-1" onSubmit={handleSubmit}>
                    <Input placeholder="Search EuropaTube" className='ring-offset-background dark:border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
                    ref={inputRef}
                    onChange = {handleChange}
                    />
                </form>
                <IoMdClose size={'22'} className="cursor-pointer active:scale-75 transition-all"
                onClick={handleClear}
                />
            </div>
            
            {/* Add your search results here */}
            {searchResults.map(result => {
                return(
                    <div key={result.id} className="flex gap-4 items-center px-3 pb-2 space-y-3 hover:bg-primary/10">
                        <CiSearch size={'18'} className="mt-2.5" />
                        <h3 className="text-sm flex-1">{result.title}</h3>
                        <GoArrowUpLeft size={'18'} />
                    </div>
                )
            })}
            {searchResults.map(result => {
                return(
                    <div key={result.id} className="flex gap-4 items-center px-3 pb-2 space-y-3 hover:bg-primary/10">
                        <CiSearch size={'18'} className="mt-2.5" />
                        <h3 className="text-sm flex-1">{result.channel.name}</h3>
                        <GoArrowUpLeft size={'18'} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}