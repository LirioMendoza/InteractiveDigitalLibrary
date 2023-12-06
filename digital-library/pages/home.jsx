"use client";

import TypeWriter from "../components/type-writer";
import {textHome} from "../constants/constants";
import Carousel from "../components/carousel/carousel";
import Banner from "@/components/banner/banner";
import Promotions from "@/components/promotions/promotions";
import MyApp from "./_app";

export default function Home(){
 
    return(
        <>
        <Banner />
            <Promotions/> 
            <TypeWriter text={textHome} speed={50}/>
            <Carousel/> 

        </>
    );
}