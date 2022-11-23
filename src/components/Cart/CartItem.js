import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dipatch = useDispatch()
  const { title, quantity, total, price, id } = props.item;

  const addItemHandler = () => {
    dipatch(cartAction.addItemToCart({
      id,
      title,
      quantity,
      price
    }))
  }
  const removeCartHandler = () => {
    dipatch(cartAction.removeItem(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
