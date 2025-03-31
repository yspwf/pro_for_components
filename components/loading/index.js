import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const YLoading = ({view=false}) => {

  const [loadingShow, setLoadingShow] = useState(false);

  useEffect(()=> {
    setLoadingShow(view);
  }, [view])

  // const renderLoad = () => {
  //     return <>
  //       <div className="bgCover">
  //         <div className="YLoading"></div>
  //       </div>
  //     </>
  // }
  const renderLoad = createPortal(
          <div className="YLoading"></div>,
          document.body
  )

  return <>{loadingShow && renderLoad}</>
}
export default YLoading;

