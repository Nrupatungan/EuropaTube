import { EuropaTubeLogo } from "../EuropaTubeLogo";
import { ModeToggle } from "../mode-toggle";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <header className={`sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className='container flex h-14 md:h-20 max-w-screen-2xl px-3 md:px-5 items-center justify-between lg:gap-32 xl:gap-64'>
            <div className="flex items-center gap-5">
              <RxHamburgerMenu size={'22'} className='max-lg:hidden' />
              <Link to='/'>
                <EuropaTubeLogo fontSize="text-xl" fontColor="text-purple-600 dark:text-teal-300" className="font-semibold antialiased" />
              </Link>
            </div>
            <form className="flex-1 max-lg:hidden">
              <Input
              className='ring-offset-background dark:border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
              placeholder='Search EuropaTube'
              ></Input>
            </form>
            <div className="flex items-center justify-between space-x-2 md:justify-end">
                <nav className="flex gap-1.5 md:gap-3 items-center">
                    <ModeToggle />
                    <SearchBar className="lg:hidden" />
                    <Avatar className='w-[30px] h-[30px] active:scale-125 transition duration-200 max-lg:hidden'>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </nav>
            </div>
        
        </div>
    </header>
  )
}
