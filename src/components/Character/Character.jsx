import React from "react";
import "./Character.css";

function randomizeImages(imageArray) {
   
// need to start at the end of the imageArray and decrement to get
// a true random number to move the current id into. if index
// was incremented from 0, the first entry would stay the first entry.
// also insures all images are moved

    for (let i = imageArray.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const holdEntry = imageArray[i];
        imageArray[i] = imageArray[random];
        imageArray[random] = holdEntry;
    }
    return imageArray;
};

function Character(props) {

    const characterImages = props.characters;
    const randomImages = randomizeImages(characterImages);

    const renderCharacter = randomImages.map(image => {
        return (
           
            <div key={image.id.toString()} className="col-xs-4 col-xs-3 col-xs-3">
            
                <button onClick={(e) => {
                            e.preventDefault();
                            props.onClick(image.id)
                            }}
                    type="button"
                    className="btn btn-lg image ">
                    <img src={image.link} alt={image.name} height='175'/>
                </button>
            </div>
        );
    });


    return (
        <div>
            {renderCharacter}
        </div>
    );
};


export default Character;