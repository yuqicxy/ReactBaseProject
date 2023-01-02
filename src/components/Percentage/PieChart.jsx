import { Box, Stack, Typography, styled, useTheme } from "@mui/material"
import users from "../../api/userApi"
import PieEchart from './PieEchart';

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
          value: 50,
          name: 'Perfect',   
          // detail: {
          //   valueAnimation: true,
          //   offsetCenter: ['0%', '0%']
          // }
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
              itemStyle: {
                borderWidth: 0,
                borderColor: '#E2FBD7'
              }
            },
            axisLine: {
              lineStyle: {
                width: 20,
                color:[[1, '#E2FBD7']]
              }
            },
            // splitNumber:100,
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
          "#34B53A",
          "#E2FBD7"
        ],
    };
    

    return <Stack sx={{width:'300px',borderRadius:"10%",backgroundColor:theme.palette.white.main}}>
        <Typography align="center" sx={{pt:4}} variant="h2">{props.title}</Typography>
        {/* <Content sx={{backgroundColor:theme.palette.success.main}}> */}
            {/* <Typography sx={{display:"table-cell",verticalAlign:"middle",textAlign:"center"}} variant="h2" >{"18%"}</Typography> */}
            {/* <Box sx={{position:"absolute",left:0,right:0}}> */}
            {/* </Box> */}
            <PieEchart width={300} height={300} options = {option}></PieEchart>
        {/* </Content> */}
    </Stack>
}

export default PieChart;