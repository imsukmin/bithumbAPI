# bithumbAPI
 
 > bithumb api Object based Promise (using AXIOS)
 
 this api use only public API
 
 for Detail [https://www.bithumb.com/u1/US127](https://www.bithumb.com/u1/US127)
 
## demo (telegramBot)

[@bithumbHelpBot](http://t.me/bithumbHelpBot)
  
## install
 
 > npm install --save bithumbapi
 
 ## example (how to use this)
 
 ``` javascript
 
 var bithumbapi = require('bithumbapi');
 var bithumb = new bithumbapi();
 
 bithumb.ticker('btc').then(function(response){
   console.log(response.data)
 })
 
 ```git push