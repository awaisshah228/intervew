import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ name = "jhon", email = "jhon@gmail.com",id }) => {
  return (
    <div className="flex flex-col  shadow-lg p-4 gap-1 border border-slate-200	  ">
      <div className="font-bold">{name}</div>
      <div className="text-slate-400	 text-sm "><a href={`mailto:${email}`}>{email}</a></div>
      <div className="text-sm text-blue-500 "><Link to={`/ch1/people/${id}`}>view</Link></div>

      {/* ListCard */}
      {/* <Link to='/'></Link> */}
    </div>

    // <Link to=}></Link>
  );
};

export default ListCard;
