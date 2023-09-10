import { Component } from 'react';
import Card from "./Card/card.component";
import './card-list.style.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

class CardList extends  Component
{
    render(){

        const { products }=this.props;
        const data=products.map((products)=> <Card products={products}/>)
        return(
            <div className='card-list' style={{padding: '0px 85px'}}>
                <Carousel responsive={responsive} style>
                {data
                }
                </Carousel>
            </div>
        );
    }
}

export default CardList;