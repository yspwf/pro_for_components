import React, { useRef, useState, useEffect } from 'react';
 
const LazyImage = ({ src, alt, placeholder, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect(); // 图片加载后停止观察
        }
      },
      { threshold: 0.1 } // 10% 进入视口时触发
    );
 
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
 
    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
 
  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : placeholder}
      alt={alt}
      className={className}
    />
  );
};
 
export default LazyImage;