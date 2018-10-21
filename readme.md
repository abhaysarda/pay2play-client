# Get started
You need to this code to be able to participate in the PAY2PLAY beta. Clone this repository to a folder on your desktop or alternatively download the zip and unzip the contents. 

## Dependencies
The following libraries need to be installed.
* Node installed - v7+
* NPM installed - v8.10.0+

## Instructions
1. Run `npm install` to install all dependencies from npm.
2. Run `npm install --save jsonschema@1.2.2`.
3. Edit plugins.js with your payment information. Details are inside the file.
4. Run PayWixAtSignUp.js to pay 5XRP to your pay2play account. Please make sure that the most current address listed on the website is used for the destinationAddress field.
`node PayWixAtSignUp.js`
5. That's it! Head on to <a href="https://asarda1.wixsite.com/pay2play">pay2play</a> to confirm your balance.
6. At the account settings page, make sure that the switch for Pay2Play is ON, if you want to play for money.

## Bugs
Sometimes an error might occur while running the PayWixAtSignUp script.
` 2. Making payment to test.crypto.xrp.r9k7quHo74erBuiz5bxg3p8YVv2LsBS46v
no such schema </tag>`.

Ensure that you ran the `npm install --save jsonschema@1.2.2` command.

## License
All files in this repo are under the MIT license. Feel free to reuse them in your projects!
