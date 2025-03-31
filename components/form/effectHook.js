// 封装窗口尺寸变化的逻辑
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// 组件中使用自定义 Hook
function LayoutComponent() {
  const { width, height } = useWindowSize();
  return <div>Window size: {width} x {height}</div>;
}
