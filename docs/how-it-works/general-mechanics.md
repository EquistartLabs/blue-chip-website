# General Mechanics

## Asset eligibility Determination

Assets are selected primarily based on Market Cap, where BTC and ETH dominate the cryptocurrency market with 70% dominance together.

Specifically, all eligible assets must comply:

- Rank under Top 10 cryptocurrency by market cap at CoinGecko/ CoinMarketCap
- Be traded on atleast 3 Decentralised Exchanges
- verifyable Asset contract present on the underlying blockchain
- Have free-floating price

## Components Selection: Index Weights Applied

- When all eligible assets are identified, the market capitalization of each asset is calculated.
- Once Market Cap of each asset is determined, the system will calculate share of each asset in the portfolio by a percentage score.
- If an asset have a percentage score of less than 1%, it will be roofed at 1% and the final score will be rebalanced from Top3 assets by market cap

  `Percentage score = Market Cap of an Asset / Sum of Market Cap of all selected assets`

## Rebalancing Portfolio

The Index Fund portfolio is automated and rebalancd programatically using oracle automations.

- If any asset is replaced by other asset in Market Cap Ranking
- If the portfolio composition differ more than 1% of the current ideal composition for any asset

## Overview

Write 1st time allocation steps
Write recursive allocation steps

- Token Launch - Tokens airdropped to investors
- Funds transferred to Treasury Smart-Contract
- Get Assets list by market cap
- Check for asset contracts, and liquidity among Dexes
- Select Top 10 Assets by Market Cap for our Index Portfolio
- Get Ideal % score for every asset in the portfolio
- Dex Swap - Fund portfolio based on Ideal % score
- Calculate price of blue chip token

Recursive Rebalancing

- Step1: Get Assets list by market cap
- Step2: Check for asset contracts if new asset swaps in Market Cap the old asset in the list
- Step3: Check liquidity for asset on Dex
- Step4: Compare current % score for assets to the portfolio composition
- Step5: Swap assets to rebalance
- Step6: Calculate price of blue chip token
