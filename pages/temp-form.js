import React from 'react';
import useTempForm from '@/components/temp/useTempForm';
import createUserForm from '@/forms/users/createUserForm';

const TempForm = () => {

  const onSuccess = (values) => {
    console.log('Send data to the server (await fetch....):')
    console.log(values)
  }

  const {onSubmit, onChange, values} = useTempForm({onSuccess});

  return (
    <form onSubmit={onSubmit}>
      {createUserForm.map((attrs) => (
        <div key={attrs.name}>
          <br/>
          <br/>
          <input {...attrs} value={values[attrs.name]} onChange={onChange}/>
        </div>
      ))}
      <br/>
      <br/>
      <button type={'submit'}>Submit</button>
    </form>
  );
};

export default TempForm;