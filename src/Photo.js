import React, { useState } from "react";
import './Photo.css'

function Photo({ImgSrc, title, description}){
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSave, SetIsSave] = useState(false);
  

    const toggleSave = () =>{
        SetIsSave(!isSave);
    }

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
      };

    return(
        <div className="all">
            <div className="image">
                <img class="ui medium rounded image" src={ImgSrc} />
                <div className="text-overlay">
                    <div className="row">
                        <div className="col-12">
                        <i
                            id="favori"
                            className={`large ${isFavorite ? 'heart ' : 'heart outline'} icon`}
                            onClick={toggleFavorite}>
                        </i>
                            <i id="save" 
                                class={`large ${isSave? 'bookmark': 'bookmark outline'} icon`}
                                onClick={toggleSave}>
                            </i>
                        </div>
                    </div> 
                </div>
                <div id="title">
                    <h3 className="text">{title}</h3>
                </div>
                <div className="close">
                    <i class=" large x icon"></i>
                </div>
            </div>
        </div>  

        
    )
}

export default Photo;
