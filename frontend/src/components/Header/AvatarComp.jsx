import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { LogOut, UserSquare } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useToast } from "../ui/use-toast"

export const AvatarComp = () => {
  const navigate = useNavigate()
  const {toast} = useToast()

  const handleLogout = async () => {
      toast({
        title: "Logged out",
        description: "Logged out successfully!",
      })
  }

  return  (
    <DropdownMenu>
      <DropdownMenuTrigger className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-full border-0">
        <Avatar className='w-[30px] h-[30px] min-[1900px]:w-[2.5rem] min-[1900px]:h-[2.5rem] active:scale-125 transition duration-200 max-lg:hidden'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 min-[1900px]:w-64 md:mr-4 md:mt-3'>
        <DropdownMenuLabel className='min-[1900px]:text-lg'>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer min-[1900px]:text-xl py-2 px-3' onClick={() =>navigate('/feed/you')}>
            <UserSquare className="mr-2 h-4 w-4 min-[1900px]:h-5 min-[1900px]:w-5" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer min-[1900px]:text-xl py-2 px-3' onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4 min-[1900px]:h-5 min-[1900px]:w-5" />
            <span>Log out</span>
            <DropdownMenuShortcut className='min-[1900px]:text-lg'>⇧⊞Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    
  )
}