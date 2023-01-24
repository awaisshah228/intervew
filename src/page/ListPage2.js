import React from "react";
import DetailPage from "./DetailPage";
import { Routes, Route, Outlet } from "react-router-dom";
import ListGrid2 from "../container/ListGrid2";
import DetailPage2 from './DetailPage2';
import ListGrid from './../container/ListGrid';

const ListPage2 = () => {
  return (
    <div className="flex">
      <ListGrid2 />
      <Routes>
        {/* <Route path="/people" element={ListGr/>id} /> */}
        <Route path="/:id" element={<DetailPage/>} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default ListPage2;
