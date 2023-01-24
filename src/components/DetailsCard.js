import React from "react";
import { Link, useLocation } from 'react-router-dom';

const DetailsCard = ({
  details: { name, image, email, address, collegues },
}) => {
  const location=useLocation()
  // console.log(Location)
  const getCurrentPathWithoutLastPart = () => {

    return location.pathname.slice(0, location.pathname.lastIndexOf('/'))
}
  return (
    <div className="flex  flex-col md:flex-row md:p-8 gap-4 p-2 ">
        
      <div>
        <img src={image ? image : `/avatar.png`} alt="" />
      </div>
      <div className="flex flex-col">
        <div>
         <h1 className="font-bold text-xl">Name</h1>  
          {name}
        </div>
        <div>
          
          <h1 className="font-bold text-xl">Email</h1>  
          {email}
        </div>
        {address && (
          <div>
             <h1 className="font-bold text-xl"> Address </h1>  
            {address}
          </div>
        )}
        {collegues && (
          <div>  <h1 className="font-bold text-xl">Collegues</h1> 

            {collegues.map((single) => (
              <Link to={`${getCurrentPathWithoutLastPart()}/${single.id}`} key={single.id} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{single.name}</Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
