import React from "react";
import DetailPage from "./DetailPage";
import { Routes, Route, Outlet } from "react-router-dom";
import ListGrid2 from "../container/ListGrid2";
import DetailPage2 from "./DetailPage2";
import ListGrid from "./../container/ListGrid";
import { Oval } from "react-loader-spinner";

const ListPage2 = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/3 ">
      <ListGrid2 />
    
      </div>
      <div className="p-4 w-2/3">
      <Routes>
        {/* <Route path="/people" element={ListGr/>id} /> */}
        <Route
          path="/:id"
          element={<DetailPage2 />}
          loader={
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          }
        />
      </Routes>

      <Outlet />
      </div>
      
     
    </div>
  );
};

export default ListPage2;
