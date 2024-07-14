import { TbHomeFilled } from "react-icons/tb";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";

export const OptionFloater = () => {

  return (
      <div className="fixed bottom-0 flex items-center justify-around w-full lg:hidden py-3 bg-black/70 dark:bg-black/80 text-white/90">
        <TbHomeFilled size={'22'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
        <SiYoutubeshorts size={'22'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
        <AiFillPlusCircle size={'22'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
        <MdSubscriptions size={'22'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
        <RiUser3Fill size={'22'} className="cursor-pointer active:scale-125 hover:scale-90 hover:text-blue-100 active:text-amber-200  transition duration-200" />
      </div>
  )
}
