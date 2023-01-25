import axios from 'axios'


const host=process.env.REACT_APP_BASE_URL;





export const postAPI = async (url, data,) => {
  const res = await axios.post(`${host}${url}`,data, {
  })

  return res;
}


export const getAPI = async (url) => {
  const res = await axios.get(`${host}${url}`, {
  })

  return res;
}
export const getPerson=async (id,callback)=>{

    const res= await getAPI(`/person/${id}`)
    
    callback(res.data.data)
    return (res.data.data)

  }

