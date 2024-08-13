import { VideoCard } from "@/components/VideoCard"
import { formatDuration, timeSince, viewsFormatter } from "@/utils/helper";
import { fetchAllVideos } from "@/utils/queries";
import { useInfiniteQuery } from "@tanstack/react-query";

export const Home = () => {

  const onClick = (videoId) => {
    // Handle the click event here
    console.log(`Clicked video with ID: ${videoId}`);
  }

  const {
    data,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['videos'],
    queryFn: ({ query = '',pageParam = 1 }) => fetchAllVideos({ query, pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5, // 5 minutes
    keepPreviousData: true,
  })


  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }

  const allItems = data.pages.flatMap((page) => page.data)
  

  return (
    <div 
    // className="container overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-7 lg:gap-4 relative"
    className="overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 grid gap-4 min-[1900px]:gap-10 grid-cols-[repeat(auto-fill,minmax(210px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[800px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] min-[1100px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[1900px]:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]"
    >
      {allItems.map((video) => (
            <VideoCard
                   key={video.id}
                   className='w-full md:w-full cursor-pointer'
                   title={video.title}
                   thumbnail={video.thumbnail}
                   channelAvatar={video.owner.avatar}
                   channelName={video.owner.fullName}
                   views={viewsFormatter(video.views)}
                   postedOn={timeSince(video.createdAt) + " ago"}
                   duration={formatDuration(video.duration)}
                   onClickFunction={() => onClick(video._id)}
               />
          ))}
    </div>
  )
}