# About The Project

This project demonstrate coinbase onramp flow. Where user can pay in fiat via CARD, BANK Trasfer, crypo, Apple Pay, base account etc and get back crypto at destination crypto wallet address. Below Instructions are given to deposit USD via CARD and get back USDC in ethereum wallet address.

I have implemented one-click-buy URL, where user first generate quoteId and use it to 
lauch onramp, When user call one-click-buy API, It takes users straight to the preview screen (existing Coinbase users) or Apple Pay + debit card (Guest checkout).  
User pay via CARD and get the USDC in ethereum wallet.

It also supports multiple L1, L2's chains like arbitrum, base, polygon, solana,optimism, bitcoin, litecoin, ethereum classic etc 

## Dependencies 

- generate ProjectID , Secret API Key, API Key ID through [Getting Started with Onramp](https://docs.cdp.coinbase.com/onramp/docs/getting-started)

- Node.js (v18 or above)


# Setup Instructions

1. clone this repo

```
git clone https://github.com/rahulEth/base-onramp.git

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
   {
      "payment_total": {
         "value": "100",
         "currency": "USD"
      },
      "payment_subtotal": {
         "value": "98.96",
         "currency": "USD"
      },
      "purchase_amount": {
         "value": "98.96",
         "currency": "USDC"
      },
      "coinbase_fee": {
         "value": "0",
         "currency": "USD"
      },
      "network_fee": {
         "value": "1.04",
         "currency": "USD"
      },
      "quote_id": "52e59e24-54f4-4480-b529-7a4ba6e9d022"
   }
   
```

## ONRAMP LAUNCH API

```
   GET: http://localhost:5000/onramp/lauchOnramp?address=0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C&blockchain=ethereum&defaultAsset=ETH&defaultPaymentMethod=CARD&fiatCurrency=USD&presetFiatAmount=100&quoteId=52e59e24-54f4-4480-b529-7a4ba6e9d022 

response: 

   <!DOCTYPE html>
   <html>

   <head>
      <link rel="preconnect" href="https://graphql.coinbase.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <meta charSet="utf-8" />
      <title>Coinbase Onramp</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="next-head-count" content="3" />
      <link rel="preload" href="/_next/static/css/b24f861ceb753fa2c66d.css" as="style" />
      <link rel="stylesheet" href="/_next/static/css/b24f861ceb753fa2c66d.css" data-n-g="" />
      <link rel="preload" href="/_next/static/css/93f0de54542db37051da.css" as="style" />
      <link rel="stylesheet" href="/_next/static/css/93f0de54542db37051da.css" data-n-p="" /><noscript
         data-n-css=""></noscript>
      <script defer="" nomodule="" src="/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"></script>
      <script src="/_next/static/chunks/webpack-0810e7d72d2850a31c25.js" defer=""></script>
      <script src="/_next/static/chunks/framework-9ddb6aa026d96f959d8e.js" defer=""></script>
      <script src="/_next/static/chunks/main-ce1f5b78a3372003297f.js" defer=""></script>
      <script src="/_next/static/chunks/pages/_app-d9aee0baaf41761a5db5.js" defer=""></script>
      <script src="/_next/static/chunks/98716-416856fda24ae8b2d400.js" defer=""></script>
      <script src="/_next/static/chunks/24651-9b30a1ab5a50ec9a3ade.js" defer=""></script>
      <script src="/_next/static/chunks/84707-883968406fd2c88bb749.js" defer=""></script>
      <script src="/_next/static/chunks/62615-a92f5da3622a8656f869.js" defer=""></script>
      <script src="/_next/static/chunks/27494-228719d10296b1da4da3.js" defer=""></script>
      <script src="/_next/static/chunks/13664-a5960ed738db3de4b155.js" defer=""></script>
      <script src="/_next/static/chunks/pages/v2/onramp/card-details-150087c782f00360929d.js" defer=""></script>
      <script src="/_next/static/jbQLkvu4mUM_B52sRk7lQ/_buildManifest.js" defer=""></script>
      <script src="/_next/static/jbQLkvu4mUM_B52sRk7lQ/_ssgManifest.js" defer=""></script>
   </head>

   <body>
      <div id="__next"></div>
      <script id="__NEXT_DATA__" type="application/json">
         {"props":{"csrfToken":"e5LcFQGv-IoXpVnUl9crKIWPbJT2-tlhJ_30","guestCheckoutCountryAllowlist":["US"],"featureFlags":{"applePayEnabled":false,"broadcastAnalyticsEventsEnabled":false,"walletUserExperimentsEnabled":false,"guestCheckoutEnabled":true,"guestCheckoutDisabled":false,"ukFcaApproved":false,"gcoApplePayEnabled":false},"isGuestCheckoutRoute":false,"initParams":{"appId":"741a0113-0e7a-42a1-b871-efdc4173347c","defaultAsset":"ETH","defaultPaymentMethod":"CARD","destinationWallets":[{"address":"0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C","blockchains":["ethereum"]}],"fiatCurrency":"USD","presetFiatAmount":100,"quoteId":"52e59e24-54f4-4480-b529-7a4ba6e9d022"},"isV2Route":true,"magicSpendParams":{"appId":"741a0113-0e7a-42a1-b871-efdc4173347c","defaultAsset":"ETH","defaultPaymentMethod":"CARD","destinationWallets":"[{\"address\":\"0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C\",\"blockchains\":[\"ethereum\"]}]","fiatCurrency":"USD","presetFiatAmount":"100","quoteId":"52e59e24-54f4-4480-b529-7a4ba6e9d022"},"pageProps":{}},"page":"/v2/onramp/card-details","query":{"appId":"741a0113-0e7a-42a1-b871-efdc4173347c","defaultAsset":"ETH","defaultPaymentMethod":"CARD","destinationWallets":"[{\"address\":\"0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C\",\"blockchains\":[\"ethereum\"]}]","fiatCurrency":"USD","presetFiatAmount":"100","quoteId":"52e59e24-54f4-4480-b529-7a4ba6e9d022"},"buildId":"jbQLkvu4mUM_B52sRk7lQ","isFallback":false,"customServer":true,"appGip":true,"scriptLoader":[]}
      </script>
   </body>

   </html>
       
```