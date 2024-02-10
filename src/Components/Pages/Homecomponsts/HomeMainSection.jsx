import React from "react";      
import HomeFirst from "./HomeFirst";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeForth from "./HomeForth";
import './Home.css'

const HomeMainSection =()=>{
    return(
        <div className="d-flex flex-column">

            <HomeFirst/>
            <HomeSecond/>
            <HomeThird/>
            <HomeForth/>
        </div>
    )
}

export default HomeMainSection;