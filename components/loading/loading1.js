// const Loading = (props) => {
// 	const { type, size, icon, color } = props;
// 	return (
// 		<div className="box">
// 			<span className="icon" style={{ color }}>
// 				{!icon ? <CustomIcon type={type} size={size} /> : icon}
// 			</span>
// 		</div>
// 	)
// }



import React, {FC, memo, MemoExoticComponent} from "react";
import {createRoot, Root} from "react-dom/client";
 
interface ILoading extends MemoExoticComponent<FC> {
  show?: () => void,
  remove?: () => void,
  wrapperRoot?: Root
}
 
const ZJLoading: ILoading = memo(() => {
  return (
      <div style={{position: "fixed", zIndex: 9999}}>
        <p>你好</p>
      </div>
  )
})
ZJLoading.show = function () {
  const oWrapper = document.createElement("div")
  oWrapper.setAttribute("id", "loading_dialog")
  document.body.appendChild(oWrapper)
  this.wrapperRoot = createRoot(oWrapper)
  this.wrapperRoot.render(<ZJLoading/>)
}
ZJLoading.remove = function () {
  this.wrapperRoot?.unmount()
}
export default ZJLoading