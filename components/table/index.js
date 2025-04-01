import React, { useState, Children } from 'react';

import YCheckbox from '../checkbox';

const YTable = ({title=[], data=[], rowSelect}) => {

  const [keys, setKeys] = useState(() => {
    if(title.length>0) {
      return Object.values(title).map(item => item.key);
    };
    return [];
  })

  return <div className="Ytable">
      <div className="YtableTitle">
        <div className="YtableRow">
          <div className="YtableCell">
          <div style={{display: "inline-block", marginTop: "5px"}}><YCheckbox label="全选" style={{left:"20%", top:"50%"}}/></div>
          </div>
          {
            title.length>0 && title.map((item, index) => {
              return <div key={index} className="YtableCell">
                {item.text}
              </div>
            })
          }
          {/* <div className="YtableCell">序号</div>
          <div className="YtableCell">姓名</div>
          <div className="YtableCell">年龄</div>
          <div className="YtableCell">性别</div> */}
        </div>
      </div>
      <div className="YtableBody">
          {
            data.length>0 && data.map((dataItem, index) => {
              return <div key={index} className="YtableRow">
                <div className="YtableCell"><YCheckbox checked={true} click={() => {rowSelect(dataItem)}} style={{left:"50%", top:"50%"}}/></div>
                {
                  keys.length>0 && keys.map((item, keyIndex) => {
                    if(typeof item == 'string') {
                      return <div key={keyIndex} className="YtableCell">{dataItem[item]}</div>
                    }
                    
                    if(typeof item == 'function') {
                      const operations = item();
                      // {Children.count(children) > 0 ? children : <div>我是假的组件</div>}
                      return  <div key={keyIndex} className="YtableCell">
                      {
                        Children.count(operations?.props.children) > 0
                        &&
                        Children.map(operations?.props.children, (child, index) => {
                          const transmitValue = (val)=>{
                            child.props.click && child.props.click(val);
                          }

                          return React.cloneElement(child, {
                            click: () => {
                              transmitValue(dataItem);
                            },
                          });
                        })
                      }
                      </div>
                      {/* return <div key={keyIndex} className="YtableCell">{item()}</div> */}
                    }
                  })
                }
              </div>
            })
          }

          {/* <div className="YtableCell">1</div>
          <div className="YtableCell">数据1</div>
          <div className="YtableCell">数据2</div>
          <div className="YtableCell">数据3</div> */}
        {/* </div> */}
      </div>
  </div>
}

export default YTable;