import React,{Component} from "react";
import CardList from "./card-list.component";

class Fetcher extends Component
{

    constructor(props)
    {
        super(props);

        this.state =
            {
                products:[]
            }

    }
    componentDidMount()
    {
        fetch('https://fakestoreapi.com/products').then((response)=>response.json())
            .then((items)=>this.setState(()=>{return{products:items}
            }) )
    }

    render()
    {
        const {products}=this.state;

        return (
            <div className='main'>
                    <CardList products={products}/>
            </div>
        );
    }

}

export default Fetcher;