
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from "../header"
import PeopleContainer from "../users/peoplePage/container";

const AppRoutes = () => {
    return (
       
        <Router>
            <Header/>
            <Routes>
                {/* <Route
                    exact
                    path="/"
                    component={PeopleListView}
                />

                <Route
                    exact
                    path="/:personId"
                    component={PeopleDetailView}
                />       */}
                <Route path="/" element={<PeopleContainer/>}/>
            </Routes>
        </Router>
        
    )
}

export default AppRoutes
