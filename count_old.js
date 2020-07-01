const data = [
    {
    "test":"t1",
    "uat":false,
    "sit":true,
    "prod":true
    },
    {
    "test":"t1",
    "uat":true,
    "sit":false,
    "prod":true
    },
    {
    "test":"t1",
    "uat":true,
    "sit":true,
    "prod":true
    },
    {
    "test":"t1",
    "uat":true,
    "sit":true,
    "prod":false
    },
    {
    "test":"t1",
    "uat":true,
    "sit":false,
    "prod":true
    },
    {
    "test":"t2",
    "uat":true,
    "sit":true,
    "prod":true
    },
    {
    "test":"t2",
    "uat":true,
    "sit":true,
    "prod":true
    },
    {
    "test":"t2",
    "uat":false,
    "sit":true,
    "prod":true
    },
    {
    "test":"t2",
    "uat":true,
    "sit":true,
    "prod":false
    },
    {
    "test":"t2",
    "uat":true,
    "sit":false,
    "prod":true
    }
];
let uatCount=0;
let sitCount=0;
let prodCount=0;
const tempTest = data.filter(t => t.test === "t1");
uatcount = tempTest.filter(c => c.uat === true).length;
sitcount = tempTest.filter(c => c.sit === true).length;
prodcount = tempTest.filter(c => c.prod === true).length;
console.log(tempTest);
console.log('Test Count' , tempTest.length);
console.log('UAT Count' , uatcount);
console.log('SIT Count' , sitcount);
console.log('PROD Count' , prodcount);

