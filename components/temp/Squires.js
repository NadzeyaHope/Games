import React, {useState} from 'react';
import useSwitcher from '@/components/temp/useSwitcher';

const styles = {
  root: {
    display: 'flex',
    padding: 65
  },
  squire: {
    width: 100,
    height: 100,
    border: '1px black solid',
    cursor: 'pointer',
  },
  active: {
    background: '#9666d5'
  }
}

const items = new Array(8).fill(0);

const Circles = () => {
  const {onClick, active} = useSwitcher();

  return (
    <div style={styles.root}>
      {items.map((item, index) => (
        <div
          style={{...styles.squire, ...(index === active ? styles.active : {})}}
          onClick={onClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Circles;