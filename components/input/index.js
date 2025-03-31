import React, { useState, useEffect } from 'react';
import CloseIcon from './close';

const YInput = ({change, defaultValue=''}) => {

  const [ctx, setCtx] = useState('');

  useEffect(()=>{
    if (defaultValue) {
      setCtx(defaultValue);
    }
  }, [defaultValue])

  const getCtx = (e) => {
    setCtx(e.target.value);
    change && change(e.target.value);
  }
 
  const clearCtx = () => {
    setCtx('');
    change && change('');
  }


  return <div className="YinputDiv">
          <input name={name} type="text" className="Yinput" value={ctx} onChange={getCtx} />
          <CloseIcon click={clearCtx}/>
        </div>;
}

export default YInput;
