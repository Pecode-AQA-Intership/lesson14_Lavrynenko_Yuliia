let faker = require('faker');

export const URL = 'https://demoqa.com/automation-practice-form';

export const SELECTOR_FIRST_NAME = '#firstName';
export const SELECTOR_LAST_NAME = '#lastName';
export const SELECTOR_EMAIL = '#userEmail';
export const SELECTOR_MOBILE_NUMBER = '#userNumber';
export const SELECTOR_BIRTH = '#dateOfBirthInput';
export const SELECTOR_SUBJECTS = '#subjectsContainer';
export const SELECTOR_CURRENT_ADDRESS = '#currentAddress';

export const SELECTOR_STAGE = '#state .css-1hwfws3';
export const SELECTOR_CITY = '#city .css-1hwfws3#city .css-1hwfws3';
export const SELECTOR_GENDER_MALE = '#gender-radio-1';
export const SELECTOR_GENDER_FEMALE = '#gender-radio-2';
export const SELECTOR_GENDER_OTHER = '#gender-radio-3';
export const SELECTOR_MONTH = '.react-datepicker__month-select';
export const SELECTOR_YEAR = '.react-datepicker__year-select';
export const SELECTOR_DAY = '.react-datepicker__day';
export const SELECTOR_SUBMIT_BTN = '#submit';
export const SELECTOR_HOBBY = '#hobbies-checkbox-1';
export const SELECTOR_HOBBIES = '#hobbies-checkbox-2';
export const SELECTOR_CLOSE_BTN = '#closeLargeModal';

export const VARIFY_NAME = 'tr:nth-child(1) td:nth-child(2)';
export const VARIFY_EMAIL = 'tr:nth-child(2) td:nth-child(2)';
export const VARIFY_GENDER = 'tr:nth-child(3) td:nth-child(2)';
export const VARIFY_MOBILE = 'tr:nth-child(4) td:nth-child(2)';
export const VARIFY_BIRTH = 'tr:nth-child(5) td:nth-child(2)';
export const VARIFY_HOBBY = 'tr:nth-child(7) td:nth-child(2)';
export const VARIFY_ADDRESS = 'tr:nth-child(9) td:nth-child(2)';

export const FIRST_NAME = faker.name.firstName();
export const LAST_NAME = faker.name.lastName();
export const EMAIL = faker.internet.email();
export const MOBILE_NUMBER = faker.phone.phoneNumber('##########');
export const CURRENT_ADDRESS = faker.address.streetAddress();
export const DAY = faker.random.number({min: 1, max: 28});
