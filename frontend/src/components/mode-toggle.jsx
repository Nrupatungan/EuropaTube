import { Sun } from "lucide-react"
import { RxMoon } from "react-icons/rx";

import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useTheme } from "../components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size="icon" className='ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent bg-transparent hover:bg-secondary/60 focus-visible:ring-offset-0 border-0'>
          <RxMoon className="absolute h-[1.2rem] w-[1.2rem] min-[1900px]:h-[1.8rem] min-[1900px]:w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Sun className="h-[1.2rem] w-[1.2rem] min-[1900px]:h-[1.8rem] min-[1900px]:w-[1.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className='min-[1900px]:w-[15rem]'>
        <DropdownMenuItem onClick={() => setTheme("light")} className='min-[1900px]:text-xl py-2 px-3'>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className='min-[1900px]:text-xl py-2 px-3'>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className='min-[1900px]:text-xl py-2 px-3'>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
