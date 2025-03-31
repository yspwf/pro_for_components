import React, { useState, useEffect, useRef } from "react";
import "./autoscrollTable.css"; // 引入样式文件

const AutoScrollTable = () => {
  // 示例数据
  const [data, setData] = useState([
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 35, city: "Chicago" },
    { id: 4, name: "David", age: 40, city: "Houston" },
    { id: 5, name: "Eva", age: 28, city: "Phoenix" },
    { id: 6, name: "Frank", age: 33, city: "Philadelphia" },
    { id: 7, name: "Grace", age: 22, city: "San Antonio" },
    { id: 8, name: "Hank", age: 45, city: "San Diego" },
    { id: 9, name: "Ivy", age: 29, city: "Dallas" },
    { id: 10, name: "Jack", age: 31, city: "San Jose" },
  ]);

 
  const tableRef = useRef(null); // 用于引用表格容器
  const scrollIntervalRef = useRef(null); // 存储自动滚动的定时器
 
  // 开始自动滚动
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) return; // 如果已经有定时器，则不重复启动
 
    scrollIntervalRef.current = setInterval(() => {
      const table = tableRef.current;
      if (!table) return;
 
      const scrollHeight = table.scrollHeight; // 表格总高度
      const clientHeight = table.clientHeight; // 可视区域高度
      const maxScroll = scrollHeight - clientHeight; // 最大滚动距离
 
      let scrollTop = table.scrollTop + 1; // 每次滚动 1px
      if (scrollTop >= maxScroll) {
        scrollTop = 0; // 滚动到底部后回到顶部
      }
      table.scrollTop = scrollTop;
    }, 50); // 每 50ms 滚动一次
  };
 
  // 停止自动滚动
  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };
 
  // 处理鼠标事件
  const handleMouseEnter = () => {
    stopAutoScroll();
  };
 
  const handleMouseLeave = () => {
    startAutoScroll();
  };
 
  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;
 
    // 初始化自动滚动
    startAutoScroll();
 
    // 监听鼠标事件
    table.addEventListener("mouseenter", handleMouseEnter);
    table.addEventListener("mouseleave", handleMouseLeave);
 
    // 清除事件监听和定时器
    return () => {
      table.removeEventListener("mouseenter", handleMouseEnter);
      table.removeEventListener("mouseleave", handleMouseLeave);
      stopAutoScroll();
    };
  }, []);
 
  return (
    <div className="table-container">
  <h2>自动滚动表格（鼠标悬停时停止滚动）</h2>
  <div className="scrollable-table" ref={tableRef}>
    <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} style={{ borderBottom: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.id}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.age}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};
 
export default AutoScrollTable;
