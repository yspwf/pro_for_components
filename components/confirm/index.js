/*
 * @Author: hongbin
 * @Date: 2022-09-16 20:24:16
 * @LastEditors: hongbin
 * @LastEditTime: 2022-09-16 20:58:06
 * @Description:消息条
 */
import { createRef, FC, useCallback, useImperativeHandle, useRef, useState } from "react";
// import styled from "styled-components";

// interface IShowMessage {
//     (
//         /**
//          * 提示信息
//          */
//         message: string | JSX.Element,
//         /**
//          * 持续时间 默认 300ms
//          */
//         duration?: number
//     ): void;
// }

// interface MessageBarRef {
//     showMessage: IShowMessage;
// }

const ref = createRef<MessageBarRef>();

export const showMessage: IShowMessage = (...rest) => {
    ref.current?.showMessage(...rest);
    console.log(ref.current);
};

const opacityDuration = 300;

interface IProps {}

const MessageBar: FC<IProps> = () => {
    const [isShow, _setIsShow] = useState(false);
    const [message, _setMessage] = useState<Parameters<IShowMessage>[0]>("message");
    const timer = useRef<NodeJS.Timeout>();

    const showMessage: MessageBarRef["showMessage"] = useCallback((msg, duration = 300) => {
        clearTimeout(timer.current);
        _setIsShow(true);
        _setMessage(msg);
        timer.current = setTimeout(() => {
            _setIsShow(false);
            //不算显示消息条时间
        }, duration + opacityDuration);
    }, []);

    useImperativeHandle(
        ref,
        () => ({
            showMessage,
        }),
        [showMessage]
    );

    return <Container isShow={isShow}>{message}</Container>;
};

export default MessageBar;

const Container = styled.div<{ isShow: boolean }>`
    position: fixed;
    top: 10vh;
    left: 50vw;
    transform: translateX(-50%);
    background: #00000077;
    color: #fff;
    padding: 1vmin 1vmax;
    border-radius: 0.5vmin;
    letter-spacing: 1px;
    box-shadow: 3px 4px 12px 0px #0000008c;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: opacity, visibility;
    transition-duration: ${opacityDuration / 1000}s;
    opacity: ${({ isShow }) => +isShow};
    visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
    z-index: 99999999;
    user-select: none;
`;

