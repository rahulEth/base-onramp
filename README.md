# About The Project

This project is to store and index Bitcoin OP_RETURN data for all transactions after a certain block. This data will then be served on an HTTP endpoint as a JSON payload.

## Dependencies 

- Node.js (v18 or above)


# Setup Instructions

1. clone this repo

```
git clone https://github.com/ExodusMovementInterviews/Rahul-Saini.git


```

2. install dependencies

```
npm install

```

3. Create a .env file in the project root

```
cp .env.example .env

```

4. setup all the environment variables

server would start on localhost:3000

6. Running the project in dev mode
```
   npm run dev

```
server would start on localhost:5000




#  CREATE QUOTE API

```
  POST : http://localhost:5000/onramp/buyQuote
  {
        "purchase_currency": "USDC",
        "purchase_network": "ethereum",
        "payment_amount": "100.00",
        "payment_currency": "USD",
        "payment_method": "CARD",
        "country": "US",
        "subdivision": "NY"
   }  

response: 

   
```

## ONRAMP LAUNCH API

```
   GET: http://localhost:5000/onramp/lauchOnramp?address=0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C&blockchain=ethereum&defaultAsset=ETH&defaultPaymentMethod=CARD&fiatCurrency=USD&presetFiatAmount=100&quoteId=3996dbf8-3356-49cb-8e1a-f9b05da07aad

response: 
       
```