import axios from "axios";

// Get Products data from Coinbase
// Pair Ids are selected from the product
export async function getPairsIds(apiUrl) {
  let response = null;
  let result = [];
  try {
    response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Filtered Pairs data: ".response);
  } catch (error) {
    response = null;
    result = error;
    console.log("Error while fetching Data: ", error);
  }

  if (response) {
    const json = response.data;
    console.log("Fetched Data: ", json);

    response.data.map((pair) => {
      if (pair.id === "ETH-USD" || pair.id === "BTC-USD") {
        console.log("Detected Pair: ", pair);
        result.push(pair);
      }
    });
  }
  return result;
}


// Get MarketCap and Global Market Share 
// API Uses CoinGecko API and formats the data
export async function getMarketShare(geckoUrl) {
  let result = [];
  let coingeckoGlobal = null;

  coingeckoGlobal = await axios.get(geckoUrl + "global", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (coingeckoGlobal) {
    const total_market_cap = coingeckoGlobal.data.data.total_market_cap;
    const market_cap_percentage =
      coingeckoGlobal.data.data.market_cap_percentage;
    console.log("Coin Gecko Global: ", coingeckoGlobal.data.data);
    console.log("Market Cap BTC: ", total_market_cap.btc);

    for (const key in market_cap_percentage) {
      if (market_cap_percentage.hasOwnProperty(key)) {
        // console.log(`${key}: ${market_cap_percentage[key]}`);
        let market_cap = total_market_cap[key];
        result.push({
          asset: key,
          value: market_cap_percentage[key],
          market_cap: market_cap,
        });
      }
    }
    return result;
  }
}
