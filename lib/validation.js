import {useState} from "react";

const emptyValues = ['', null, undefined];
export const isEmail = (email) => {
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
}
export const isRequired = (value) => {
  return !emptyValues.includes(value)
}
export const validate = (items, name, value) => {
  for (const item of items) {
    const {validator, errorMessage} = item;
    if (!validator(value)) {
      return errorMessage;
    }
  }
  return true;
};

export const validateValues = (validations, values) => {
  const errors = {};
  for (const [name, value] of Object.entries(values)) {
    const items = validations[name];
    const result = validate(items, name, value);
    if (result !== true) {
      errors[name] = result
    }
  }
  return errors
}