import React from "react";
import ListGrid from "./../container/ListGrid";
import Basic from "../layouts/Basic";

const ListPage = () => {
  return (
    <div className="py-4 px-12">
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
