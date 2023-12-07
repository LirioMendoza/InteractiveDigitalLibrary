import Portada from "../components/portada";
import TypeWriter from "../components/type-writer";
import {textHome} from "../constants/constants";
import Carousel from "../components/carousel/carousel";

/*
Description: Home Page for the Library
*/

export default function Home(){
    return(
        <>
            <Portada />
            <TypeWriter text={textHome} speed={50}/>
            <Carousel/>   
        </>
    );
}