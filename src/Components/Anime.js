import React, { useState, useEffect } from "react";
import { axiosHelper } from "../Utilities/axiosHelper";
import {useParams} from 'react-router-dom'

function Anime() {

    let { idnum } = useParams();
    const [oneAnime, setOneAnime] = useState();
    const [animeData, setAnimeData] = useState({});

    useEffect(() =>{
        if(oneAnime != idnum){
            getAnime();
            setOneAnime(idnum);
        }
    }, [oneAnime])
    
    function success(res) {
        if (res.config.method == 'get') {
            return res.data;
        }
    }

    async function getAnime() {
        const method = 'get';
        const url = 'http://localhost:8000/anime/'+idnum; 

        setAnimeData(await axiosHelper(method, url, success));
    }

    return (
        <div class="container text-center">
            <h1 class="py-5">{animeData.name}</h1>
            <p class="pb-3">{animeData.description}</p>
            <h5>release date:</h5>
            <p>{animeData.release_date}</p>
            
        </div>
    )
}

export default Anime;