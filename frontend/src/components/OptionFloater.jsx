import { TbHomeFilled } from "react-icons/tb";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getInitials } from "@/utils/helper";

export const OptionFloater = () => {
    const {isLoggedIn, user} = useSelector(state => state.auth)

  return (
      <div className="fixed bottom-0 flex items-center justify-around min-[500px]:justify-between min-[500px]:px-12 min-[620px]:px-16 min-[650px]:px-20 md:px-32 min-[900px]:px-36 w-full lg:hidden py-1.5 bg-black/90 dark:bg-black/80 text-white/90">
        <Link to={'/'} className="flex flex-col items-center cursor-pointer">
            <TbHomeFilled size={'20'} className="active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
            <p className="text-[0.6rem]">Home</p>
        </Link>
        <Link to={'/shorts'} className="flex flex-col items-center cursor-pointer">
            <SiYoutubeshorts size={'20'} className="active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
            <p className="text-[0.6rem]">Shorts</p>
        </Link>
        <Link to={'/upload'}><AiFillPlusCircle size={'32'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" /></Link>
        <Link to={'/subscriptions'} className="flex flex-col items-center cursor-pointer">
            <MdSubscriptions size={'20'} className="active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
            <p className="text-[0.6rem] whitespace-nowrap overflow-hidden overflow-ellipsis w-10">Subscriptions</p>
        </Link>

        {isLoggedIn 
        ? (
            <Link to={'/feed/you'} className="flex flex-col items-center cursor-pointer">
                <Avatar className='w-[22px] h-[22px] active:scale-125 transition duration-200 border-2 border-white'>
                    <AvatarImage src={user.avatar} alt={user.username} />
                    <AvatarFallback className='text-black text-[0.7rem]'>{getInitials(user.fullName)}</AvatarFallback>
                </Avatar>
                <p className="text-[0.6rem]">You</p>
            </Link>
        ) 
        : (
            <Link to={isLoggedIn ? '/feed/you' : '/login'} className="flex flex-col items-center">
                <RiUser3Fill size={'20'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200 border border-white rounded-full" />
                <p className="text-[0.6rem]">You</p>
            </Link >
        )
        }
      </div>
  )
}
