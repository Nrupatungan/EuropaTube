/* eslint-disable react/prop-types */

import landscape from "/Landscape-image.jpg"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { subscribersFormatter, getInitials } from "@/utils/helper";


export const ProfileCover = ({
    data = {},
    isLoggedIn,
}) => {

  return (
    <div className="px-2 mb-5 sm:mb-10 md:mb-12 md:px-5 relative">
        <div className="relative aspect-video h-[6rem] md:h-[13rem] overflow-hidden rounded-3xl w-full bg-gray-200">
                <img src={data?.coverImage || landscape} alt={data.username} className="absolute inset-0 w-full h-full object-fit rounded-sm" />
            </div>
            <div className="flex gap-4 pt-4 justify-between items-center min-[450px]:px-5 min-[600px]:px-10 md:px-0 md:pl-6 max-md:pb-3">
                <div className="flex gap-2 min-[500px]:gap-4">
                    <Avatar className='h-[4rem] w-[4rem] min-[600px]:h-[6rem] min-[600px]:w-[6rem] md:h-[9rem] md:w-[9rem]'>
                        <AvatarImage src={data?.avatar} alt={data?.username} />
                        <AvatarFallback>{getInitials(data?.fullName)}</AvatarFallback>
                    </Avatar>
                    <div className="min-[600px]:pt-3 md:pt-0">
                        <h1 className="text-[1.2rem] md:text-[2.5rem] font-bold">{data?.fullName}</h1>
                        <div className='overflow-ellipsis'>
                            <p className="text-[0.9rem] md:text-[1rem] text-gray-500">{data?.username} <span className="max-md:block md:before:content-['•'] md:before:px-1">{subscribersFormatter(data.subscribersCount)}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <button className="md:hidden cursor-pointer disabled:cursor-not-allowed rounded-[1rem] text-sm min-[500px]:text-[1rem] bg-slate-800 text-white font-semibold py-1.5 px-4 dark:bg-white dark:text-black active:scale-110 transition duration-200" disabled={!isLoggedIn}>Subscribe</button>
            </div>
             <button className="cursort-pointer disabled:cursor-not-allowed absolute bottom-[0rem] hidden md:block left-[12.5rem] rounded-[1rem] px-4 py-1.5 font-semibold bg-slate-800 text-white dark:bg-white dark:text-black active:scale-110 transition duration-200" disabled={!isLoggedIn}>Subscribe</button>
    </div>
  )
}
