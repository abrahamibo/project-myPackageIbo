import React from "react";
import Button from "../Button";
import {
    getDate,
    getFullYear,
    getTime
} from '../../helper/date'

function MyReactApp(props) {
    const {width, height, bgColor, content, color} = props;
    return (<div
        style={{
            width: width || 200,
            height: height || 200,
            backgroundColor: bgColor || "green",
            color: color || "black"
        }}
    >
        {content}
        {getDate()}
        {getFullYear()}
        {getTime()}
        <input type="text"/>
        <Button />
    </div>);
}

export default MyReactApp;
