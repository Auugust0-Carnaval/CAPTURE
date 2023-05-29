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





        // <div className="card">
        //     <img src={ImgSrc} className="card-img-top" alt=''></img>
        //     <div className="card-body">
        //         <div className="row">
        //             <div className="col-8">
        //                 <h5 className="card-title">{title}</h5>
        //             </div>
        //             <div className="col-4">
        //                 <i id="favori" class="large heart outline icon"></i>
        //             </div>
        //         </div>
        //         <p className="card-text">{description}</p>
        //     </div>
        // </div>



        

        
    )
}


export default Photo;
