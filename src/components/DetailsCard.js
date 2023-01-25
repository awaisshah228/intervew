import React from "react";
import { Link, useLocation } from "react-router-dom";
import Colleague from "./Colleague";

const DetailsCard = ({ details }) => {
  const location = useLocation();

  // get param from nested routes
  const getCurrentPathWithoutLastPart = () => {
    return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
  };


  return (
    <div className="flex  flex-col md:flex-row md:p-8 gap-4 p-2 ">
      <div>
        <img src={details.image ? details.image : `/avatar.png`} alt="" />
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="font-bold text-xl">Name</h1>
          {details.first_name + " " + details.last_name}
        </div>
        <div>
          <h1 className="font-bold text-xl">Email</h1>
          {details.email}
        </div>
        {details.address && (
          <div>
            <h1 className="font-bold text-xl"> Address </h1>

            <div>{details.address.street}</div>
            <div>
              {details.address.city} {details.address.state},
              {details.address.postal_code}
            </div>
          </div>
        )}
        {details.work_connection?.length > 0 && (
          <div>
            {" "}
            <h1 className="font-bold text-xl">Collegues</h1>
            {details.work_connection.map((single) => (
              <Link
                to={`${getCurrentPathWithoutLastPart()}/${single.colleague_id}`}
                key={single.id}
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                <Colleague id={single.colleague_id} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
