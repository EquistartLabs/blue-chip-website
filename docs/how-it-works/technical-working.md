# 🛠 Technical Mechanics

## Blockchain

As we take decenttralisation very seriously, ultimately we plan to expand our reach to the most popular blockchains, but we're stratigically choosing BNB Blockchain to kickstart Blue Chip.

- Binance is the largest Exchange, aggregating the wide spectrum of crypto enthusiasts.
- Binance offers EVM chain Tooling for deploying smart-contracts
  = Low gas fee enable the core ideas of deploying digital products on chain.

## Smart-Contracts

- Openzeppelin: Contract library, offering out of the box solution for tokenisation, governance, and other audited utilities.
- Set Protocol: Exploring setprotocol for developing Blue Chip Index fund, similiar to the lines of DPI from Index Coop

<!-- Mention Other smart-contract library to be used -->

## Oracles

BNB offers a range of Oracles, but we'll consider in foloowing order:

- [Chainlink](https://docs.chain.link/)
- [Binance Oracle](https://oracle.binance.com/docs/)

List of oracles on BNB Chain are present [here](https://docs.bnbchain.org/docs/oracles)

## Exchanges

- Pancake Swap: Largessst Exchange on Binance (Must include)
- Stargate: Omnichain DeFi
- Biswap: DEX with low trading fee
- Uniswap: Largest EVM based dex

## Overview: Blue Chip Blue Print

`For Developers`

TODO
Oracle: Automate selection and composition process
Search for API Selection for Asset, price, Market cap data
Data: Selected Dexes
Data: Blue Chip Assets Under Management (AUM), token supply
Data processing
Decide Trigger parameters

Smart Contract: Set Protocol
Fork live network
Test with custom investors and asset holdings
Develop Admin Interactions
Develop Oracle Interactions
Develop Dex Interactions
Develop Investor Interactions
Maintain Docs in Github, or create seperate developer docs in this project

Calculating Components/ assets

- List Top 10 Cryptocurrency by Market Cap
- Use the list to create array of Coponents Address in decresing value in Market Cap
- Trigger UpdateComponents if the list is changed

Calculating Component Units

- For every asset, ideal % of asset in Index score (% score) is calculated to represent market share (Market cap of asset / Sum of market cap of all assets included)
- for every asset, Ideal Value is calculated using % score x Total Portfolio value
- Asset in exact is calculatd by Ideal Asset Value / Price of Asset
- Units are calculated by Asset in exact / total supply

- Simply explained, Units = % score x Total Portfolio value / price of asset x total supply === % score x token price / price of asset

Rebalancing Portfolio
Once Index Composition in Units are set, the portfolio is rebalanced hourly to bring asset value to idea index composition by trading assets automatically.

- For every asset, % value in portfolio is calculate by value of asset/ Value of Portfolio
- Compare with original % score
- Buy assets, which have % value in portfolio < ideal % of asset in Index
- Sell assets, which have % value in portfolio > ideal % of asset in Index
