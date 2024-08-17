import { Skeleton } from "@/components/ui/skeleton";
import { VideoCard } from "@/components/VideoCard";
import { formatDuration, timeSince, viewsFormatter } from "@/utils/helper";
import { fetchAllVideos } from "@/utils/queryApis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const Home = () => {
  const query = useSelector(state => state.searchQuery.query);

  const onClick = (videoId) => {
    // Handle the click event here
    console.log(`Clicked video with ID: ${videoId}`);
  };

  const { data, isLoading, error} = useInfiniteQuery({
    queryKey: ['videos', query],
    queryFn: ({ pageParam = 1 }) => fetchAllVideos({ query, pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    select: (data) => data.pages.flatMap((page) => page.data) || [], // Ensure empty array on initial load
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
    className="overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 grid place-content-start gap-4 min-[1900px]:gap-10 grid-cols-[repeat(auto-fill,minmax(210px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[800px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] min-[1100px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[1900px]:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]"
    >
      {isLoading 
      ? 
          Array(8).fill(null).map((_, i) => (
            <div
            key={i}
            className="h-full w-full max-w-[350px] rounded-xl relative cursor-wait"
          >
            <Skeleton className="h-[208px] w-full rounded-xl" />
            <div className="flex w-full justify-around items-center p-2 gap-2">
              <Skeleton className="h-10 w-10 rounded-full bg-slate-400" />
              <div className="w-full grid gap-2">
                <Skeleton className="h-3 bg-slate-400 rounded-xl" />
                <Skeleton className="h-3 bg-slate-400 rounded-xl" />
              </div>
            </div>
          </div>
          ))
      : data?.map((video, index) => (
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

          ))

      }

    </div>

  )
};