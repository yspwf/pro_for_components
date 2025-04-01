import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../common';
import '../components/HiView';
import '../page';

import {YCard, YRadioGroup, YDrawDown, YCheckGroup, CustomSteps, NavBar, YLayout, YLoading1, YPagination, TimeCount, YCountDown, YInput, YButton, YCheck, YTable, YRadio, YStep, YMenu, YLoading, YModal, YMessage } from '../components'

const { YHeader, YSlider, YContent } = YLayout;

// import Login from './login';
// import AutoScrollTable from './autoscrollTable';

const Loading = (props) => {
	const { type, size, icon, color } = props;
	return (
		<div className="box">
			<span className="icon" style={{ color }}>
				{!icon ? '122' : icon}
			</span>
		</div>
	)
}



export default () => {

  const [vals, setVals] = useState({});

  const navigate = useNavigate();

  const getUser = (value) => {
    console.log("user", value);
  }
  const getPwd = (value) => {
    console.log("pwd", value);
  }

  const title = [{
      key: "id",
      text: "id"
    },{
      key: "name",
      text: "姓名"
    },{
      key: "age",
      text: "年龄"
    },{
      key: "gender",
      text: "性别"
    },{
      key: "addr",
      text: "地址"
    },{
      key: ()=>{
        return <div>
          <YButton type="success" text="编辑" click={() => {console.log('2'); setModalVisible(true);}}/> 
          <YButton type="danger" text="删除" click={(value)=>{console.log('删除', value)}}/>
        </div> 
      },
      text: "操作"
    },{
      key: ()=>{
        
      },
      text: "备注"
  }]

  const data = [{
    id: "1",name: "yso", age:25,  gender:"男", addr:"华阳"
  },{
    id: "2",name: "哈哈", age:15, gender:"女", addr:"高新"
  },{
    id: "3",name: "噢噢", age:19, gender:"女", addr:"华阳"
  },{
    id: "4",name: "天天", age:19, gender:"女", addr:"锦江"
  },{
    id: "5",name: "亮亮", age:25, gender:"男", addr:"锦江"
  },{
    id: "6",name: "噢噢", age:19, gender:"女", addr:"华阳"
  },{
    id: "7",name: "天天", age:19, gender:"女", addr:"锦江"
  },{
    id: "8",name: "亮亮", age:25, gender:"男", addr:"锦江"
  },{
    id: "9",name: "噢噢", age:19, gender:"女", addr:"华阳"
  },{
    id: "10",name: "天天", age:19, gender:"女", addr:"锦江"
  },
  // {
  //   id: "11",name: "亮亮", age:25, gender:"男", addr:"锦江"
  // },{
  //   id: "12",name: "噢噢", age:19, gender:"女", addr:"华阳"
  // },{
  //   id: "13",name: "天天", age:19, gender:"女", addr:"锦江"
  // },{
  //   id: "14",name: "亮亮", age:25, gender:"男", addr:"锦江"
  // },{
  //   id: "15",name: "亮亮", age:25, gender:"男", addr:"锦江"
  // }
  ]

  const articleTitle = [{
    key: "id",
    text: "id"
  },{
    key: "title",
    text: "标题"
  },{
    key: "category",
    text: "分类"
  },{
    key: "author",
    text: "作者"
  },{
    key: "time",
    text: "时间"
  }]

  const articledata = [{
    id: "1",title: "总统特朗普", category:"时政",  author:"哈哈", time:"2025-01-10"
  },{
    id: "2",title: "天气", category:"天气新闻",  author:"泡泡", time:"2025-02-10"
  }]

  const MenuData = [
    {
      title: "首页",
      default:'1',
      path: '/'
    },
    {
      title: "数据",
      default:'2',
      child:[
        {
          title: "产品",
          default:'2.1',
          path: '/product'
        },
        {
          title: "类别",
          default:'2.2',
          path: '/category'
        },
        {
          title: "销量",
          default:'2.3',
          path: '/sales'
        },
        {
          title: "促销",
          default:'2.4',
          path: '/promotion'
        }
      ]
    },
    {
      title: "用户",
      default:'3',
      child:[
        {
          title: "信息",
          default:'3.1',
          path: '/info'
        },
        {
          title: "画像",
          default:'3.2',
          path: '/profile'
        }
      ]
    },
    {
      title: "设置",
      default:'4',
      child:[
        {
          title: "配置",
          default:'4.1',
          path: '/config'
        },
        {
          title: "常量",
          default:'4.2',
          path: '/contant'
        }
      ]
    }
  ]

  const [params, setParams] = useState({name: '', workcode: ''})

  const handleChange = (event) => {
    // const objValue = Object.assign(params, { [event.target.name]: event.target.value })
    // setParams(objValue);
    setParams({ ...params, [event.target.name]: event.target.value });
    // setParams({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit:',params);
  };

  const closeClick = () => {
    console.log('222222')
  }

  const [open, setOpen] = useState(false);

  

  const [modalVisible, setModalVisible] = useState(false);

  const modalConfig = {
        visible: modalVisible,
        closeModal: () => {
            setModalVisible(false);
        }
  };


    // const openModal = () => {
    //   // setOpen(val);
    //   setModalVisible(true);
    // }

    const modalChildren = (
        // <div className="dialog">
        //     <span onClick={() => setModalVisible(false)} className="closeBtn">x</span>
          <div>
            <div>这是内容</div>
            <h2>这是一个模态对话框</h2>
            {/* <p>你可以在这里添加任何内容</p> */}
            <p>你可以在这里添加任何内容你可以在这里添加任何内容你可以在这里添加任何内</p>
            <p>你可以在这里添加任何内容你可以在这里添加任何内容你可以在这里添加任何内容你可以在这里添加任何内容你可以在这里添加任何内容</p>
            <div style={{margin:"10px 0px"}}>
              <YInput defaultValue="user" change={getUser}/>
            </div>
            <div style={{margin:"10px 0px"}}>
              <YInput defaultValue="pwd" change={getPwd}/>
            </div>
            <div style={{margin:"10px 0px"}}>
              <YInput defaultValue="user" change={getUser}/>
            </div>
            <div style={{margin:"10px 0px"}}>
              <YButton text="取消" click={tick}/> <YButton text="确定" click={tick}/>
            </div>
            
        </div>
    );
    
  const showMsg = () => {
      // YMessage('提示信息')
      //YMessage('提示信息', 'waring')  // 警告类型
      YMessage('提示信息', 'error')  // 错误类型
  }

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  }

  const [current, setCurrent] = useState(1);

  const stepsList = [
    {
      key: "first",
      title: "1、步骤1",
      content: "first",
    },
    {
      key: "seconde",
      title: "2、步骤2",
      content: "seconde",
    },
    {
      key: "3",
      title: "3、步骤3",
      content: "3333",
    },
    {
      key: "4",
      title: "4、步骤4",
      content: "44",
    },
  ];

  const [load, setLoad] = useState(false)
  const [disable, setDisable] = useState(false)

  const recover = () => {
    setDisable(false); 
    setLoad(false);
    console.log('1213')
  }

  const tick = () => {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    const showdiv = document.createElement('div');
    showdiv.setAttribute('id', 'test')
    document.body.appendChild(showdiv);

    setTimeout(() => {
      document.body.removeChild(showdiv);
    }, 5000)

    const root = createRoot(document.getElementById("test"));
    root.render()
    root.render(
      element
    );
  }

  const bankList = [
    {
      key:"1",
      name: "中国银行1"
    },
    {
      key:"2",
      name: "中国银行2"
    },
    {
      key:"3",
      name: "中国银行3"
    }
  ]

  const optionSelect = (val) => {
    console.log("optionSelect", val);
  }

  const loginOut = (e) => {
    e.preventDefault();
    navigate('/', {
      replace: true
    })
  }

  return <>
    <YLayout>
      <YHeader>
        <div className="logo" style={{"padding": "0 25px"}}>
          <a href="#">MyWebsite</a>
        </div>
        {/* <NavBar/> */}
        {/* <div className="auth-buttons">
            <a href="#" className="login">登录</a>
            <a href="#" className="signup">注册</a>
        </div> */}
        <div style={{"width":"10%", "alignContent": "center", "textAlign":"center"}}>
        <YButton type='success' click={loginOut} text="退出"/> 
        </div>
      </YHeader>
      <YLayout>
        <YSlider style={{width:"150px"}}><YMenu menu={MenuData}/></YSlider>
        <YContent>
          main

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="red">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" fill="blue">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
          </svg>

          {/* <YCard>
          <div style={{margin:"10px 0px"}}>
              <YInput defaultValue="user" change={getUser}/>
            </div>
            <div style={{margin:"10px 0px"}}>
              <YInput defaultValue="pwd" change={getPwd}/>
            </div>
            <div style={{margin:"10px 0px"}}>
            <YButton text="取消" click={(value)=>{console.log('取消', value)}}/> 
            <YButton type="success" text="登录" click={(value)=>{console.log('登录', value)}}/> 
            </div>
          </YCard> */}

          {/* <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" class="svg"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" fill="blue">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
          </svg> */}
          
          {/* <button onClick={() => {console.log('2'); setModalVisible(true);}} className="openBtn">open modal</button> */}
          <YModal {...modalConfig}>{modalChildren}</YModal> 

          <div style={{margin:"10px 0px", display: "flex"}}>
            {/* <YCheck click={ () => {console.log('YCheckout')}}/>

            <YCheckGroup click={(val) => {console.log(val)}}>
              <YCheck value="微信">微信</YCheck>
              <YCheck value="支付吧">支付吧</YCheck>
              <YCheck value="银联">银联</YCheck>
            </YCheckGroup> */}

            {/* <YCheckGroup active="vue" click={(val) => {console.log(val)}}>
              <YCheck value="vue">vue</YCheck>
              <YCheck value="react">react</YCheck>
              <YCheck value="java">java</YCheck>
            </YCheckGroup> */}
            
            <YRadioGroup name="支付" click={(val) => {console.log(val)}}>
              <YRadio value="微信">微信</YRadio>
              <YRadio value="支付吧">支付吧</YRadio>
            </YRadioGroup>

            {/* <YRadioGroup name="23" click={(val) => {console.log(val)}}>
              <YRadio value={'1'}>方式1</YRadio>
              <YRadio value={'2'}>方式2</YRadio>
              <YRadio value={'3'}>方式3</YRadio>
              <YRadio value={'4'}>方式4</YRadio>
            </YRadioGroup>   */}
          </div>


          <YButton text="loading show" click={() => {setLoad(!load); setTimeout(()=> {setLoad(false)}, 3000)}}/>
          <YLoading view={load}/> 

          <YButton type='success' text="success"/> 
          <YButton type='error' text="error"/> 
          <YButton type='danger' text="danger"/> 
          <YButton type='warn' text="warn"/> 

          {/* <YButton disabled={disable} loader={load} click={() => { setLoad(!load); setDisable(!disable); setTimeout(()=>{
            recover()
            }, 3000)} }/>

            <YButton click={tick}/> */}
            
            <YDrawDown defaultIndex={4} change={optionSelect} options={bankList}/>

            {/* <button id="prevButton">&#10094;</button>
            <button id="nextButton">&#10095;</button> */}

            <YTable title={title} data={data} rowSelect={(val) => {console.log("rowSelect", val)}}/>

            {/* <YPagination/><br/>
            <YPagination total={12}/><br/>
            <YPagination total={32}/><br/> */}
            <YPagination total={52}/><br/>

            {/* <div className={show?'show':'hide'}>hello</div>
            <button onClick={handleToggle}>toggle</button>
          <YTable title={title} data={data}/>
          <YPagination total={56} pageSize={5}/>

         
          <CustomSteps current={current} items={stepsList} />
          <YButton click={() => {
            setCurrent((pre) => pre - 1);
          }} text="后退"/>
        <YButton click={() => {
            console.log('12')
            setCurrent((pre) => pre + 1);
          }} text="前进" /> */}


      {/* <YStep title="空间看看" number={1} />
      <YStep title="空看看" number={2} done={false}/>
      <YStep title="空看看1" number={3} done={false}/> */}
      
        </YContent>
      </YLayout>
      
    </YLayout>
    {/* <Loading/> */}
    {/* <YLoading1/> */}

    {/* <YButton click={() => { YLoading1.open({content: '正在上传'}) } }/> */}

    {/* <YButton click={() => { YLoading1().open({content: '正在上传111'}); setTimeout(()=>{ console.log('123'); YLoading1().close()}, 3000); } }/>
    <br/>
    <br/>
    <YPagination total={56} pageSize={20}/>
<br/><br/><br/>
    <YPagination total={56} pageSize={5}/>

    <YButton text="modal" click={openModal}/> */}

    {/* <button onClick={() => setModalVisible(true)} className="openBtn">open modal</button> */}
    {/* <YModal {...modalConfig}>{modalChildren}</YModal> */}

{/*     
    <div className="App" id="app">
        <button onClick={showMsg}>消息提示</button>
    </div>


    <YCountDown endTime={1740787200000} />
    <YCountDown endTime='1740787200000' />

    <TimeCount/> */}

    {/* <YModal open={open}>
      <h2>这是一个模态对话框</h2>
      <p>你可以在这里添加任何内容</p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="workcode"
          type="text"
          onChange={handleChange}
          placeholder="Workcode"
        />
        <button type="submit">Submit</button>
      </form>
    </YModal> */}

    {/* <div style={{width:"600px", position:"absolute", left:"3%", top:"3%", transform:"translate(-50%, -50%)" }}> */}
    {/* <div style={{width:"800px", position:"absolute", left:"3%", top:"50%"}}>
      <div>
        {/* <YLoading/> 
      </div>
      <div>
        <YMenu menu={MenuData}/>
      </div>
      <div style={{margin:"10px 0px"}}>
      <YInput defaultValue="user" change={getUser}/>
      </div>
      <div style={{margin:"10px 0px"}}>
      <YInput defaultValue="pwd" change={getPwd}/>
      </div>
      <div style={{margin:"10px 0px"}}>
      <YButton click={()=>{console.log('btn1')}}/> <YButton click={()=>{console.log('btn2')}}/>
      </div>
      <div style={{margin:"10px 0px"}}>
        <YCheckout/>
        <YRadio/>
      </div>
      <div>
        <YTable title={title} data={data}/>
      </div>

      <div>
        <YTable title={articleTitle} data={articledata}/>
      </div>

      <div>
        <YTable title={title} data={data}/>
      </div>


      <YStep title="空间看看" number={1} />
      <YStep title="空看看" number={2} done={false}/>
      <YStep title="空看看1" number={3} done={false}/>
      


  
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="workcode"
          type="text"
          onChange={handleChange}
          placeholder="Workcode"
        />
        <button type="submit">Submit</button>
      </form>


    </div> */}
    </>
}





