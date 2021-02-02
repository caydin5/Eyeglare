import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollAnimation from 'react-animate-on-scroll';



const Glasses = ({ glasses, addItem }) => {

  return (
    <ScrollAnimation animateIn="bounceInRight" animateOnce>
    <div className="glasses container">
      {
        glasses.map(item => {
          return item.price > 0 ? (
            <div className="col m4" style={{ float: "left" }}>
              <div className="card" style={{ width: "80%" }} key={item.id}>
                <div className="card-image">
                  <img src={item.image} alt="" style={{ width: "100%" }}></img>
                  <a href="#!" className="btn-floating halfway-fab waves-effect waves-light cyan"><i className="material-icons" onClick={() => { addItem(item) }}>add_shopping_cart</i></a>
                </div>
                <div className="card-content" style={{ textAlign: "center", width: "100%", background: "rgba(1,188,212,0.7)" }}>
                  <p className="white-text" style={{ fontWeight: "bold" }}>{item.name} {item.model} <br /> ${item.price}</p>
                </div>
              </div>
            </div>

          ) : null;
        })
      }
      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover />
    </div>
    </ScrollAnimation>
  )

}


export default Glasses