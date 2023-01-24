import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import ListPage from './../page/ListPage';
import DetailPage from '../page/DetailPage';
import ListPage2 from '../page/ListPage2'
import { useDispatch } from 'react-redux';
import {getContact} from '../redux/contactSlice/contactThunk'

const Index = ({ children }) => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getContact());
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ch1/people"  element={<ListPage />} />
        <Route path="/ch1/people/:id" element={<DetailPage />} />
        <Route path="/ch2/people/*" element={<ListPage2 />} />
      </Routes>
      {children}
    </BrowserRouter>
  )
}

export default Index