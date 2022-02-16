import React from "react";
import { Route, Routes } from "react-router-dom";
import ResultContainer from "../components/BlankResult/ResultContainer";
import Results from "../components/results/Results";

const RenderRoutes = (props) => (
        <Routes>
            <Route path='/' element={<ResultContainer />} />
            <Route path='/search' element={<Results />} />
        </Routes>   
)

export default RenderRoutes