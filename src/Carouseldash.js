import React, {useState} from 'react';
import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import './Carouseldash.scss'
import ImgComp from './ImgComp';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'


export default function Carouseldash(){
    
    let CarouselArr = [
    <ImgComp src={img1}/>,
    <ImgComp src={img2}/>,
    <ImgComp src={img3}/>,
    <ImgComp src={img4}/>,
    <ImgComp src={img5}/>,
    <ImgComp src={img6}/>]; 
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (CarouselArr.length - 1)) : setX(x+100);
    };
    const goRight = () => {
        x === -100 * (CarouselArr.length - 1) ? setX(0) : setX(x-100);
    };

   
    return(    
        <div className="slider">
            {    
                CarouselArr.map((item,index) => {
                    return(    
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })}
            <button id="goLeft" onClick={goLeft}> <FiChevronLeft/> </button>
            <button id="goRight" onClick={goRight}> <FiChevronRight/> </button>

        </div>   
    );
}    