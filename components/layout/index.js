import React from 'react';

import YHeader from './header';
import YSlider from './slider';
import YContent from './content';

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
  backgroundColor: "#ffffff",
    /* padding-top: 10px; */
  display: "flex",
  justifyContent:"space-between",
  // height: "90vh",
    // alignItems: "center",
    // borderBottom: "1px solid #ccc",
  flex: "1",
}

const header = {
  flex: "0 0 auto",
  display: "flex",
  justifyContent:"space-between",
  // height: "10vh",
}

const YLayout = ({children}) => (
  // console.log("children", children[1].props.children);

 
    <>
    {
      React.Children.map(children, child => {
        switch(child.type.prototype.name){
          case "YHeader":
            return <div style={header}>{React.cloneElement(child, {})}</div>;
            break;
          default:
            return <div style={layoutStyle}>{children[1].props.children}</div>
            break;
        }
        // return child.type.name == 'YHeader' ?  
        // <div style={header}>{React.cloneElement(child, {})}</div> 
        // : 
        // <div style={layoutStyle}>{React.cloneElement(child, {})}</div>
      })
    }
    </>
  
  // {
  //   React.Children.map(children, child => {
  //     // console.log(child);
  //     return React.cloneElement(child, {});
  //     // return React.cloneElement(child, {})
  //   })
  // }
  //  <>

  // {/* {children} */}
  //   {/* {children[0] && children[0].type.name == 'YHeader' ? <div style={header}>{children[0]}</div> : ''}
  //   <div style={layoutStyle}>
  //     {children[1].props.children}
  //   </div> */}
  //   {/* <div style={layoutStyle}>
  //     {/* {children} */}
  //    {/* {children[1].props.length} */}
  //   {/* </div> */}
  // </>

  // <div style={layoutStyle} style={{"flexDicretion": children[0].type.name == 'YHeader' ? 'column' : 'row'}}>
  //   {/* {children} */}
  //   {children[0]}
  // </div>
)


// export {YLayout}
// export {default as YHeader} from './header'
// export {default as Content} from './content'
// export {default as Footer} from './footer'
// export {default as Aside} from './aside'

YLayout.YHeader = YHeader;
YLayout.YSlider = YSlider;
YLayout.YContent = YContent;

export default YLayout;