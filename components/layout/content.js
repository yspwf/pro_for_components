import React from 'react';

const YContent = ({children}) => {

  return (
  <div className="YContent">{children}</div>
  )

}

YContent.prototype.name = 'YContent';

export default YContent;