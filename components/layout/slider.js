import React from 'react';

const YSlider = ({style, children}) => {

  return (
  <div style={style} className="YSlider">{children}</div>
  )

}

YSlider.prototype.name = 'YSlider';

export default YSlider;