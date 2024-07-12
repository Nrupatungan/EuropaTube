import { CiSearch } from "react-icons/ci";
import { EuropaTubeLogo } from "../EuropaTubeLogo";
import { ModeToggle } from "../mode-toggle";

export const Header = () => {
  return (
    // <header>
    //   <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    //     <div className='container flex h-14 md:h-20 max-w-screen-2xl px-3 md:px-5 items-center justify-between'>
    //       <EuropaTubeLogo fontSize="text-xl" fontColor="text-purple-600 dark:text-teal-300" className="font-semibold" />
    //       <div className="flex gap-3 items-center">
    //         <ModeToggle/>
    //         <CiSearch size={'22'} className="cursor-pointer active:scale-75 transition-all"/>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className={`sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className='container flex h-14 md:h-20 max-w-screen-2xl px-3 md:px-5 items-center'>
            
            <EuropaTubeLogo fontSize="text-xl" fontColor="text-purple-600 dark:text-teal-300" className="font-semibold antialiased" />
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className='w-full flex-1 md:w-auto md:flex-none relative'>
                
                </div>
                <nav className="flex gap-1 items-center">
                    <ModeToggle />
                    <CiSearch size={'22'} className="cursor-pointer active:scale-75 transition-all"/>
                </nav>
            </div>
        
        </div>
    </header>
  )
}
