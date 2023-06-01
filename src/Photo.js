import React from "react";
import './Photo.css'

function Photo({ImgSrc, title, description}){

    return(
        <div id="card" class="ui card">
            <div class="image">
                <img src={ImgSrc}></img>
            </div>
            <div class="content">
                <div className="row">
                    <div className="col-8">
                        <strong>
                            <p class="header">{title}</p>
                        </strong>
                    </div>
                    <div className="col-4">
                        <i id="favori" class="large heart outline icon"></i>
                        <i id="like" class="large thumbs up outline icon"></i>
                    </div>
                </div>
                <div class="description">
                    {description}
                </div>
            </div>
        </div>        
    )
}


export default Photo;
