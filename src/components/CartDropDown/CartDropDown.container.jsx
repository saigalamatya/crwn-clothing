import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropDownContainer = compose(connect(mapStateToProps), withRouter);

export default CartDropDownContainer;
