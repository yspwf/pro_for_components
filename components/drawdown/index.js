import React, { useState, useEffect, useRef } from 'react';



const YDrawDown = ({options=[], change, show=false, defaultIndex=0}) => {
  
  const [downDisplay, setDownDisplay] = useState(false);

  const [showTitle, setShowTitle] = useState({"name":"请选择"});

  useEffect(() => {
    setDownDisplay(show);
    if(defaultIndex > 0){
      setShowTitle(options[defaultIndex] ?? {"name":"未知"})
    }
  }, [show, defaultIndex])


  const titleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDownDisplay(!downDisplay);
  }

  const getOption = (value) => {
    // console.log("getOption", value);
    event.preventDefault(); // 禁用右键菜单
    event.stopPropagation(); // 阻止事件冒泡
    setDownDisplay(!downDisplay);
    setShowTitle(value)
    change && change(value);
  }

  const dropdownRef = useRef(null);

  useEffect(() => {
    //实现点击 本元素外的元素时，隐藏下拉列表（点击其他地方隐藏下拉列表）
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDownDisplay(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="YDrawDown" ref={dropdownRef}>
        <div onClick={titleClick} className="YDrawDownTitle">
          {showTitle.name}
        </div>
        <ul className={["YDrawDownList",downDisplay ? "YDrawDownListShow" : ""].join(' ')}>
          {
            options.map((item,index) => {
              // return <li key={index} onClick={() => getOption(item) }>{item.name}</li>
              return <li key={index} onClick={getOption.bind(null, item)}>{item.name}</li>
            })
          }
         </ul>
      </div>
    </>
  )
}

export default YDrawDown;