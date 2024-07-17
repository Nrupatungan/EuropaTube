import { VideoCard } from "@/components/VideoCard"
import { videos } from "@/data/home"
import { formatDuration, timeSince } from "@/utils/helper";

export const Home = () => {

  const onClick = (videoId) => {
    // Handle the click event here
    console.log(`Clicked video with ID: ${videoId}`);
  }

  return (
    <div className="container overflow-y-scroll min-h-screen pb-10 px-1 md:px-4 grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] min-[688px]:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] min-[1200px]:grid-cols-[repeat(autofill,minmax(300px,1fr))] relative">
      {videos.map((video) => (
            <VideoCard
                   key={video.id}
                   className='min-h-[16rem] w-full max-w-[400px] md:w-full'
                   title={video.title}
                   thumbnail={video.thumbnailUrl}
                   channelAvatar={video.channel.profileUrl}
                   channelName={video.channel.name}
                   views={video.views}
                   postedOn={timeSince(video.postedAt) + " ago"}
                   duration={formatDuration(video.duration)}
                   onClickFunction={() => onClick(video.id)}
               />
          ))}
    </div>
  )
}
