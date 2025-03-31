import React, { useEffect, useState } from 'react';

const YButton = ({text='按钮', type='default', click, loader=false, disabled=false}) => {

  const [btntype, setBtntype] = useState();

  useEffect(()=> {
    setBtntype(type)
  }, [type])

  return <>
      <button disabled={disabled} onClick={click} className={["Ybutton", btntype ? `Ybutton_${btntype}` : ''].join(' ')}>
      {loader ? <div className="YbuttonLoader"></div> : null }
      {text}
      </button>
    </>
}

export default YButton;