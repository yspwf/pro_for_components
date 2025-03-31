import React, { useState, useEffect } from 'react';


const YCheckbox = ({style, click, value, checked=false, label}) => {

  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(()=>{
    setCheckStatus(checked);
  }, [checked])

  const clickChecked = () => {
    setCheckStatus(!checkStatus);
    const checkedSelect = !checkStatus;
    click && click({checkedSelect, value});
  }

  // return <div style={style} onClick={clickChecked} className={["Ycheckbox", checkStatus ? "YBoxChecked":""].join(' ')}></div>
{/* <div className="radio-wrap" onClick={clickChecked}></div> */}

  return <div style={Object.assign({display: "flex", cursor:"pointer", justifyContent: "center"}, style)} onClick={clickChecked}>
          <div style={style,{margin: "2px 0 0 0"}} className={["Ycheckbox", checkStatus ? "YBoxChecked":""].join(' ')}></div>
          {label ? <div className="label">{label}</div> : null}
    </div>
}

export default YCheckbox;