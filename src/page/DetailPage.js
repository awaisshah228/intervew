import React from "react";
import Basic from "../layouts/Basic";
import { useParams } from "react-router-dom";
import DetailsCard from "./../components/DetailsCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getAPI,getPerson} from '../utils/fetchData'
import { useState ,useEffect} from "react";


const DetailPage = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state.contact);
  const [contactDetail, setcontactDetail] = useState({first_name:'',last_name:''})


  useEffect(()=>{
     getPerson(id,setcontactDetail)
  },[id])
  
  return (
    
    
      <div className=" p-16">
        <div className="flex justify-between">
          <h1 className="text-2xl px-4">{contactDetail?.first_name+' '+contactDetail?.last_name}</h1>
          <div><Link to='/ch1/people'>View List</Link></div>
        </div>
        <hr />

        <DetailsCard details={contactDetail} />
      </div>
    
  );
};

export default DetailPage;
