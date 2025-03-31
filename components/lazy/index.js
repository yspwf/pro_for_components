import { useRef } from 'react';
import ballBg from '@/assets/ballNav/ballBg.png'
import centerNg from '@/assets/ballNav/centerNg.png'
import title from '@/assets/ballNav/title.png'
import pu from '@/assets/common/pu.png'
const boxStyle = {
    height: '400px',
    border: '1px solid pink',
    overflowY: 'scroll',
}
const imageBoxStyle = {
    width: '500px',
    height: '500px',
    margin: '20px auto',
}

const index = () =>
{
    const images = []
    const refs = []
    const threshold = [0.01] // 这是触发时机 0.01代表出现 1%的面积出现在可视区触发一次回掉函数 threshold = [0, 0.25, 0.5, 0.75]  表示分别在0% 25% 50% 75% 时触发回掉函数
    let data = [ballBg, centerNg, title, pu]

    for (let i = 0; i < data.length; i++)
    { // 添加4张待加载的图片
        const ref = useRef() // 新建空 ref
        refs.push(ref) // 放入 ref 数组
        images.push( // 新建 img jsx 放入 images （图片地址不放入 src 而是放入 自定义属性 data-src）
            <div style={imageBoxStyle} key={i}>
                <img width={'100%'} ref={ref} data-src={data[i]} />
            </div>
        )
    }
    // 利用 IntersectionObserver 监听元素是否出现在视口
    const io = new IntersectionObserver((entries) =>
    { // 观察者
        entries.forEach((item) =>
        { // entries 是被监听的元素集合它是一个数组
            if (item.intersectionRatio <= 0) return // intersectionRatio 是可见度 如果当前元素不可见就结束该函数。
            const { target } = item
            target.src = target.dataset.src // 将 h5 自定义属性赋值给 src (进入可见区则加载图片)
        })
    }, {
        threshold, // 添加触发时机数组
    });

    const onload = () =>
    {
        refs.forEach((item) =>
        {
            console.log({ item });
            io.observe(item.current) // 添加需要被观察的元素。
        })
    }
    return (
        <div style={boxStyle}>
            {images}
            <img onError={onload} src="" />
        </div>
    );
};
export default index
