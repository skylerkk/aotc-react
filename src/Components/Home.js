import React, { useState, useEffect } from "react";
import { axiosHelper } from "../Utilities/axiosHelper";
import { Link } from 'react-router-dom';

function Home() {

    const [anime, setAnime] = useState([]);

    function success(res) {
        if (res.config.method == 'get') {
            return res.data;
        }
    }

    async function getAnime() {
        const method = 'get';
        const url = 'http://localhost:8000/anime';

        setAnime(await axiosHelper(method, url, success));
    }

    useEffect(getAnime, [])

    return (
        <div class="container text-center">
            <row>
                <h2 class="text-center pt-5 pb-2">Animes</h2>
                {
                    anime.map((item) => {
                        return (
                            <div class="card col-3" style={{"display": "inline-block"}}>
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-footer">{item.release_date}</p>
                                    <Link
                                        to={"/anime/" + item.id}
                                    >
                                        <a class="card-link btn btn-primary">Go to Anime</a>
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </row>
        </div>
    )
}

export default Home;