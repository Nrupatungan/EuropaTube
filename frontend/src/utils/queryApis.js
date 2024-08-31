import axios from "axios"

export const fetchAllVideos = async({query ='',pageParam, ownerId=''}) =>{
  try {
    const res = await axios.get('/api/videos/', {
      params: {
        query,
        page: pageParam,
        ownerId,
      }
    })
    return res.data.data
  } catch (error) {
    throw new Error('Failed to fetch videos')
  }
}

export const getChannel = async(username) => {
  try {
    const res = await axios.get(`/api/users/c/${username}`, {}, {
      headers: {
          'Content-Type': 'application/json',
      }
    });
    return res.data.data
  } catch (error) {
    throw new Error('Failed to fetch channel')
  }
}