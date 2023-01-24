import React from "react";

const DetailsCard = ({
  details: { name, image, email, address, collegues },
}) => {
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
             <h1 className="font-bold text-xl">Address</h1>  
            {address}
          </div>
        )}
        {collegues && (
          <div>
            Collegues <br />
            {collegues.map((single) => (
              <text>{single.name}</text>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
