import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cart = ({ cart, removeItem, playConfirmation }) => {
  const cartList = cart.length ? (
    cart.map(item => {
      return (
        <React.Fragment>
          <div className="col m4" style={{ float: "center" }}>
            <div className="cart-app collection" style={{ width: "30%", textAlign: "center", marginTop: "15px" }} key={item.id}>
              <span style={{ fontWeight: "bold", marginBottom: "45px" }}>{item.name}<br /> {item.model}<br /></span><p>Price: ${item.price}<br />Color: {item.color}<br />Engraving: {item.engraving}<br /></p>
              <a href="#start" className="secondary-content" ><i className="small material-icons cyan-text" onClick={() => { removeItem(item.id) }}>edit</i></a>
              <a href="#!" className="secondary-content" onClick={() => { removeItem(item) }}><i className="small material-icons cyan-text">remove_shopping_cart</i></a>

            </div>
          </div>
        </React.Fragment>
      )
    })
  ) : (
      <p className="center">You have no items.</p>
    )
  return (
    <div className="cart-list">
      {
        cartList

      }
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
      <button onClick={() => {toast(<div style={{ textAlign: "center" }}>
      <h6 style={{ fontWeight: "bold", color: "gray" }}>Order Successful!</h6><br />Congratulations! We've received your order. 
      It is only a matter of 5 minutes before your custom order is reviewed and receipt is sent to your email. 
      Once you accept the receipt, you should be receiving a confirmation email to collect your order from the store.<p>Thanks for shopping with </p>
      <p style={{ color: "#5dbcd2" }}>Eyeglare</p>
      <p style={{ fontWeight: "bold", color: "gray" }}>Tip</p><p>For any inquiries, please call <p>+1 555 555 5555</p> <br /> </p>
    </div>); }} className="waves-effect cyan btn">Complete Order</button>
    <button onClick={() => {toast(<div style={{ textAlign: "center" }}><img src={"./cengineer.jpeg"} alt="" style={{ width: "100%" }}></img>
      <h6 style={{ fontWeight: "bold", color: "gray" }}>Whooops!</h6><br />It seems we are facing a problem processing the order. We apologize for the 
      inconvenience this may have caused. Please hold on while our catgineers are working hard to resolve this issue. If the issue persists after 5 minutes, please call <p>+1 555 555 5555</p> <br />
    </div>); }} className="waves-effect cyan btn">Not a Good Day</button>
      <ToastContainer position="bottom-right"
        autoClose={15000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover />
    </div>
  )
}

export default Cart