import React, { useState, useEffect } from 'react';
const YCheckGroup = ({click, active, children}) => {

    const [activeValue, setActiveValue] = useState(active);

    // const [checkValues, setCheckValues] = useState(() => {
    //   return active !== undefined ? [active] : [];
    // });

    const [checkValues, setCheckValues] = useState([]);

    useEffect(()=>{
      if(active !== undefined) setCheckValues([...checkValues,{"checkedSelect":true, "value": active}])
    }, [active])
    
    const handleActiveChange = (value) => {
        // console.log(`${JSON.stringify(value)}被选中了`)
        // console.log(checkValues);
        setActiveValue(value);
        if(!value.checkedSelect){
          const targetIndex = checkValues.findIndex(val => val.value == value.value);
          checkValues.splice(targetIndex, 1);
          setCheckValues([...checkValues]);
          const finalResult = checkValues.map(val => val.value);
          click && click([...finalResult]);
        }else{
          setCheckValues([...checkValues, value]);
          const finalResult = [...checkValues, value].map(val => val.value);
          click && click([...finalResult]);
        }
        
    }


    return (
      <div>
                {
                    React.Children.map(children, child => {
                        // console.log(checkValues.map(val => val.value).includes(child.props.value));
                        // let isActive = activeValue === child.props.value ? true : false;
                        let isActive = checkValues.map(val => val.value).includes(child.props.value);
                        return React.cloneElement(child, {
                            label: child.props.children,
                            value: child.props.value,
                            checked: isActive,
                            click: handleActiveChange
                        })
                    })
                }
      </div>
  )
    
}
export default YCheckGroup;
