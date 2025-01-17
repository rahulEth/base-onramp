const {createRequest, fetchOnrampRequest, onrampLaunchRequest} = require('../utils/coinbase-onramp')

// export default async function useCryptoRampProviders(
//   currency: string,
//   mode: 'buy' | 'sell'
// ) {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/providers`, {
//       params: { currency, mode },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching providers:', error);
//     throw error;
//   }
// }

// Add more API calls for other data fetching needs



// generate buy quote

const buyQuote = async (req, res)=>{
    const request_method = 'POST';
    const {
      purchase_currency, 
      purchase_network, 
      payment_amount,
      payment_currency,
      payment_method,
      country,
      subdivision
    } = req.body
    const { url, jwt } = await createRequest({
        request_method,
        request_path: '/onramp/v1/buy/quote',
      });    
    const body ={
        purchase_currency,
        purchase_network,
        payment_amount,
        payment_currency,
        payment_method,
        country,
        subdivision
    }
    
    await fetchOnrampRequest({
        request_method,
        url,
        jwt,
        body: JSON.stringify(body),
        res
      });
}


const onrampLaunch = async (req,res)=>{
  const request_method = 'GET';
  const {
    address,
    blockchain, 
    defaultAsset, 
    defaultPaymentMethod,
    fiatCurrency,
    presetFiatAmount,
    quoteId
  } = req.query
  // const url = `https://pay.coinbase.com/buy/select-asset?appId=${process.env.API_KEY_ID}&destinationWallets=[{"address":${address},"blockchains":[${blockchain}]}]&defaultAsset=${defaultAsset}&defaultPaymentMethod=${defaultPaymentMethod}&fiatCurrency=${fiatCurrency}&presetFiatAmount=${presetFiatAmount}&quoteId=${quoteId}`

  const url = `https://pay.coinbase.com/buy/select-asset?appId=${process.env.API_KEY_ID}&destinationWallets=[{"address":"${address}","blockchains":["${blockchain}"]}]&defaultAsset=${defaultAsset}&defaultPaymentMethod=${defaultPaymentMethod}&fiatCurrency=${fiatCurrency}&presetFiatAmount=${presetFiatAmount}&quoteId=${quoteId}`
  await onrampLaunchRequest({
      request_method,
      url,
      res
    });
}


const supprotedChains =async (req,res)=>{
  const request_method = 'GET';
  const { url, jwt } = await createRequest({
    request_method,
    request_path: '/onramp/v1/buy/options',
  });  
  return fetch(`${url}?country=US&subdivision=NY}`,{
    method: 'GET',
    headers: { Authorization: 'Bearer ' + jwt },
  })
  .then(async (response) => {
    if (!response.ok) {
        const errorText = await response.text();
        return res.status(500).send({
          cause: {
            status: response.status,
            statusText: response.statusText,
            body: JSON.parse(errorText),
          },
          message: `HTTP error! status: ${response.status}, message: ${errorText}`
        })
    }
    // console.log("respinse------- ", response.json())
    return response.json();
  })
  .then((json) => {
    //  return json;
    return res.status(200).send(json)
  })
  .catch((error) => {
    console.error('Caught error: ', error);
    return res.status(500).send(error)
  });
}


// one-click-buy Onramp URL

// (async ()=>{
//     const BASE_URL = axios.post(`https://pay.coinbase.com/buy/select-asset?appId=2e87e4b4-a2da-4a1b-9864-62cc5e4c5bb9&destinationWallets=[{"address":"0x4e9e57B8BaaF0093BCb62AC8E6b54fE430343EC5","blockchains":["ethereum"]}]&defaultAsset=USDC&defaultPaymentMethod=CARD&fiatCurrency=USD&presetFiatAmount=10&quoteId=ae77980c-f656-4c69-b380-cb5cf99276a9`)
// })();

module.exports = {buyQuote, onrampLaunch, supprotedChains}

