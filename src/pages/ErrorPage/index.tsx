import React from "react";
import CustomCover from "../../components/CustomCover";
import { Link } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
const  ErrorPage =()=>{
    return(
        <CustomCover title="" text="">
        <CustomCard 
        title="404"
        text="page not found"
        >
        <Link to="/" className="btn-primary">return home</Link>
        </CustomCard>
    </CustomCover>
    );};
    export default ErrorPage;