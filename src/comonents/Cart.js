import React from "react";
import "../styles/Cart.css";
const Cart = props => {
  function totalpriceRice(){
    let a = props.rice1;
    let b = props.rice2;
    let c = props.rice3
    return a*42+b*38+c*80;
  }
  function totalpriceDal(){
    let a = props.dal1;
    let b = props.dal2;
    let c = props.dal3
    return a*130+b*120+c*140;
  }
  function totalpriceOil(){
    let a = props.oil1;
    let b = props.oil2;
    let c = props.oil3
    return a*80+b*120+c*400;
  }
  function finalPrice(){
    return totalpriceRice()+totalpriceDal()+totalpriceOil()
  }
  const toogleClassName =() => {
    if(props.showHide && finalPrice() > 0 ){
      return 'cart-wrapper';
    }else {
      return 'cart-wrapper hideCart-wrapper';
    }
  }
  return (
    <section 
    id="cart"
    className=
    {toogleClassName()}
    >
      <h2>Cart</h2>
      <div className="order-wrapper">
        <div className={props.totalRice >0 ? "rice-wrapper show": "rice-wrapper hide"}>
          <h4>RICE:</h4>
          {/* **************************************** */}
          <div className="order-btn-wrapper">
          <p className={props.rice1 >0 ? "style": ''}>{props.rice1 >0 ? `Miniket ${props.rice1} kg`: ''}</p>
          <div className={props.inputDisplayValue > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus}
               disabled={props.inputDisplayValue <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue >= 0 ? props.inputDisplayValue : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus}>+</button>
              </div>
              </div>
              {/* **************************************** */}
              {/* **************************************** */}
          <div className="order-btn-wrapper">
          <p className={props.rice2 >0 ? "style": ''}>{props.rice2 >0 ? `Ratna ${props.rice2} kg`: ''}</p>
          <div className={props.inputDisplayValue2 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus2}
               disabled={props.inputDisplayValue2 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue2 >= 0 ? props.inputDisplayValue2 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus2}>+</button>
              </div>
              </div>
              {/* **************************************** */}
              {/* **************************************** */}
          <div className="order-btn-wrapper">
          <p className={props.rice3 >0 ? "style": ''}>{props.rice3 >0 ? `Basmati ${props.rice3} kg`: ''}</p>
          <div className={props.inputDisplayValue3 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus3}
               disabled={props.inputDisplayValue3 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue3 >= 0 ? props.inputDisplayValue3 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus3}>+</button>
              </div>
              </div>
              {/* **************************************** */}
        </div>
        <div className={props.totalDal >0 ? "dal-wrapper show": "dal-wrapper hide"}>
          <h4>DAL:</h4>
           {/* **************************************** */}
           <div className="order-btn-wrapper">
           <p className={props.dal1 >0 ? "style": ''}>{props.dal1 >0 ? `Musuri ${props.dal1} kg`: ''}</p>
          <div className={props.inputDisplayValue4 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus4}
               disabled={props.inputDisplayValue4 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue4 >= 0 ? props.inputDisplayValue4 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus4}>+</button>
              </div>
              </div>
              {/* **************************************** */}
              {/* **************************************** */}
           <div className="order-btn-wrapper">
           <p className={props.dal2 >0 ? "style": ''}>{props.dal2 >0 ? `Motor ${props.dal2} kg`: ''}</p>
          <div className={props.inputDisplayValue5 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus5}
               disabled={props.inputDisplayValue5 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue5 >= 0 ? props.inputDisplayValue5 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus5}>+</button>
              </div>
              </div>
              {/* **************************************** */}
              {/* **************************************** */}
           <div className="order-btn-wrapper">
           <p className={props.dal3 >0 ? "style": ''}>{props.dal3 >0 ? `Colai ${props.dal3} kg`: ''}</p>
          <div className={props.inputDisplayValue6 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus6}
               disabled={props.inputDisplayValue6 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue6 >= 0 ? props.inputDisplayValue6 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus6}>+</button>
              </div>
              </div>
              {/* **************************************** */}
        </div>
        <div className={props.totalOil >0 ? "oil-wrapper show": "oil-wrapper hide"}>
          <h4>OIL:</h4>
          {/* **************************************** */}
          <div className="order-btn-wrapper">
          <p className={props.oil1 >0 ? "style": ''}>{props.oil1 >0 ? `Sorse ${props.oil1} kg`: ''}</p>
          <div className={props.inputDisplayValue7 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus7}
               disabled={props.inputDisplayValue7 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue7 >= 0 ? props.inputDisplayValue7 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus7}>+</button>
              </div>
              </div>
              {/* **************************************** */}
              {/* **************************************** */}
          <div className="order-btn-wrapper">
          <p className={props.oil2 >0 ? "style": ''}>{props.oil2 >0 ? `refine ${props.oil2} kg`: ''}</p>
          <div className={props.inputDisplayValue8 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus8}
               disabled={props.inputDisplayValue8 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue8 >= 0 ? props.inputDisplayValue8 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus8}>+</button>
              </div>
              </div>
              {/* **************************************** */}
              {/* **************************************** */}
          <div className="order-btn-wrapper">
          <p className={props.oil3 >0 ? "style": ''}>{props.oil3 >0 ? `olive ${props.oil3} kg`: ''}</p>
          <div className={props.inputDisplayValue9 > 0 ? "btn-input__wrapper show": "btn-input__wrapper hide"}>
              <button
               className="card-order__item-minus-btn"
               onClick={props.clickonMinus9}
               disabled={props.inputDisplayValue9 <= 0}
               >-</button>
              <input
              type="text"
              value={
                props.inputDisplayValue9 >= 0 ? props.inputDisplayValue9 : ""
              }
              style={{backgroundColor: 'rgb(107, 105, 105)', color: 'white', fontWeight: 600}}
              ></input>
              <button className="card-order__item-plus-btn" onClick={props.clickonPlus9}>+</button>
              </div>
              </div>
              {/* **************************************** */}
        </div>
      </div>
      <div className="checkout-wrapper">
        <div className="order-summary">
          <h3>Order Summary</h3>
        </div>
        <table className="checkout-table">
          <th style={{ fontSize: 12, fontWeight: 800 }}>Product Name</th>
          <th style={{ fontSize: 12, fontWeight: 800 }}>Price</th>
          <tr>
            <td>
              {props.totalRice > 0
                ? `Total Rice ${props.totalRice} kg`
                : "----------------"}
            </td>
            <td>{totalpriceRice()}</td>
          </tr>
          <tr>
            <td>{props.totalDal > 0
                ? `Total Dal ${props.totalDal} kg`
                : "----------------"}</td>
            <td>{totalpriceDal()}</td>
          </tr>
          <tr>
            <td>{props.totalOil > 0
                ? `Total Oil ${props.totalOil} kg`
                : "----------------"}</td>
            <td>{totalpriceOil()}</td>
          </tr>
        </table>
        <div className="total">
            <p>Total:</p><span className="final-price">{finalPrice()}</span>
        </div>
        <div className="checkout-button">
          <button className="buy-now" 
          onClick={()=> {
            alert("Purchase Done, You will Never recive the items.");
            window.location.reload(false);
          }}
          >Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
