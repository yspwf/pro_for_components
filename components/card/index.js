import React, {useState, useEffect} from 'react';

const YCard = ({children, style, classname}) => {

  const [classList, setClassList] = useState(["YcardContainer"]);

  useEffect(() => {
    if(Array.isArray(classname)) {
      setClassList([...classList, ...classname])
    }else{
      setClassList([...classList, classname])
    }
  }, [classname])

  return <>
    <div style={style} className={classList.join(' ')}>
      {children}
    </div>
  </>
}

export default YCard;