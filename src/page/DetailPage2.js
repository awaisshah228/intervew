import React from "react";
import Basic from "../layouts/Basic";
import { useParams } from "react-router-dom";
import DetailsCard from "./../components/DetailsCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAPI, getPerson } from "../utils/fetchData";
import { useState, useEffect } from "react";

const DetailPage2 = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state.contact);
  const [contactDetail, setcontactDetail] = useState({
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    getPerson(id, setcontactDetail);
  }, [id]);
  return (
    <Basic>
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl px-4">
            {contactDetail.first_name + " " + contactDetail.last_name}
          </h1>
        </div>
        <hr />

        <DetailsCard details={contactDetail} />
      </div>
    </Basic>
  );
};

export default DetailPage2;
