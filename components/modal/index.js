// import React, { useEffect, useState } from 'react';
// // import './Modal.css';

// const YModal = ({open=false, children}) => {

//   const [closeStatus, setCloseStatus] = useState(open);

//   const onClose = () => {
//     setCloseStatus(!closeStatus);
//     close && close(!closeStatus)
//   }

//   // const styles = {
//   //   display: closeStatus ? 'red' : 'blue',
//   //   fontSize: '20px',
//   //   fontWeight: 'bold',
//   // };


//   useEffect(()=>{
//     // console.log("open", open)
//     if(open){
//       setCloseStatus(open);
//       // document.body.style.overflow = 'hidden';
//     }else{
//       // document.body.style.overflow = 'auto';
//     }
    
//     // return () => {
//     //   document.body.style.overflow = 'auto';
//     // }
//   }, [open])

//     return (
//         <div className="YModalOverlay" style={{"display": closeStatus ?  "block": "none"}}>
//             <div className="YModalContent">
//                 {/* <h2>这是一个模态对话框</h2>
//                 <p>你可以在这里添加任何内容。</p>
//                 <button onClick={onClose}>关闭</button> */}
//                 {children}
//                 <button onClick={onClose}>关闭</button>
//             </div>
//         </div>
//     );
// }

// export default YModal;



import React, { useState, useEffect, useRef } from 'react';
// import './css/modal.css';
import { createPortal } from 'react-dom';
import CloseIcon from './close';

const YModal = ({ children, closeModal, visible=false }) => {

    // 在第一次渲染时取 body 原始的 overflow 值
    const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow);

    const [modalVisible, setModalVisible] = useState(visible);

    useEffect(()=>{
            setModalVisible(visible);
    }, [visible])

    useEffect(()=>{
        // setModalVisible(modalVisible);
        if (modalVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, [modalVisible])

    // const modalConfig = {
    //         visible: modalVisible,
    //         closeModal: () => {
    //             setModalVisible(false);
    //         }
    // };

    const btnCloseModal = () => {
        setModalVisible(!modalVisible);
        closeModal();
        // document.body.style.overflow = bodyOverflow.current;
        document.body.style.overflow = 'hidden';
    }

    
    useEffect(() => { // 根据 visible 来动态修改 body 的 overflow 值
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, [visible]);


    function handleClick(event) {
        // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
        if (event.target === event.currentTarget) {
            setModalVisible(!modalVisible);
            closeModal();
        }else{
            document.body.style.overflow = bodyOverflow.current;
        }
        
    }
    
    useEffect(() => {
        // 组件销毁时恢复 body 的 overflow 值
        return () => {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, []);

    const renderModal = createPortal(
        <div className="modal" onClick={handleClick}>
            <div className="dialog">
            <span onClick={btnCloseModal} className="closeBtn"><CloseIcon color='red'/></span>
                {children}
            </div>
        </div>,
        document.body
    );

    return <>{modalVisible && renderModal}</>;
};

export default React.memo(YModal);