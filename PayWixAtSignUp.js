//Hardcoded for Player to pay Heroku

const crypto = require('crypto')
const IlpPacket = require('ilp-packet')
const plugin = require('./plugins.js').xrp.Player()
const uuid = require('uuid/v4')

function sha256 (preimage) {
  return crypto.createHash('sha256').update(preimage).digest()
}

// Update destination address to most recent address found on website
const destinationAddress = "test.crypto.xrp.r9k7quHo74erBuiz5bxg3p8YVv2LsBS46v"

// Amount is hardcoded by pay2play
const destinationAmount = '5000000';
const condition = sha256('apple');

function base64url (buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

var payWix = async() => {

  return new Promise((resolve, reject) => {
    plugin.connect().then(function () {
      const ledgerInfo = plugin.getInfo()
      const account = plugin.getAccount()
      console.log(`    - Connected to ledger: ${ledgerInfo.prefix}`)
      console.log(`    -- Account: ${account}`)
      console.log(`    -- Currency: ${ledgerInfo.currencyCode}`)
      console.log(`    -- CurrencyScale: ${ledgerInfo.currencyScale}`)

      // Make payment...

      console.log(` 2. Making payment to ${destinationAddress} `)

      // Send the transfer
      plugin.sendTransfer({
        to: destinationAddress,
        amount: destinationAmount,
        id: uuid(),
        executionCondition: condition,
        from: plugin.getAccount(),
        ledger: plugin.getInfo().prefix,
        ilp: base64url(IlpPacket.serializeIlpPayment({
          amount: destinationAmount,
          account: destinationAddress
        })),
        expiresAt: new Date(new Date().getTime() + 1000000).toISOString()
      }).then(function () {
        resolve('Sent!', parseInt(destinationAmount)/Math.pow(10, parseInt(ledgerInfo.currencyScale)))
        plugin.disconnect()
        process.exit()
      }, function (err) {
        resolve(err.message)
      })


    })

  });
}


payWix().then(console.log);
