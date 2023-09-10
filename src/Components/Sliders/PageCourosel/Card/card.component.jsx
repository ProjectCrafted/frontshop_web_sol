import {Component} from 'react';
import './card.styles.css';


class Card extends Component
{
    render ()
    {
        const {title,price,id,image}=this.props.products;
        return(
            <div className='card-container' key={id}>
                <img
                    alt={`products ${title}`}
                    src={image}
                />
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
        )
    }

}

export default Card;