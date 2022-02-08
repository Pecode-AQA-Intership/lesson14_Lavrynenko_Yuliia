let faker = require('faker');

export const URL = 'https://demoqa.com/webtables';

export const SELECTOR_FIRST_NAME = '#firstName';
export const SELECTOR_LAST_NAME = '#lastName';
export const SELECTOR_EMAIL = '#userEmail';
export const SELECTOR_AGE = '#age';
export const SELECTOR_SALARY = '#salary';
export const SELECTOR_DEPARTMENT = '#department';

export const SELECTOR_RECORD_BUTTON ='#addNewRecordButton';
export const SELECTOR_SUBMIT ='#submit';
export const SELECTOR_EDIT = "#edit-record-4";
export const SELECTOR_DELETE ='#delete-record-4';
export const SELECTOR_SEARCH = "#searchBox";

export const FIRST_NAME = faker.name.firstName();
export const LAST_NAME = faker.name.lastName();
export const EMAIL = faker.internet.email();
export const AGE = Math.floor(Math.random());
export const SALARY = Math.floor(Math.random());
export const DEPARTMENT = "department";

export const EDIT_USER_FIRST_NAME = faker.name.firstName();
export const EDIT_USER_LAST_NAME = faker.name.lastName();
export const EDIT_USER_EMAIL = faker.internet.email();
export const EDIT_USER_AGE = Math.floor(Math.random());
export const EDIT_USER_SALARY = Math.floor(Math.random());
export const EDIT_USER_DEPARTMENT = "IT";