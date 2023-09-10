import { Component } from 'react';
import Searchbox from "./Icons/search-box/search-box.component";
import Account from "./Icons/account-icon/account.component";
import Cart from "./Icons/cart-icon/cart.component";
import Wish from "./Icons/wishlist-icon/wishlist.component";
import  './navbar.style.css';
class Navbar extends Component
{
    render() {
        return(
            <nav>
                <h1 className={'text01'}>Crafted Sol</h1>
                <div className={'display01'}>
                <Searchbox/>
                    <div className={'items01'}>
                <div>
                    <h1>Men</h1>
                </div>

                <div>
                    <h1>Women</h1>
                </div>

                <div>
                    <h1>Shoes</h1>
                </div>

                <div>
                    <h1>Bags</h1>
                </div>

                <div>
                    <h1>Afri Culture</h1>
                </div>

                <div>
                    <h1>Signatures</h1>
                </div>
                    </div>

                    <div className={'items02'}>
                <Wish/>
                <Cart/>
                <Account/>
                    </div>
                </div>

            </nav>
        );
    }
}

export default Navbar;