import './cart-dropdown.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown;