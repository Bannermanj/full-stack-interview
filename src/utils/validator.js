const emailRegex = /\S+@\S+\.\S+/;
export const isValidEmail = email => emailRegex.test(email);
