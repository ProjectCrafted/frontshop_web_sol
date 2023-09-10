import React, {useEffect, useState} from "react";
import './backgroundslider.component.css';
import ImageSlide from "./imageprac";
const BackgroundSlider=() =>{
    const [currentState,setCurrentState]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if (currentState ===2)
            {
                setCurrentState(0)
            }else
            {
                setCurrentState(currentState+1)
            }
        },5000)
        return ()=> clearTimeout(timer)
        }
        ,[currentState])
    const bgImageStyle={
        backgroundImage: `url(${ImageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
    }

    const goToNext =(currentState) =>{
        setCurrentState(currentState)
    }

    return(
        <div className='container-style'>
            <div style={bgImageStyle} className='images'><div className='transparent-background'></div></div>
            <div className='description'>
                <div>
                    <h1>{ImageSlide[currentState].title}</h1>
                    <p>{ImageSlide[currentState].description}</p>
            </div>
            <div className='caurosel-bullet'>
                {
                    ImageSlide.map((ImageSlide,currentState)=>(
                        <span key={currentState} onClick={()=> goToNext(currentState)}></span>
                        ))
                }
            </div>
            </div>
        </div>
    )
}

export default BackgroundSlider;