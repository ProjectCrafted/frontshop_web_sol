import cart from './icon/shopping-bag-icon.svg';

const Cart= () => {
    return(
        <div>
            <img
                alt="shopping"
                src={cart}
                style={{ width:'50px', height: '50px' }}
            />
        </div>
    )
}

export default Cart;