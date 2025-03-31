import React, {useState} from "react";
import axios from "axios";
import Scroll from "../../components/Scroll";
 
const Index = () => {
     //进度条要达到的总值
     const [proTotal,setProTotal] = React.useState(500);
     //进度条当前的值
     const [proCur,setProCur] = React.useState(500);
    useEffect(() => {
        //通过api接口从服务端获取配置参数
        let result = await axios({
                method: "post",
                url: "服务端apiurl地址",
                data: JSON.stringify({
                      "服务端请求api接口",
                      {"请求参数名": "请求参数值"},
                }),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
          });
        
        //设置配置
        setProTotal(result.proTotal);
        setProCur(result.proCur);
    });
 return (
        <div class={style.main}>
                 <Progress
                     width="100%"
                     height={"0.73rem"}
                     borderRadius={"1.2rem"}
                     percentage={(preCur / proTotal) * 100}
                     textColor={"#fff"}
                     fontSize={"0.6rem"}
                     progressColor={"#f1e60a"}
                     backgroundColor={"#043330"}
                     text={`${reCur} / ${proTotal}`}
                 />
        </div>
    ）
}
 
export default Index;