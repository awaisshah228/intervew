import React from "react";
import ListGrid from "./../container/ListGrid";
import Basic from "../layouts/Basic";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <div className="py-4 px-12">
      <Link to="/" className="fixed ml-0">
        Go back to Home
      </Link>
      <Basic>
        <div>
          <h1 className="text-2xl px-4">People</h1>
          <hr />
        </div>

        <ListGrid />
      </Basic>
    </div>
  );
};

export default ListPage;
