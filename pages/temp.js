import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/temp/Header/Header';
import {useState} from 'react';

const Temp = () => {
  const [value, setValue] = useState('')

  const onChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <div style={{padding: 20}}>
      <Button onClick={() => alert(value)} fullWidth>
        Show me value
      </Button>
      <Button onClick={() => setValue('')} fullWidth>
        Clear value
      </Button>
      <br/><br/>
      <Input nameLabel={'Last Name'} fullWidth onChange={onChange} value={value}/>
      <Header/>
    </div>
  )
};

export default Temp;