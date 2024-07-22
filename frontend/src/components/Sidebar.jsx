import { RiHome5Line, RiSvelteLine } from "react-icons/ri"
import { MdOutlineSubscriptions } from "react-icons/md"
import { PiUserSquareLight } from "react-icons/pi"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    const sidebarMobile = [
        {
          icon : RiHome5Line,
          title: 'Home',
          path: '/'
        },
        {
          icon : RiSvelteLine,
          title: 'Shorts',
          path: '/feed/shorts'
        },
        {
          icon : MdOutlineSubscriptions,
          title: 'Subscriptions',
          path: '/feed/subscriptions'
        },
        {
          icon : PiUserSquareLight,
          title: 'You',
          path: '/feed/you'
        }
    ]

  return (
    <div>
        <aside className='sticky top-0 w-[72px] min-[1900px]:w-[150px] pt-1 ps-2 gap-4 flex items-center flex-col max-lg:hidden'>
            {sidebarMobile.map((ele,index) => {
                    const { icon:Icon, title, path} = ele
                    return (
                        <Link to={path} key={index} className="text-[0.6rem] min-[1900px]:text-[0.95rem] bg-background dark:hover:bg-[#272727] hover:bg-zinc-100 w-full py-3 min-[1900px]:py-7 rounded-lg flex flex-col gap-1 items-center cursor-pointer active:scale-110 transition"
                        >
                            <Icon className="h-[24px] w-[24px] min-[1900px]:h-[36px] min-[1900px]:w-[36px]" />
                            {title}
                        </Link>
                    )
                })}
          </aside>
    </div>
  )
}
