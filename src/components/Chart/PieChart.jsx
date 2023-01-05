import { Box, Stack, Typography, styled, useTheme } from "@mui/material"
import users from "../../api/userApi"
import Echart from './Echart';

const Content = styled(Box,{
        shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
    })(({theme})=>({
    height: '300px',
    borderRadius:"50%",
    display:"table",
    position:"relative",
}))

const Container = styled('div')(({theme})=>({
    position:"relative",
}))

const PieChart = (props)=>{
    const theme = useTheme();
    const gaugeData = [
        {
          value: props.data.value,
        },
      ];
    let option = {
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
            },
            axisLine: {
              lineStyle: {
                width: 20,
                color:[[1, props.color.light]]
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            title: {
              show:false,
              fontSize: 14
            },
            splitLine:{
              show:false,
            },
            detail:{
              fontSize:36,
              fontWeight:"bold",
              offsetCenter:['0%','0%'],
              formatter: function (value) {
                  return value.toString() + "%"
                }    
              }
            }
        ],
        color:[
          props.color.main,
          props.color.light
        ],
    };
    

    return <Box sx={{width:'100%', minWidth:'200px',borderRadius:"10%",backgroundColor:theme.palette.white.main}}>
        <Typography align="center" sx={{pt:4}} variant="h2">{props.data.name}</Typography>
        <Echart sx={{width:'100%',minHeight:"15em"}} options = {option}></Echart>
    </Box>
}

export default PieChart;