/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const VideoContentSlider = ({
    title='Content Slider',
    className=''
}) => {
  return (
    <div className={`w-full my-12 ${className}`}>
        <div className="flex items-center justify-between">
            <h2 className="capitalize font-bold text-lg">{title}</h2>
            <Link to='' className="text-xs px-2 py-1.5 border-[0.05rem] border-black dark:border-slate-300 rounded-2xl active:scale-110 transition duration-200">View all</Link>
        </div>
        <div className="overflow-hidden flex">
            <div className="w-full inline-flex py-5 space-x-4 overflow-x-scroll" style={{scrollbarWidth: 'none'}}>
                <div className="h-[150px] bg-green-300"><h2 className="px-10 w-[300px]">Halla bulla</h2></div>
                <div className="h-[150px] bg-green-300"><h2 className="px-10 w-[300px]">Halla bulla</h2></div>
                <div className="h-[150px] bg-green-300"><h2 className="px-10 w-[300px]">Halla bulla</h2></div>
                <div className="h-[150px] bg-green-300"><h2 className="px-10 w-[300px]">Halla bulla</h2></div>
                <div className="h-[150px] bg-green-300"><h2 className="px-10 w-[300px]">Halla bulla</h2></div>
            </div>
        </div>
    </div>
  )
}
