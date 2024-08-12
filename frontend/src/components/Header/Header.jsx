import { EuropaTubeLogo } from "../EuropaTubeLogo";
import { ModeToggle } from "../mode-toggle";
import { SearchBar } from "./SearchBar";
import { Link} from "react-router-dom";
import { SearchBarDesktop } from "./SearchBarDesktop";
import { HamburgerMenu } from "./HamburgerMenu";
import { User } from "lucide-react"
import { Button } from "../ui/button";
import { AvatarComp } from "./AvatarComp";
import { useSelector } from "react-redux";

export const Header = () => {
  const {isLoggedIn, user} = useSelector(state => state.auth)

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className='container flex h-14 md:h-16 min-[1900px]:h-28 max-w-screen-2xl min-[1900px]:max-w-[1800px] px-3 md:px-5 items-center justify-between lg:gap-32 xl:gap-64'>
            <div className="flex items-center gap-5">
              <HamburgerMenu />
              <Link to='/'>
                <EuropaTubeLogo fontSize="text-xl min-[1900px]:text-3xl" fontColor="text-purple-600 dark:text-teal-300" className="font-semibold antialiased" />
              </Link>
            </div>
            <SearchBarDesktop />
            <div className="flex items-center justify-between space-x-2 md:justify-end">
                <nav className="flex gap-1.5 md:gap-2 min-[1900px]:gap-6 items-center">
                    <ModeToggle />
                    <SearchBar className="lg:hidden" />
                    {!isLoggedIn
                    ? (<>
                    <Link to={'/login'}>
                      <Button variant="outline" size="icon" className='inline-flex items-center justify-center whitespace-nowrap font-medium dark:border-slate-400 focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground py-2 px-0 text-base bg-transparent hover:bg-secondary/60 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full active:scale-75 transition-all duration-300 hover:bg-zinc-100 text-zinc-700 dark:hover:bg-[#272727] dark:text-white w-[40px] lg:w-[80px] h-[40px] max-lg:hidden'
                      >
                          <User size={16}></User>
                          <span className="hidden text-sm lg:inline-block ml-2">Log In</span>
                      </Button>
                    </Link>
                    <Link to={'/signup'}>
                      <Button size="icon" className='font-medium pr-2 dark:border-slate-400 focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground text-base bg-transparent hover:bg-secondary/60 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full active:scale-75 transition-all duration-300 text-zinc-700 dark:hover:bg-[#272727] dark:text-white w-[40px] lg:w-[60px] h-[40px] max-lg:hidden'
                      >
                          <span className="hidden text-sm lg:inline-block ml-2">Sign Up</span>
                      </Button>
                    </Link>
                    </>
                  )
                    :
                    <AvatarComp imageUrl={user.avatar} alt={user.username} fallback={user.fullName} />
                  }
                </nav>
            </div>
        </div>
    </header>
  )
}
