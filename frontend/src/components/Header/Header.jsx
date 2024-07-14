import { EuropaTubeLogo } from "../EuropaTubeLogo";
import { ModeToggle } from "../mode-toggle";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <header className={`sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className='container flex h-14 md:h-20 max-w-screen-2xl px-3 md:px-5 items-center'>
            
            <EuropaTubeLogo fontSize="text-xl" fontColor="text-purple-600 dark:text-teal-300" className="font-semibold antialiased" />
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className='w-full flex-1 md:w-auto md:flex-none relative'>
                
                </div>
                <nav className="flex gap-1.5 md:gap-3 items-center">
                    <ModeToggle />
                    <SearchBar />
                </nav>
            </div>
        
        </div>
    </header>
  )
}
