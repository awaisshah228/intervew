import React from 'react'
import { useParams } from 'react-router-dom';

const DetailPage2 = () => {
   const {id} =useParams()
   console.log(id)
  return (
    <div>DetailPage2</div>
  )
}

export default DetailPage2