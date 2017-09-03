const axios = require('axios')

function bithumbapi () {
  if (!(this instanceof arguments.callee )) {
    console.error('it is ONLY use with "new" keyword')
    return false
  }

  // public API
  this.callPublicAPI = function (commend, parameter) {
    return axios.get('https://api.bithumb.com/public/' + commend + parameter)
    // .then(function (response) {
    //   var data = response.data
    //   console.log('callPublicAPI response: ', data, data.result)
    // })
    .catch(function (error) {
      console.log('callPublicAPI error', error);
    })
  }
}

// utils
var isCurrencyPublic = function (c) {
  c = c.toUpperCase()
  return (c === 'BTC' || c === 'BCH' || c === 'ETH' || c === 'ETC' || c === 'XRP' || c === 'DASH' || c === 'LTC' || c === 'XMR')
}

/**
 * public API
 */
// Public - TickerDetail
bithumbapi.prototype.ticker = function (currency) {
  if(!isCurrencyPublic(currency) && currency !== 'all' ) {
    console.error('ticker: currency type is NOT correct! [ currency: ' + currency + ' ]')
    return false
  }
  return this.callPublicAPI('ticker/', currency)
}

// Public - Orderbook
bithumbapi.prototype.orderbook= function (currency) {
  if(!isCurrencyPublic(currency)) {
    console.error('orderbook: currency type is NOT correct! [ currency: ' + currency + ' ]')
    return false
  }
  return this.callPublicAPI('orderbook/', currency)
}

// Public - transactions
bithumbapi.prototype.transactions = function (currency) {
  if(!isCurrencyPublic(currency)) {
    console.error('recent_transactions: currency type is NOT correct! [ currency: ' + currency + ' ]')
    return false
  }
  return this.callPublicAPI('recent_transactions/', currency)
}

module.exports = bithumbapi

module.exports.default = bithumbapi

