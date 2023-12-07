import Portada from "../components/portada";
import TypeWriter from "../components/type-writer";
import {textHome} from "../constants/constants";
import Carousel from "../components/carousel/carousel";
import DownloadLogsButton from "@/components/logging/down-logs-button";

export default function Home(){
    return(
        <>
            <Portada />
            <TypeWriter text={textHome} speed={50}/>
            <Carousel/>   
            <DownloadLogsButton />
        </>
    );
}