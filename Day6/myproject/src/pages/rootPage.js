import React from 'react'
import { stockData } from '../dummy'

const RootPage = () => {
    return (
        <>
         {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
        </>
    )
}

export default RootPage