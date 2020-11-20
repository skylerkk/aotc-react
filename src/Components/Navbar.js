import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){
    
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark brand">
            <div class = "container">
                <a class="navbar-brand">YourAnimeList</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        {
                            props.pages.map((item, index) => {
                                return (
                                    <li class="nav-item">
                                        <Link 
                                            to={item.url}
                                            onClick={() => props.setPage(index)} 
                                            class={"nav-link " + (props.currentPage === index ? "active" : "")}>
                                            {item.readableName}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                 </div>
            </div>
        </nav>
    );
}

export default Navbar;