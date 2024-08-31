/* eslint-disable react/prop-types */
import { EllipsisVertical } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent, CardFooter } from './ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { getInitials } from '@/utils/helper'

export const VideoCard = (
    {
        title,
        thumbnail,
        duration,
        views,
        channelName,
        channelAvatar,
        postedOn,
        imageClickFunction,
        ownerClickFunction,
        className
    }
) => {
  return (
    <Card className={`border-none dark:bg-transparent rounded-[0.8rem] overflow-hidden ${className}`}
    >
      <CardContent className="w-full h-[13rem] min-[1900px]:h-[20rem] p-0 mb-2 relative"
      onClick={imageClickFunction}
      >
        <img
          src={thumbnail}
          alt=""
          className="w-full h-full object-fill rounded-[1rem]"
        />
        <span className="absolute bg-black/80 text-xs min-[1900px]:text-base px-1 rounded-sm font-semibold bottom-1.5 right-3 text-white py-0.5">{duration}</span>
      </CardContent>
      <CardFooter className="flex items-start justify-between p-2">
        <div className="flex gap-3.5 items-start mb-5">
          <div
          onClick={ownerClickFunction}
          >
            <Avatar className='active:scale-75 transition-all duration-300 min-[1900px]:h-[3.5rem] min-[1900px]:w-[3.5rem]'>
            <AvatarImage src={channelAvatar} alt={channelName} className='object-fill'/>
            <AvatarFallback>{getInitials(channelName)}</AvatarFallback>
          </Avatar>
          </div>
          <div>
            <h3 className="text-base min-[1900px]:text-[22px] min-[1900px]:mb-3 leading-[1.5rem] min-[1900px]:leading-[2rem] overflow-hidden overflow-ellipsis line-clamp-2 font-semibold text-gray-700 dark:text-white w-[90%] mb-1.5">
              {title}
            </h3>
            <p className="text-sm min-[1900px]:text-[18.5px] min-[1900px]:mb-2 text-slate-500 dark:text-gray-300">{channelName}</p>
            <p className="text-sm min-[1900px]:text-[18.5px] text-slate-500 dark:text-gray-300"><span>{views} views</span> <span className='before:content-["•"] before:px-1'>{postedOn}</span></p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical className="cursor-pointer active:scale-75 h-[18px] w-[18px] min-[1900px]:h-[26px] min-[1900px]:w-[26px]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              Options
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>option 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>option 2</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>option 3</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
