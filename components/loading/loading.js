// import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
// // import stylus from './stylus.styl';
// // import classNames from "classnames/bind";
 
// // const ctx = classNames.bind(stylus);
 
// const LoadingNode = (props) => {
//     const {content} = props;
//     return (
//         <div className='loading-mask-box-npsp'>
//             <div className='loading-la-dl'>
//                 <div className='loading-cir-la'></div>
//                 <div className='loading-cir-la-content'>{content ? content : '正在刷新'}</div>
//             </div>
 
//         </div>
//     )
// }
 
// const Loading = () => {
//     // constructor(props) {
//     //     super(props);
//     //     let element = document.createElement('div')
//     //     element.id = 'other-root';
//     //     this.state = {
//     //         element,
//     //     }
//     // }

//     const [element, setElement] = useState();

//     useEffect(()=>{
//       let element = document.createElement('div');
//       element.id = 'other-root';
//     }, [])
 
//     open = (data) => {
//         const {element} = this.state;
//         document.body.appendChild(element);
//         ReactDOM.createPortal(
//             <LoadingNode
//                 content={data.content}
//             />,
//             element);
//     }

//     close = () => {
//         const {element} = this.state;
//         element.remove()
//     }
// }
// export default Loading;

// // const loading = new Loading();
// // export default loading;



// import React from 'react';
// import ReactDOM from 'react-dom'
// // import stylus from './stylus.styl';
// // import classNames from "classnames/bind";
 
// // const ctx = classNames.bind(stylus);
 
// const LoadingNode = (props) => {
//     const {content} = props;
//     return (
//         <div className={ctx('loading-mask-box-npsp')}>
//             <div className={ctx('loading-la-dl')}>
//                 <div className={ctx('loading-cir-la')}></div>
//                 <div className={ctx('loading-cir-la-content')}>{content ? content : '正在刷新'}</div>
//             </div>
 
//         </div>
//     )
// }
 
// class Loading extends React.Component {
//     constructor(props) {
//         super(props);
//         let element = document.createElement('div')
//         element.id = 'other-root';
//         this.state = {
//             element,
//         }
//     }
 
//     open = (data) => {
//         const {element} = this.state;
//         document.body.appendChild(element);
//         ReactDOM.render(
//             <LoadingNode
//                 content={data.content}
//             />,
//             element);
//     }
//     close = () => {
//         const {element} = this.state;
//         element.remove()
//     }
// }
 
// const loading = new Loading();
// export default loading;


import React, { useEffect, useState } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client'


const LoadingNode = (props) => {
    const { content } = props;
    return (
        <div className="loading-mask-container">
            <div className="loading-content">
                <div className="loading-cir-la" />
                <div className="loading-cir-la-content">{content ? content : '正在加载'}</div>
            </div>
        </div>
    )
}

// class Loading extends React.Component {
//     constructor(props) {
//         super(props);
//         let element = document.createElement('div')
//         element.id = 'other-root';
//         this.state = {
//             element
//         }
//     }

//     open = (data) => {
//         const { element } = this.state;
//         document.body.appendChild(element);   // 将指定的DOM类型的节点加到document.body的末尾
//         ReactDOM.render(
//             <LoadingNode
//                 content={data.content}
//             />,
//             element
//         );
//     }
//     close = () => {
//         const { element } = this.state;
//         element.remove()
//     }
// }

// const RLLoading = new Loading();
// export default RLLoading;


const RLLoading = () => {
  // constructor(props) {
  //     super(props);
  //     let element = document.createElement('div')
  //     element.id = 'other-root';
  //     this.state = {
  //         element
  //     }
  // }

  // const [element, setElement] = useState();

  // useEffect(()=>{
    let element = document.createElement('div');
    element.id = 'other-root';
  //   setElement(element);
  // }, [])

  return {
      open: (data) => {
          // console.log(data)
          // const { element } = this.state;
          document.body.appendChild(element);   // 将指定的DOM类型的节点加到document.body的末尾
          const wrapperRoot = createRoot(element)
          wrapperRoot.render(<LoadingNode content={data.content}/>)

          // const oWrapper = document.createElement("div")
          // oWrapper.setAttribute("id", "loading_dialog")
          // document.body.appendChild(oWrapper)
          // const wrapperRoot = createRoot(oWrapper)
          // wrapperRoot.render(<LoadingNode content={data.content}/>)
      },

      close: () => {
        const load = document.getElementById('other-root')
        if (load) {
          document.body.removeChild(load)
        }
        // const wrapperRoot = createRoot(element);
        // wrapperRoot.unmount()
          // const { element } = this.state;
          // element.remove()
      }
  }
}

// const RLLoading = new Loading();
export default RLLoading;