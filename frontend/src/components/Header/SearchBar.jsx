import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import { debounce } from "@/utils/helper";


export const SearchBar = () => {
    const containerRef = useRef(null)
    const inputRef = useRef(null)
    const [query, setQuery] = useState('')

    const handleClick = () => {
        containerRef.current.classList.toggle('hidden')
    }

    const handleSearch = debounce((value) => {
        // Your search logic here
        setQuery(value);
    }, 200);

    const handleChange = (e) => {
        const {value} = e.target;
        handleSearch(value);
        console.log('Query:', query);
    }

  return (
    <>
        <CiSearch size={'22'} className="cursor-pointer active:scale-75 transition-all" onClick={handleClick}/>
        <div  className="bg-background absolute z-[10000] top-0 left-0 h-[100svh] w-[100svw] hidden"
         ref={containerRef}
        >
            <div className="h-14 w-full border-b-2 px-3 flex gap-4 items-center">
                <BsArrowLeft size={'26'} className="cursor-pointer active:scale-75 transition-all" onClick={handleClick} />
                <Input placeholder="Search EuropaTube" className='ring-offset-background dark:border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
                ref={inputRef}
                onChange = {handleChange}
                />
                <IoMdClose size={'22'} className="cursor-pointer active:scale-75 transition-all"
                onClick={() => inputRef.current.value = ''}
                />
            </div>
            {/* Add your search results here */}

        </div>
    </>
  )
}