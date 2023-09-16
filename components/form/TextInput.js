import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '@/components/layout/Spacer';
import Input from '@/components/form/Input';
import Error from '@/components/form/Error';
import Label from '@/components/form/Label';

const TextInput = (props) => {
  const {error, fullWidth, isRequired, label, onChange, placeholder, value, ...rest} = props;

  return (
    <>
      <Label isRequired={isRequired}>{label}</Label>
      <Spacer value={10}/>
      <Input
        fullWidth={fullWidth}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
      <Spacer value={4}/>
      <Error>{error}</Error>
      <Spacer value={4}/>
    </>
  );
};

TextInput.propTypes = {
  fullWidth: PropTypes.bool.isRequired,
  placeholder : PropTypes.string,
  onChange : PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  error : PropTypes.string
};

export default TextInput;