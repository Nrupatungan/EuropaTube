import { VideoContentSlider } from "@/components/Sliders/VideoContentSlider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BsArrowLeft } from "react-icons/bs";
import { PiUserSquareThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


export const You = () => {
    const isLoggedIn = true
    const navigation = useNavigate()
    const name = 'Shad CN'
    const username = 'shaddybaby'


  return (
    <div className="overscroll-contain pb-5 lg:px-5">
        <div className="lg:relative">
            <BsArrowLeft size={'22'} className="cursor-pointer active:scale-75 transition-all mb-5"
            onClick={() => navigation('/')}
            />
            <div className="flex gap-4 pb-5">
                <Avatar className='h-[4rem] w-[4rem] lg:h-[9rem] lg:w-[9rem]'>
                    <AvatarImage src={isLoggedIn ? 'https://github.com/shadcn.png': null} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="lg:space-y-2 lg:pt-4">
                    <h1 className="text-lg lg:text-[2.5rem] font-bold">{name}</h1>
                    <p className="text-[0.6rem] lg:text-[1rem] text-gray-500">@{username}</p>
                </div>
            </div>
            <Badge className='cursor-pointer active:scale-110 transition duration-200 dark:hover:bg-white/70 lg:absolute bottom-[1.8rem] left-[9.8rem] lg:py-2 lg:px-3'><PiUserSquareThin size={'16'} className="mr-1.5" />SwitchAccount</Badge>
        </div>
        <VideoContentSlider className="mb-7" title="history" />
        <VideoContentSlider title="Playlists" />
        <VideoContentSlider title="Watch Later" />
    </div>
  )
}
