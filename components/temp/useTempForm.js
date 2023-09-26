import {useState} from 'react';

const useTempForm = (props) => {
  const {onSuccess} = props;

  const [values, setValues] = useState({});

  const onChange = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name]: value})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    onSuccess(values);
  }

  return {values, onChange, onSubmit}
}

export default useTempForm;