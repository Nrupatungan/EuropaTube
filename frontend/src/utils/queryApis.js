import axios from "axios"

export const fetchAllVideos = async({query,pageParam}) =>{
  const res = await axios.get('api/videos/', {
    params: {
      query,
      page: pageParam,
    }
  })
  return res.data.data
}