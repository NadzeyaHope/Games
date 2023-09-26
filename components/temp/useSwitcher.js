import {useState} from 'react';

const useSwitcher = () => {
  const [active, setActive] = useState(0);

  const onClick = (index) => () => {
    setActive(index);
  }

  return {active, onClick}
}

export default useSwitcher;