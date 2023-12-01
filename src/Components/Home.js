import React, {useState} from "react";
import MyProjectsContainer from "./MyProjectContainer";
import MyTasksContainer from "./MyTasksContainer";

function Home() {

    return (
        <div id="homepage">
            <div className="header">
                <br />
                <h1>Welcome, "Current User"!</h1>
            </div>
            <div>
                <MyProjectsContainer />
                <MyTasksContainer />
            </div>
        </div>
    )
}

export default Home;