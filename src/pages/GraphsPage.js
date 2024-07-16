import React from 'react';
import Layout from '@theme/Layout';
import { getMarketShare, getPairsIds } from '../components/GraphServices';
import axios from 'axios';
import './graph.css';


export default function Graph() {
  const coinbaseUrl = 'https://api.exchange.coinbase.com/products/';
  const geckoUrl = 'https://api.coingecko.com/api/v3/';
  const [pairs, setPairs] = React.useState([]);
  const [globals, setGlobals] = React.useState([])


  async function getAssetIds(){
    let result = getPairsIds(coinbaseUrl);
    console.log("Let's check fetched data: ", result)
    setPairs(result)
  }

  async function getAssetData(){
    let response = await getMarketShare(geckoUrl);
    console.log("Global value before: ", response)
    setGlobals(response);
  }


  async function getCoinsList(){
    let coinlist = await axios.get(geckoUrl + "coins/list", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    //TODO: Search for ids of assets from Market Cap list
  }





  return (
    <Layout title="graphs" description="Index fund graphs">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
          {/* <p>TODO:</p>
        <li>Get last 5 year crypto data: Top 10 crypto by market cap</li>
        <li>Plot graphs comparing assets MarCap</li> */}

        {/* <button onClick={getAssetIds}>Get Pairs</button> */}
        <button onClick={getAssetData}>GET Data</button>
        <button onClick={getCoinsList}>GET Coins</button>


        
        <div>
          <div className='grid-layout'>
            <p>Asset</p>
            <p>Market Cap %</p>
            <p>Price</p>
            <p>Market Cap</p>
            <p>Absolute Assets</p>
          </div>
          {globals && globals.map((element, i)=>(
            <div key={i}>
              <div className='grid-layout'>
                <p>{element.asset} </p>
                <p>{element.value} %</p>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </Layout>
  );
}


{/* TODO: Fetch Assets
    Fetch Price and Market Cap
    Calculate Market Cap % score
    Calculate Absolute Asset */}


// ACR DBSC
// PMU 
