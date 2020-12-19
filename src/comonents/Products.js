import React, { useState } from "react";
import "../styles/Products.css";
import Card from "./Card";
import rice from "../media/rice.jpg";
import dal from "../media/dal.jpg";
import oil from "../media/oil.jpg";
import { items } from "../itemsList/iemsList";
import Cart from "./Cart";
import { HashLink as Link} from "react-router-hash-link";
function Products() {
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);
  const [Count3, setCount3] = useState(0);
  const [Count4, setCount4] = useState(0);
  const [Count5, setCount5] = useState(0);
  const [Count6, setCount6] = useState(0);
  const [Count7, setCount7] = useState(0);
  const [Count8, setCount8] = useState(0);
  const [Count9, setCount9] = useState(0);
  const [hide, show] = useState(false);
  const totalRice = () => {
    if (Count1 >= 0 && Count2 >= 0 && Count3 >= 0) {
      return Count1 + Count2 + Count3;
    }
  };
  const totalDal = () => {
    if (Count4 >= 0 && Count5 >= 0 && Count6 >= 0) {
      return Count4 + Count5 + Count6;
    }
  };
  const totalOil = () => {
    if (Count7 >= 0 && Count8 >= 0 && Count9 >= 0) {
      return Count7 + Count8 + Count9;
    }
  };
  return (
    <div>
      <section id="products">
        <h2>Products</h2>
        <div className="proudcts-container">
          <Card
            image={rice}
            alt={"rice"}
            name={items[0].riceName}
            price={items[0].price}
            clickonMinus={event => setCount1(Count1 - 1)}
            clickonPlus={event => setCount1(Count1 + 1)}
            inputDisplayValue={Count1}
            name2={items[1].riceName}
            price2={items[1].price}
            clickonMinus2={event => setCount2(Count2 - 1)}
            clickonPlus2={event => setCount2(Count2 + 1)}
            inputDisplayValue2={Count2}
            name3={items[2].riceName}
            price3={items[2].price}
            clickonMinus3={event => setCount3(Count3 - 1)}
            clickonPlus3={event => setCount3(Count3 + 1)}
            inputDisplayValue3={Count3}
          />
          <Card
            image={dal}
            alt={"dal"}
            name={items[3].dalName}
            price={items[3].price}
            clickonMinus={event => setCount4(Count4 - 1)}
            clickonPlus={event => setCount4(Count4 + 1)}
            inputDisplayValue={Count4}
            name2={items[4].dalName}
            price2={items[4].price}
            clickonMinus2={event => setCount5(Count5 - 1)}
            clickonPlus2={event => setCount5(Count5 + 1)}
            inputDisplayValue2={Count5}
            name3={items[5].dalName}
            price3={items[5].price}
            clickonMinus3={event => setCount6(Count6 - 1)}
            clickonPlus3={event => setCount6(Count6 + 1)}
            inputDisplayValue3={Count6}
          />
          <Card
            image={oil}
            alt={"oil"}
            name={items[6].oilName}
            price={items[6].price}
            clickonMinus={event => setCount7(Count7 - 1)}
            clickonPlus={event => setCount7(Count7 + 1)}
            inputDisplayValue={Count7}
            name2={items[7].oilName}
            price2={items[7].price}
            clickonMinus2={event => setCount8(Count8 - 1)}
            clickonPlus2={event => setCount8(Count8 + 1)}
            inputDisplayValue2={Count8}
            name3={items[8].oilName}
            price3={items[8].price}
            clickonMinus3={event => setCount9(Count9 - 1)}
            clickonPlus3={event => setCount9(Count9 + 1)}
            inputDisplayValue3={Count9}
          />
        </div>
        <div>
          <Link smooth to="#cart">
          <button className="addToCart" onClick={event => show(true)}>Add to Cart</button>
          </Link>
        </div>
      </section>
      <Cart
      rice1={Count1 > 0 ? Count1 : ""}
      rice2={Count2 > 0 ? Count2 : ""}
      rice3={Count3 > 0 ? Count3 : ""}
      dal1={Count4 > 0 ? Count4 : ""}
      dal2={Count5 > 0 ? Count5 : ""}
      dal3={Count6 > 0 ? Count6 : ""}
      oil1={Count7 > 0 ? Count7 : ""}
      oil2={Count8 > 0 ? Count8 : ""}
      oil3={Count9 > 0 ? Count9 : ""}
      totalRice={totalRice()}
      totalDal={totalDal()}
      totalOil={totalOil()}
      /////////////////
      clickonMinus={event => setCount1(Count1 - 1)}
      clickonPlus={event => setCount1(Count1 + 1)}
      inputDisplayValue={Count1}
      //////////////////////////
       clickonMinus2={event => setCount2(Count2 - 1)}
       clickonPlus2={event => setCount2(Count2 + 1)}
       inputDisplayValue2={Count2}
      // //////////////////////////////////
       clickonMinus3={event => setCount3(Count3 - 1)}
       clickonPlus3={event => setCount3(Count3 + 1)}
       inputDisplayValue3={Count3}
      // ///////////////////////////////////////
      clickonMinus4={event => setCount4(Count4 - 1)}
      clickonPlus4={event => setCount4(Count4 + 1)}
      inputDisplayValue4={Count4}
      // /////////////////////////////////////////////
       clickonMinus5={event => setCount5(Count5 - 1)}
       clickonPlus5={event => setCount5(Count5 + 1)}
       inputDisplayValue5={Count5}
      // //////////////////////////////////////////////////////
       clickonMinus6={event => setCount6(Count6 - 1)}
       clickonPlus6={event => setCount6(Count6 + 1)}
       inputDisplayValue6={Count6}
      // //////////////////////////////////////////////////////////////////
       clickonMinus7={event => setCount7(Count7 - 1)}
       clickonPlus7={event => setCount7(Count7 + 1)}
       inputDisplayValue7={Count7}
      // /////////////////////////////////////////////////////////////////////////
       clickonMinus8={event => setCount8(Count8 - 1)}
       clickonPlus8={event => setCount8(Count8 + 1)}
       inputDisplayValue8={Count8}
      // //////////////////////////////////////////////////////////////////////////////
       clickonMinus9={event => setCount9(Count9 - 1)}
       clickonPlus9={event => setCount9(Count9 + 1)}
       inputDisplayValue9={Count9}
        showHide={hide}
    />
    </div>
  );
}
export default Products;
