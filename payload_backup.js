const Client1 = {
    "merchantId": "UATM22VMGPKMMMYJ",
    "merchantUserId": "MUID123",
    "amount": 10000,
    "redirectUrl": "http://localhost:3000/pay-return-url/",
    "redirectMode": "POST",
    "callbackUrl": "http://localhost:3000/pay-return-url/",
    "mobileNumber": "9567167713",
    "paymentInstrument": {
        "type": "PAY_PAGE"
    }

    // let saltKey = '35079f86-962c-49cb-9b60-5b08bf2eafef';
    // let saltIndex = 1;
}

const Client2 = {
    "merchantId": "M227AZEAARKOH", //prod
    "merchantId": "TESTKEYUAT1",
    "merchantUserId": "MUID123",
    "amount": 10000,
    "redirectUrl": "http://localhost:3000/pay-return-url/",
    "redirectMode": "POST",
    "callbackUrl": "http://localhost:3000/pay-return-url/",
    "mobileNumber": "9567167713",
    "paymentInstrument": {
        "type": "PAY_PAGE"
    }

    // let saltKey = '1b9b3b82-7121-4d66-8266-b5a47ebf8cb6';//prod
    // let saltKey = '71b3f3a3-6948-4143-b785-2a6595bd2240';//prod
    // let saltIndex = 1;
}
module.exports = {
    Client1, Client2
}