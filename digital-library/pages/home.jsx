import Portada from "../components/portada";
import TypeWriter from "../components/type-writer";
import {textHome} from "../constants/Constants";
import Carousel from "../components/carousel/carousel";

export default function Home(){
    return(
        <>
            <Portada />
            <TypeWriter text={textHome} speed={50}/>
            <Carousel/>   
        </>
    );
}