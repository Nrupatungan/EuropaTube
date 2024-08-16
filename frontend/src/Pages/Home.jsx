import { VideoCard } from "@/components/VideoCard"
import { formatDuration, timeSince, viewsFormatter } from "@/utils/helper";
import { fetchAllVideos } from "@/utils/queryApis";
import { useInfiniteQuery} from "@tanstack/react-query";
import { useEffect} from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const query = useSelector(state => state.searchQuery.query);

  const onClick = (videoId) => {
    // Handle the click event here
    console.log(`Clicked video with ID: ${videoId}`);
  };

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['videos', query],
    queryFn: ({ pageParam = 1 }) => fetchAllVideos({query, pageParam}),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    select: data => data || [],
    staleTime: 1000 * 60 * 5, // 5 minutes
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch()
  }, [query, refetch])


  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }

  const allItems = data?.pages?.flatMap((page) => page.data)

  return (
    <div
    className="overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 grid place-content-start gap-4 min-[1900px]:gap-10 grid-cols-[repeat(auto-fill,minmax(210px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[800px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] min-[1100px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[1900px]:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]"
    >
      {allItems.map((video, index) => (
            <VideoCard
                   key={index}
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