import { VideoCard } from "@/components/VideoCard"
import { videos } from "@/data/home"
import { formatDuration, timeSince, viewsFormatter } from "@/utils/helper";

export const Home = () => {

  const onClick = (videoId) => {
    // Handle the click event here
    console.log(`Clicked video with ID: ${videoId}`);
  }

  return (
    <div 
    // className="container overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-7 lg:gap-4 relative"
    className="overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 grid gap-4 min-[1900px]:gap-10 place-content-center grid-cols-[repeat(auto-fill,minmax(210px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[800px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] min-[1100px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-[1900px]:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]"
    >
      {videos.map((video) => (
            <VideoCard
                   key={video.id}
                   className='w-full md:w-full cursor-pointer'
                   title={video.title}
                   thumbnail={video.thumbnailUrl}
                   channelAvatar={video.channel.profileUrl}
                   channelName={video.channel.name}
                   views={viewsFormatter(video.views)}
                   postedOn={timeSince(video.postedAt) + " ago"}
                   duration={formatDuration(video.duration)}
                   onClickFunction={() => onClick(video.id)}
               />
          ))}
    </div>
  )
}
