import React, { useState } from 'react';


const YPagination = ({total=1, pageSize=5}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(pageSize);
  const [pageConfig, setPageConfig] = useState({start:1, end:6});

  const [previousStatus, setPreviousStatus] = useState(true)
  const [nextStatus, setNextStatus] = useState(false)
 
  const pageNum = Math.ceil(total / size);

  const previousPage = () => {
    const page = currentPage-1 <= 1 ? 1 : currentPage-1;

    setCurrentPage(page);
    if(page<=1){
      setPreviousStatus(true);
    }
    setNextStatus(false);
    // setCurrentPage(page);
    const diffVal = pageConfig.end - pageConfig.start;
    const leftDiffVal = Math.floor((pageConfig.end - pageConfig.start)/2);
    let start = page-leftDiffVal>1 ? page-leftDiffVal : 1;
    let end = start + diffVal;
    
    if(end>pageNum){
      end = pageNum;
      start = pageNum - diffVal;
    }
    if(start<1){
      start = 1;
    }
    setPageConfig({start, end})
  }

  const nextPage = () => {
    const page = currentPage+1 >= pageNum ? pageNum : currentPage+1;
    setCurrentPage(page);
    if(page >= pageNum) {
      setNextStatus(true);
    }
    setPreviousStatus(false)
    // setCurrentPage(page);
    let start = page-2>1 ? page-2 : 1;
    let end = start + (pageConfig.end - pageConfig.start);
    
    if(end>pageNum){
      end = pageNum;
      start = pageNum - (pageConfig.end - pageConfig.start);
    }
    if(start<1){
      start = 1;
    }
    setPageConfig({start, end})
  }

  const lastPage = () => {

  }

  const firstPage = () => {

  }
  

  const pageClick = (page) => {
    setCurrentPage(page);
    
    if(page<=1){
      setPreviousStatus(true);
    }else{
      setPreviousStatus(false);
    }
    if(page>=pageNum){
      setNextStatus(true);
    }else{
      setNextStatus(false);
    }
    
    let start = page-2>1 ? page-2 : 1;
    let end = start + (pageConfig.end - pageConfig.start);
    
    if(end>pageNum){
      end = pageNum;
      start = pageNum - (pageConfig.end - pageConfig.start);
    }
    if(start<1){
      start = 1;
    }
    
    setPageConfig({start, end})
  }

  

  const PageList = () => {
    let start = pageConfig.start, end = pageConfig.end; 
    if(end>pageNum){
      end = pageNum;
    }
    const leftDiffVal = Math.ceil((pageConfig.end - pageConfig.start)/2);
    
    const list = [];
    if(currentPage >= leftDiffVal && currentPage >= 4 && leftDiffVal>0){
      // list.push(<button onClick={() => firstPage()}>首页</button>);
      // list.push(<button onClick={() => firstPage()}>1</button>);
      list.push(<button key={0}>...</button>);
    }
    
    for (let i = start; i <= end; i++) {
      list.push(<button className={currentPage==i ? "active":""} onClick={() => pageClick(i)} key={i}>{i} </button>)
    }
   
    if(end<pageNum){
      // list.push(<button onClick={() => firstPage()}>首页</button>);
      // list.push(<button onClick={() => firstPage()}>1</button>);
      list.push(<button key={pageNum}>...</button>);
    }

    return list;
    // return <button>{i}</button>
  }

  

  

  return (
        <div className="pagination">
          {/* <button onClick={() => previousPage()}>上一页</button> */}
          <button disabled={previousStatus ? true : false} onClick={() => previousPage()}>&#10094;</button>
         
          {/* <button onClick={() => firstPage()}>首页</button>
          <button onClick={() => previousPage()}>上一页</button> */}
          {/* <button>1</button>
          <button>...</button>
          <button disabled='disabled'>4</button>
          <button>5</button>
          <button className="active">6</button>
          <button>7</button>
          <button>...</button>
          <button>11</button> */}

          <PageList/>
          {/* <button onClick={() => nextPage()}>下一页</button> */}
          <button disabled={nextStatus ? true : false} onClick={() => nextPage()}>&#10095;</button>
          
          {/* <button onClick={lastPage}>尾页</button> */}
          <button style={{"marginLeft": "30px"}}>共 {total} 条</button>
          <button style={{"marginLeft": "30px"}}>共 {pageNum} 页</button>
        </div>
        )
}

export default YPagination;