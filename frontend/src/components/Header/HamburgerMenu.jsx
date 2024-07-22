import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome, GoHistory, GoChevronRight } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdPodcasts } from "react-icons/md";
import { LuUserSquare, LuClock } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { AiOutlinePlaySquare, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsFire, BsTrophy, BsLightbulb } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNote, PiFilmSlate } from "react-icons/pi";
import { IoIosRadio } from "react-icons/io";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";

import { Button } from "../ui/button"
import { Sheet, SheetTrigger, SheetContent} from "../ui/sheet"
import {useNavigate} from "react-router-dom"

const initial = [
    {
        id: 1,
        icon: GoHome,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        icon: SiYoutubeshorts,
        title: 'Shorts',
        path: '/feed/shorts'
    },
    {
        id: 3,
        icon: MdOutlineSubscriptions,
        title: 'Subscriptions',
        path: '/feed/subscriptions'
    }
]

const you = [
    {
        id: 1,
        icon: LuUserSquare,
        title: 'Your channel',
        path: '/feed/your-channel'
    },
    {
        id: 2,
        icon: GoHistory,
        title: 'History',
        path: '/feed/history'
    },
    {
        id: 3,
        icon: CgPlayList,
        title: 'Playlists',
        path: '/feed/playlists'
    },
    {
        id: 4,
        icon: AiOutlinePlaySquare,
        title: 'Your videos',
        path: '/feed/your-videos'
    },
    {
        id: 5,
        icon: LuClock,
        title: 'Watch Later',
        path: '/feed/watch-later'
    },
    {
        id: 6,
        icon: BiLike,
        title: 'Liked videos',
        path: '/feed/liked-videos'
    }
]

const explore = [
    {
        id: 1,
        icon: BsFire,
        title: 'Popular',
        path: '/feed/popular'
    },
    {
        id: 2,
        icon: HiOutlineShoppingBag,
        title: 'Shopping',
        path: '/feed/shopping'
    },
    {
        id: 3,
        icon: PiMusicNote,
        title: 'Music',
        path: '/feed/music'
    },
    {
        id: 4,
        icon: PiFilmSlate,
        title: 'Movies',
        path: '/feed/movies'
    },
    {
        id: 5,
        icon: IoIosRadio,
        title: 'Live',
        path: '/feed/live'
    },
    {
        id: 6,
        icon: IoGameControllerOutline,
        title: 'Gaming',
        path: '/feed/gaming'
    },
    {
        id: 7,
        icon: IoNewspaperOutline,
        title: 'News',
        path: '/feed/news'
    },
    {
        id: 8,
        icon: BsTrophy,
        title: 'Sport',
        path: '/feed/sport'
    },
    {
        id: 9,
        icon: BsLightbulb,
        title: 'Courses',
        path: '/feed/courses'
    },
    {
        id: 10,
        icon: GiHanger,
        title: 'Fashion and beauty',
        path: '/feed/fashion-and-beauty'
    },
    {
        id: 11,
        icon: MdPodcasts,
        title: 'Podcasts',
        path: '/feed/podcasts'
    }
]

export const HamburgerMenu = () => {
    const navigate = useNavigate();

  return (
    <Sheet>
    <SheetTrigger className='md:mr-4 sm:mr-2 max-lg:hidden' asChild>
        <Button variant="outline" size="icon" className='inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 px-0 text-base bg-transparent hover:bg-secondary/60 focus-visible:ring-0 focus-visible:ring-offset-0 border-0'>
            <RxHamburgerMenu className="h-[22px] w-[22px] min-[1900px]:h-[32px] min-[1900px]:w-[32px]" />
            <span className="sr-only">Toggle Menu</span>
        </Button>
    </SheetTrigger>
    <SheetContent className='w-64 min-[1900px]:w-[500px] overflow-y-scroll overscroll-none pt-10 min-[1900px]:pt-16 px-3 min-[1900px]:px-5' side={'left'}>
        {initial.map(tiles => {
            const {id, icon: Icon, title, path} = tiles
            return (
              <Button key={id}
              variant={'outline'}
              className='flex gap-3 min-[1900px]:h-[51px] min-[1900px]:gap-5 mb-2 min-[1900px]:mb-3 border-none text-sm min-[1900px]:text-lg font-semibold items-center justify-start w-full'
              onClick={() => navigate(path)}
              >
                <Icon className="h-[22px] w-[22px] min-[1900px]:h-[30px] min-[1900px]:w-[30px]" />
                {title}
              </Button>
            )
        })}

        <hr className="mt-5 mb-3 border-slate-600" />
        
        <Button
              variant={'outline'}
              className='flex gap-1 min-[1900px]:h-[50px] min-[1900px]:gap-2 mb-2 min-[1900px]:mb-4 border-none text-base min-[1900px]:text-xl font-semibold tracking-widest items-center justify-start w-full'
              onClick={() => navigate('/feed/you')}
              >
                You
                <GoChevronRight className="pt-1 h-[20px] w-[20px] min-[1900px]:h-[24px] min-[1900px]:w-[24px]" />
        </Button>

        {you.map(tiles => {
            const {id, icon: Icon, title, path} = tiles
            return (
              <Button key={id}
              variant={'outline'}
              className='flex gap-3 min-[1900px]:h-[50px] min-[1900px]:gap-5 mb-2 min-[1900px]:mb-3 border-none text-sm min-[1900px]:text-lg font-semibold items-center justify-start w-full'
              onClick={() => navigate(path)}
              >
                <Icon className="h-[22px] w-[22px] min-[1900px]:h-[30px] min-[1900px]:w-[30px]" />
                {title}
              </Button>
            )
        })}

        <hr className="mt-5 mb-3 border-slate-600" />

        <Button
              variant={'outline'}
              className='flex gap-1 min-[1900px]:h-[50px] min-[1900px]:gap-2 mb-2 min-[1900px]:mb-4 border-none text-base min-[1900px]:text-xl font-semibold tracking-widest items-center justify-start w-full'
              onClick={() => navigate('/feed/explore')}
              >
                Explore
                <GoChevronRight className="pt-1 h-[20px] w-[20px] min-[1900px]:h-[24px] min-[1900px]:w-[24px]" />
        </Button>
        
        {explore.map(tiles => {
            const {id, icon: Icon, title, path} = tiles
            return (
              <Button key={id}
              variant={'outline'}
              className='flex gap-3 min-[1900px]:h-[50px] min-[1900px]:gap-5 mb-2 min-[1900px]:mb-3 border-none text-sm min-[1900px]:text-lg font-semibold items-center justify-start w-full'
              onClick={() => navigate(path)}
              >
                <Icon className="h-[22px] w-[22px] min-[1900px]:h-[30px] min-[1900px]:w-[30px]" />
                {title}
              </Button>
            )
        })}

        <hr className="mt-5 mb-3 border-slate-600" />

        <ul className="flex flex-wrap gap-1.5 min-[1900px]:gap-2 text-xs min-[1900px]:text-base mb-3 min-[1900px]:mb-5 font-normal dark:font-semibold w-full">
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">About</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Press</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Copyright</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Contact us</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Creator</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Advertise</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Developers</li>
        </ul>

        <ul className="flex flex-wrap gap-1.5 min-[1900px]:gap-2 text-xs min-[1900px]:text-base mb-4 min-[1900px]:mb-6 font-normal dark:font-semibold w-full">
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Terms</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Privacy</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Policy & Safety</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">How Europa<span className="font-oswald">Tube</span> works</li>
            <li className="cursor-pointer hover:font-semibold dark:hover:font-normal">Test new features</li>
        </ul>

        <p className="flex items-center text-gray-800 dark:text-gray-400 font-light dark:font-extralight text-xs min-[1900px]:text-base gap-2"><AiOutlineCopyrightCircle size={12} /> 2024 Dinesh Sake INC</p>
    </SheetContent>
  </Sheet>
  )
}