
var faker = require('faker');
export const URL = 'https://demoqa.com/text-box';
export let FULL_NAME = faker.name.findName(); 
export let EMAIL = faker.internet.email(); 
export let CURRENT_ADDRESS = faker.address.streetAddress();
export let PERMANENT_ADDRESS = faker.address.secondaryAddress();


// export let INV_FULL_NAME = faker.phone.phoneNumber(); 
// export let INV_EMAIL = faker.commerce.color(); 
// export let INV_CURRENT_ADDRESS = faker.image.imageUrl();
// export let INV_PERMANENT_ADDRESS = faker.internet.color();


export let selectorName = '#userName-wrapper';
export let selectorEmail = '#userEmail';
export let selectorCurrentAddress = '#currentAddress';
export let selectorPermanentAddress= '#permanentAddress'

export let verifyName = '#name';
export let verifyEmail = '#email';
export let verifyCurrentAddress = '#currentAddress';
export let verifyPermanentAddress = '#permanentAddress';


