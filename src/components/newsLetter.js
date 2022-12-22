import React from 'react';
import {useQuery} from "react-query"
import Axios from "axios";

import {options} from "./axios"

const NewsLetter = () => {
    const { data} = useQuery("NEWS",  () => {
       return Axios.request(options).then( (response) => {
            const res = response.data;
            console.log(res)
            return res;
           })
    });

    const combineNews = () => {
        let allNews = ""
        data?.value.forEach(element => {
            allNews = `${allNews},     ${element.name}`
            
        });
        return allNews;
    }

    return (
        <div style={{margin: "30px 0px"}}>
            <marquee behavior="scroll" direction="left" style={
                { background: "white", padding: "10px"}
            }>
            {combineNews()}
            </marquee>
        </div>
    );
}

export default NewsLetter;