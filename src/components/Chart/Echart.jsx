import { useEffect, useRef } from "react"
// import * as echarts from 'echarts'
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { BarChart,GaugeChart } from 'echarts/charts';

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import { Box } from "@mui/material";

// Register the required components
echarts.use([
  BarChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const Echart = (props)=>{
    const chartDom = useRef();

    useEffect(()=>{
        let mychart = null;

        if(props.width&&props.height){
            mychart = echarts.init(chartDom.current,null,{
                width:props.width,
                height:props.height,
            });
        }
        else{
            mychart = echarts.init(chartDom.current)
        }
        
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
    return <Box {...props} ref={chartDom}></Box>
}

export default Echart;