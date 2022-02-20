import React from "react";
import { Route, Routes } from "react-router-dom";
import BookContainer from "../components/book/BookContainer";
import ResultsContainer from "../components/results/ResultsContainer";

const RenderRoutes = (props) => (
        <Routes>
            <Route path='/' element={<ResultsContainer />} />
            <Route path='/:id'  element={<BookContainer />} />
        </Routes>   
)

export default RenderRoutes