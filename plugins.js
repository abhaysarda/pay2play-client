const XrpEscrowPlugin = require('ilp-plugin-xrp-escrow');

// Generate your secret, account and server ID from https://ripple.com/build/xrp-test-net/
exports.xrp = {
  Player: function () {
    return new XrpEscrowPlugin({
      secret: 'sptVsMHkURscMqwV8aMhznLDMLeL1',
      account: 'r3ZT2GqCozziGv3d6sKqk7pDkPSRfMkiRd',
      server: 'wss://s.altnet.rippletest.net:51233',
      prefix: 'test.crypto.xrp.'
    })
  }
}
