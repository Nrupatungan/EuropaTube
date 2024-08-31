import { ProfileCover } from "@/Pages/Channel/ProfileCover";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Outlet, useNavigate } from "react-router-dom";
import { getChannel } from "@/utils/queryApis";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Channel = () => {
  const inputRef = useRef(null);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const navigate = useNavigate()
  const {username} = useParams();
  const {isLoggedIn} = useSelector(state => state.auth);

  const {data, error, isError, isLoading} = useQuery({
      queryKey: ['channel', username],
      queryFn: () => getChannel(username),
      select: data => data || [],
      refetchInterval: 60 * 1000, // 1 minute,
      staleTime: 1000 * 60 * 5, // 5 minutes,
  })

  const handleSearchClick = () => {
    setIsInputVisible(!isInputVisible);
  }

  const handleFocus = () => {
    setIsInputVisible(false);
  };

  const handleTabClick = (e) => {
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((tab) => {
        tab.classList.remove("active-tab")
        tab.classList.add("hover:hover-tab")
    });
    e.target.classList.add("active-tab");
    e.target.classList.remove("hover:hover-tab")
    if(e.target.classList.contains("active-tab")){
      if(e.target.id === "videos"){
        navigate(`videos/${data?._id}`)
      }else if(e.target.id === "playlists"){
        navigate(`playlists/${data?._id}`)
      }else{
        navigate(`posts/${data?._id}`)
      }
    }
  };

  useEffect(() => {
    if(data){
      navigate(`videos/${data?._id}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <ProfileCover data={data} isLoggedIn={isLoggedIn} />
      <div className="w-full px-2 md:px-5 border-b pb-[9px]">
        <ul className="flex gap-4 md:gap-8 w-full max-md:justify-evenly">
          <li id="videos" className="active-tab hover:hover-tab tabs" onClick={handleTabClick}>Videos</li>
          <li id="playlists" className="hover:hover-tab tabs" onClick={handleTabClick}>Playlists</li>
          <li id="posts" className="hover:hover-tab tabs" onClick={handleTabClick}>Posts</li>
          <li className="flex gap-2 max-sm:hidden">
            <CiSearch size={24} className="cursor-pointer" onClick={handleSearchClick} />
            <input
              type="text"
              className={`bg-transparent pl-1 w-[7rem] md:w-[10rem] outline-none border-b-[2px] ${isInputVisible ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0'}`}
              placeholder="Search"
              ref={inputRef}
              onBlur={handleFocus}
            />
          </li>
        </ul>
      </div>
      <div className="w-full">
      {data ? (
          <Outlet /> // Render child components (videos, playlists, etc.)
        ) : (
          <div>Loading...</div> // Or display a loading indicator while data fetches
        )}
      </div>
    </div>
  );
};