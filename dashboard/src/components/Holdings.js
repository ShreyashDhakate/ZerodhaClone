import React, { useState, useEffect } from "react";

import axios from 'axios';



const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]); // Fix destructuring
  

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  },[]);
 
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
          <table>
            <tr>
              <th>Intrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Curr. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
            <tbody>
            {allHoldings.map((stock, index)=>{
              const currValue = stock.price * stock.qty;
              const isProfit = currValue-stock.avg * stock.qty >=0.0;
              const profClass = isProfit ? "profit":"loss";
              const dayClass = stock.isLoss ? "loss": "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>{(currValue-stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={profClass}>{stock.day}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
      </div>
    
    </>
  );
};

export default Holdings;
