import React, { useState } from 'react';
const YRadioGroup = ({click, active, children}) => {

    const [activeValue, setActiveValue] = useState(active);
    
    const handleActiveChange = (value) => {
        // console.log(`${value}被选中了`)
        click && click(value);
        setActiveValue(value);
    }


    return (
      <div>
                {
                    React.Children.map(children, child => {
                        let isActive = activeValue === child.props.value ? true : false;
                        return React.cloneElement(child, {
                            label: child.props.children,
                            value: child.props.value,
                            active: isActive,
                            click: handleActiveChange
                        })
                    })
                }
      </div>
  )
    
}
export default YRadioGroup;
