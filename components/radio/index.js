import React, { useState, useEffect } from 'react';


const YRadio = ({click, style, value, active, label}) => {
  // console.log(value, active)
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(()=>{
    setCheckStatus(active);
  }, [active])

  const clickChecked = () => {
    setCheckStatus(!checkStatus);
    click && click(value);
  }

  // return <div style={style} onClick={clickChecked} className={["Yradio", checkStatus ? "YBoxChecked":""].join(' ')}></div>

  return (
    <div className="radio-wrap" onClick={clickChecked} style={style}>
        {/* <div className="left" onClick={clickChecked}> */}
            {/* <div className={`circle ${checkStatus === true ? 'active' : ''} `}>
                <div className="fork"></div>
            </div> */}
            <div className={["Yradio", checkStatus ? "YBoxChecked":""].join(' ')}></div>
            <div className="label">{label ?? '单选'}</div>
        {/* </div> */}
    </div>
  // <div style={style} onClick={clickChecked} className={["Yradio", checkStatus ? "YBoxChecked":""].join(' ')}>{label}</div>
  )
}

export default YRadio;