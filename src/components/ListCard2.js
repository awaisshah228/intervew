import React from "react";
import { Link } from "react-router-dom";

//item in list grid for ch2

const ListCard2 = ({ name = "jhon", email = "jhon@gmail.com", id }) => {
  return (
    <Link to={`/ch2/people/${id}`}>
      <div className="flex flex-col  shadow-lg p-4 gap-1   ">
        <div className="font-bold">{name}</div>
        <div className="text-slate-400	 text-sm ">
          <div href={`mailto:${email}`}>{email}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard2;
