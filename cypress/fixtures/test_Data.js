
var faker = require('faker');
export const URL = 'https://demoqa.com/text-box';
export let FULL_NAME = faker.name.findName(); 
export let EMAIL = faker.internet.email(); 
export let CURRENT_ADDRESS = faker.address.streetAddress();
export let PERMANENT_ADDRESS = faker.address.secondaryAddress();


export let selectorName = '#userName-wrapper';
export let selectorEmail = '#userEmail';
export let selectorCurrentAddress = '#currentAddress';
export let selectorPermanentAddress= '#permanentAddress'

export let verifyName = '#name';
export let verifyEmail = '#email';
export let verifyCurrentAddress = 'p[id="currentAddress"]';
export let verifyPermanentAddress = 'p[id="permanentAddress"]';


