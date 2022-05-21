import { Fragment } from "react";
import starone from "../../assets/Icons/star.svg";
import startwo from "../../assets/Icons/startwo.svg";
import vector from "../../assets/Icons/vector.svg";
import "./index.css";


function Title(){

    return(
        <Fragment>
            <div className="title">
                <h2><img src={starone} alt="star" className="starone"/>Nuestros Servicios<img src={startwo} alt="star" className="startwo"/></h2>
                <br />
                <img src={vector} alt="vector" className="vector" />
            </div>
        </Fragment>
    )
}
export default Title;