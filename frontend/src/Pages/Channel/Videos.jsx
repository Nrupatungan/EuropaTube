import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { formatDuration, timeSince, viewsFormatter } from "@/utils/helper";
import { fetchAllVideos } from "@/utils/queryApis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { EllipsisVertical } from "lucide-react";
import { useParams } from "react-router-dom"



export const Videos = () => {
  const {id} = useParams();
  const {data, isLoading, error} = useInfiniteQuery({
    queryKey: ["channelVideos", id],
    queryFn: ({ pageIndex = 1 }) => fetchAllVideos({pageParam: pageIndex, ownerId: id}),
    getNextPageParam: (lastPage) => lastPage?.next_page,
    select: (data) => data.pages.flatMap(page => page.data) || [],
    enabled:!!id,
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`${error.name}: ${error.message}`}</div>
  
  return (
    <div className="w-full h-full px-4 md:px-6 pt-4 pb-20 grid place-items-center gap-6">
      {data.map(vid => {
        return (
          // <div key={vid._id} className="w-full overflow-hidden">
          //   <img src={vid.thumbnail} alt={vid.title} 
          //   className="w-full object-fill rounded-[1rem] mb-1"
          //    />
          //   <div>
          //     <h3 className="text-base min-[1900px]:text-[22px] min-[1900px]:mb-3 leading-[1.5rem] min-[1900px]:leading-[2rem] overflow-hidden overflow-ellipsis line-clamp-2 font-semibold text-gray-700 dark:text-white w-[90%]">
          //     {vid.title}
          //     </h3>
          //     <p className="text-sm min-[1900px]:text-[18.5px] text-slate-500 dark:text-gray-300"><span>{viewsFormatter(vid.views)} views</span> <span className='before:content-["•"] before:px-1'>{timeSince(vid.createdAt)}</span></p>
          //   </div>
          // </div>
          <Card key={vid._id} className={`border-none dark:bg-transparent rounded-[0.8rem] overflow-hidden`}
    >
        <CardContent className="w-full h-[13rem] min-[1900px]:h-[20rem] p-0 mb-2 relative"
          // onClick={imageClickFunction}
        >
          <img
            src={vid.thumbnail}
            alt={vid.title}
            className="w-full h-full object-fill rounded-[0.8rem]"
          />
          <span className="absolute bg-black/80 text-xs min-[1900px]:text-base px-1 rounded-sm font-semibold bottom-1.5 right-3 text-white py-0.5">{formatDuration(vid.duration)}</span>
        </CardContent>
        <CardFooter className="flex items-start justify-between p-2">
          <div className="flex gap-3.5 items-start">
            <div>
              <h3 className="text-base min-[1900px]:text-[22px] min-[1900px]:mb-3 leading-[1.5rem] min-[1900px]:leading-[2rem] overflow-hidden overflow-ellipsis line-clamp-2 font-semibold text-gray-700 dark:text-white w-[90%]">
                {vid.title}
              </h3>
              <p className="text-sm min-[1900px]:text-[18.5px] text-slate-500 dark:text-gray-300"><span>{viewsFormatter(vid.views)} views</span> <span className='before:content-["•"] before:px-1'>{timeSince(vid.createdAt)}</span></p>
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
      })}
    </div>
  )
}
