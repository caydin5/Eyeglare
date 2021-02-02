import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Glasses from './Glasses';
import Cart from './Cart';
import AddItem from './AddItem';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import M from 'materialize-css';
import $ from 'jquery';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';


//Tab switch with the click of a button https://stackoverflow.com/questions/35456557/how-to-trigger-next-tab-with-a-or-button-element-in-materialize
$(document).ready(function () {
  $("#btnContinue").click(function () {
    var el = document.getElementById("tabs");
    var instance = M.Tabs.getInstance(el);
    instance.select('glasses');
  });
  $("#btnContinue2").click(function () {
    var el = document.getElementById("tabs");
    var instance = M.Tabs.getInstance(el);
    instance.select('glasses');
  });

  $("#btnCart").click(function () {
    var el = document.getElementById("tabs");
    var instance = M.Tabs.getInstance(el);
    instance.select('order');
  });

});
//Inspired from https://codesandbox.io/s/0mw93vwzmv?file=/index.js:293-725


class App extends Component {

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  state = {
    glasses: [
      { name: 'Ray-Ban', model: 'Aviator', color: "Black", price: '270', image: './RBaviator.jpeg', id: 1 },
      { name: 'Gucci', model: 'Aviator', color: "Red", price: '168', image: './RBaviator.jpeg', id: 2 },
      { name: 'Eyeglare', model: 'Cat-eye', color: "Black", price: '89', image: './RBaviator.jpeg', id: 3 }
    ],
    cart: [

    ]
  }

  playHelp = () => {
    toast(<div style={{ textAlign: "center" }}>
      <h6 style={{ fontWeight: "bold", color: "gray" }}>How do I browse?</h6><br />It's very easy! Read the instructions on the Welcome page, then click <p style={{ color: "#5dbcd2" }}>Get Started</p> to browse
      products.<br /> <p style={{ fontWeight: "bold", color: "gray" }}>Tip</p><p>You can always checkout the navigation bar if you ever feel lost. <br /> <br /> All set? Let's glare! <br /></p>
    </div>);
  }


  addItem = (item) => {
    item.id = Math.random();
    let cart = [...this.state.cart, item];
    this.setState({
      cart: cart
    });
    toast.success(<div style={{ textAlign: "center" }}>Added <strong>{item.name} {item.model}</strong> to cart!</div>);
  }

  removeItem = (item) => {
    console.log(item.id)
    //Lesson 19
    let cart = this.state.cart.filter(item => {
      // eslint-disable-next-line
      return item.id !== item.id
    });
    this.setState({
      cart: cart
    });
    toast.warning(<div style={{ textAlign: "center" }}>Removed <strong>{item.name} {item.model}</strong> from cart!</div>);
  }

  //Integration of Materializecss tabs on React
  componentDidMount() {
    let el = document.querySelector('.tabs');
    // eslint-disable-next-line
    let instance = M.Tabs.init(el, {});
  }

  render() {
    const { t } = this.props;
    return (
      <div id="start" className="navBar">
        <nav className="cyan nav-extended">
          <div className="nav-wrapper">
            <a href="#Eyeglare" className="center brand-logo" style={{ marginLeft: "0px" }}><i className="material-icons left" style={{ marginLeft: "-43px" }}>remove_red_eye</i><img src="./wnellen.png" style={{ margin: "-12.7px", marginLeft: "-20px", width: "57px" }} alt=""></img>yeGlare</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a class="cyan" onClick={this.playHelp} href="#!"><i class="material-icons left" >help</i>{t('main.nav.top.help')}</a></li>
              <li><a href="#start" onClick={() => this.handleClick('en')}><i class="material-icons left">language</i>{t('main.nav.top.en')}</a></li>
              <li><a href="#start" onClick={() => this.handleClick('fr')}>{t('main.nav.top.fr')}</a></li>
              <li><a id="btnCart" href="#cart"><i className="material-icons left">shopping_cart</i>{t('main.nav.top.cart')}</a></li>
            </ul>
          </div>
          <div className="nav-content">
            <ul id="tabs" className="tabs tabs-transparent">
              <li className="tab"><a className="active" href="#welcome">{t('main.nav.ext.welcome')}</a></li>
              <li className="tab"><a href="#glasses">{t('main.nav.ext.glasses')}</a></li>
              <li className="tab"><a href="#customize">{t('main.nav.ext.customize')}</a></li>
              <li className="tab"><a href="#tryon">{t('main.nav.ext.tryon')}</a></li>
              <li className="tab"><a href="#order">{t('main.nav.ext.order')}</a></li>
            </ul>
          </div>

        </nav>
        <div>
          <div id="welcome" class="col s12 cyan-text">
            <div className="Main-app container">
              <ToastContainer
                position="top-right"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable />
              <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce>
                <h1 className="center cyan-text">{t('main.welcome.header')}</h1>
              </ScrollAnimation>
              <div className="row">
                <div className="center col s5 push-s2">
                  <ScrollAnimation animateIn='bounceInLeft' animateOnce>
                    <a href="#info" className="waves-effect cyan btn">{t('main.welcome.btn.1')}</a>
                  </ScrollAnimation>
                </div>
                <div className="center col s5">
                  <ScrollAnimation animateIn="bounceInRight" animateOnce>
                    <a id="btnContinue" href="#start" className="waves-effect cyan btn">{t('main.welcome.btn.2')}</a>
                  </ScrollAnimation>
                </div>
              </div>

              <br />&nbsp;<br /><br />&nbsp;<br id="info" /><br />&nbsp;<br /><br />&nbsp;<br />

              <div>
                <br />&nbsp;<br />
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut' animateOnce>
                  <h2 className="left cyan-text" style={{ offset: "50px" }}>{t('main.body.header')}</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInUp' animateOnce>
                  <h4 className="text-flow black-text">{t('main.body.content')}</h4>
                </ScrollAnimation>
                <div className="row">
                  <div className="center col s12">
                    <ScrollAnimation animateIn='bounceInUp' animateOnce offset="25">
                      <a id="btnContinue2" href="#start" className="waves-effect cyan btn">{t('main.body.btn')}</a>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="glasses" href="#start" class="col s12">
              <div className="glass container">
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' animateOnce>
                <h4 className="collection-header cyan-text" id="EyeGlare">Here's what we selected for you:</h4>
                <br />
                </ScrollAnimation>
              </div>
              <div className="row center-cols center-align" style={{ float: "none", display: "inlineBlock", textAlign: "initial" }}>
                <Glasses addItem={this.addItem} glasses={this.state.glasses} />
              </div>
          </div>
          <div id="customize" class="col s12">
            <div className="customize container">
              <h4 className="collection-header cyan-text" id="EyeGlare">Or customize to your liking:</h4>
              <AddItem addItem={this.addItem} />
            </div>
          </div>
          <div id="tryon" className="tryon container">
            <div className="row">
              <div className="col s12">
                <h4 className="collection-header cyan-text" id="tryOn">Try On:</h4>
                <div className="card">
                  <div className="card-image">
                    <img src="./try_on.png" alt=""></img>
                    <span className="card-title">Try On</span>
                  </div>
                  <div className="card-content">
                    <p>Get a chance to check out the same variety at your own pace. In all, this tool makes their eyewear shopping experience more fun and comfortable.</p></div>
                  <div className="card-action">
                    <a href="#cart" className="cyan-text" style={{}}>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="order" class="col s12">
          <div className="Main-app container">
            <div id="customize" className="custom container">
            </div>
            <div id="cart">
              <h4 className="collection-header cyan-text">Here are the items in your cart:</h4>
              <Cart removeItem={this.removeItem} cart={this.state.cart} />
              <br />
            </div>
          </div>
        </div>
        <br />&nbsp;<br /><br />&nbsp;<br /><br />&nbsp;<br />
        <footer style={{ marginLeft: "20px" }}>
          <p id="signature">{t('footer.text')}</p>
        </footer>
      </div>

    );
  }
}

export default withTranslation()(App);
