import { useEffect, useRef } from "react"
import * as echarts from 'echarts'

const PieEchart = (props)=>{
    const chartDom = useRef();

    useEffect(()=>{
        let mychart = echarts.init(chartDom.current,null,{
            width:props.width,
            height:props.height,
        });

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
              if (entry.contentBoxSize) {
                const contentBoxSize = entry.contentBoxSize[0];
                mychart.resize(contentBoxSize.width,contentBoxSize.height);
              } else {
                mychart.resize(entry.contentRect.width,entry.contentRect.height)
              }
            }
            console.log('Size changed');
          });
          resizeObserver.observe(chartDom.current);

          props.options&&mychart.setOption(props.options);

          return ()=>{
            resizeObserver.unobserve(chartDom.current);
          }
    },
    [])
    return <div ref={chartDom}></div>
}

export default PieEchart;