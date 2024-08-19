import React from "react";
import {
  wrapperDiv,
  balanceWrapper,
  moneyWrapper,
  expincWrapper,
  inccontainer,
  expincHead,
  mainInc,
  mainExp,
  divider,
  expcontainer,
  historyWrapper,
  addTransaction,
  transWrapper,
  descWrapper,
  radioWrapper,
  amtWrapper,
  incWrapper,
  expWrapper,
  h1Wrapper,
  h2Wrapper
} from "./styles";

const App = () => {
  return (
    <div style={wrapperDiv}>
      <h1 style={h1Wrapper}>expense tracker</h1>
      <div style={balanceWrapper}>
        <h2 style={h2Wrapper}>Your balance</h2>
        <p>
          <span>$</span>
          <span style={moneyWrapper}> 0.0</span>
        </p>
      </div>
      <div style={expincWrapper}>
        <div style={inccontainer}>
          <h2 style={expincHead}>Income</h2>
          <p>
            <span>₹</span>
            <span style={mainInc}>0.0</span>
          </p>
        </div>
        <div style={divider}></div>
        <div style={expcontainer}>
          <h2 style={expincHead}>Expense</h2>
          <p>
            <span>₹</span>
            <span style={mainExp}>0.0</span>
          </p>
        </div>
      </div>

      <div style={historyWrapper}>
        <h2 style={h2Wrapper}>History</h2>
      </div>
      <div style={addTransaction}>
        <h2 style={h2Wrapper}>Add Transaction</h2>
      </div>
      <form style={transWrapper}>
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" style={descWrapper} required />
        <label htmlFor="amt">Amount</label>
        <input type="text" name="amt" style={amtWrapper} required />
        <div style={radioWrapper}>
          <input type="radio" name="abc" style={incWrapper} checked />
          <label htmlFor="inc">Income</label>
          <input type="radio" name="abc" style={expWrapper} checked />
          <label htmlFor="exp">Expense</label>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default App;
