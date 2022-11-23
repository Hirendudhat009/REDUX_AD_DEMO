import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { uiAction } from '../../store/ui-slice'

const CartButton = (props) => {
  const badge = useSelector(state => state.cart.totalQuntity)
  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(uiAction.showCart())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
