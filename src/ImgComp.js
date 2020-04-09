import React from 'react';

export default function ImgComp({src}) {
    let imgStyles = {
        width: 100 +"%",
        height: 550
    };
    return <img src={src} alt="slide-img" style={imgStyles}></img>;
}