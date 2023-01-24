import axios from 'axios'


// const host=process.env.REACT_APP_BASE_URL;


axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });


export const postAPI = async (url, data,) => {
  const res = await axios.post(`/${url}`, post, {
  })

  return res;
}


export const getAPI = async (url) => {
  const res = await axios.get(`/${url}`, {
  })

  return res;
}

// export const patchAPI = async (url, data, token?:string) => {
//   const res = await axios.patch(`/${url}`, post, {
//     // headers: { Authorization: token }
//   })

//   return res;
// }


// export const putAPI = async (url: string, post: object, token?:string) => {
//   const res = await axios.put(`/${url}`, post, {
//     // headers: { Authorization: token }
//   })

//   return res;
// }


// export const deleteAPI = async (url, token) => {
//   const res = await axios.delete(`/${url}`, {
//     // headers: { Authorization: token }
//   })

//   return res;
// }