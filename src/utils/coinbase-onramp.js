const crypto = require('crypto');
const { SignOptions, sign } =  require('jsonwebtoken');
const key = require('./cdp_api_key.json')

require('dotenv').config()
const key_name = process.env.CDP_API_KEY_NAME;
// const key_secret = key.api_key_secret
const key_secret = process.env.CDP_API_KEY_PRIVATE_KEY

async function createRequest({
    request_method,
    request_path,
  }) {
    const host = 'api.developer.coinbase.com';
    const url = `https://${host}${request_path}`;
    const uri = `${request_method} ${host}${request_path}`;
  
    const payload = {
      iss: 'coinbase-cloud',
      nbf: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 120,
      sub: key_name,
      uri,
    };
  
    const signOptions = {
      algorithm: 'ES256',
      header: {
        kid: key_name,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        nonce: crypto.randomBytes(16).toString('hex'), // non-standard, coinbase-specific header that is necessary
      },
    };
  
    const jwt = sign(payload, key_secret, signOptions);
  
    return { url, jwt };
}

async function fetchOnrampRequest({
    request_method,
    url,
    jwt,
    body,
    res
    }) {
    return fetch(url, {
      method: request_method,
      body: body,
      headers: { Authorization: 'Bearer ' + jwt },
    })
      .then(async (response) => {
        if (!response.ok) {
            const errorText = await response.text();
            res.status(500).send({
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
        res.status(200).send(JSON.stringify(json))
      })
      .catch((error) => {
        console.error('Caught error: ', error);
        res.status(500).send(error)
      });
  }

async function onrampLaunchRequest({
    request_method,
    url,
    res
    }) { 
    return fetch(url, {
      method: request_method
    })
      .then(async (response) => {
        if (!response.ok) {
            const errorText = await response.text();
            return res.status(500).send({
              cause: {
                status: response.status,
                statusText: response.statusText,
                body: errorText,
              },
              message: `HTTP error! status: ${response.status}, message: ${errorText}`
            })
        }
        return response.text();
      })
      .then((html) => {
        //  return json;
         res.status(200).send(html)
      })
      .catch((error) => {
        console.error('Caught error: ', error);
        return res.status(500).send(error)
      });
}  
  
module.exports = {createRequest, fetchOnrampRequest, onrampLaunchRequest}  