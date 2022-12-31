import { Box, Stack, Typography, styled, useTheme } from "@mui/material"
import { width } from "@mui/system";
import { JSCanvas } from "./JSCanvas";

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

    const calcPoint = (theta, center,radius)=>{
        theta -= Math.PI/2;
        return {
            x: center.x + radius * Math.cos(-theta),
            y: center.y - radius * Math.sin(-theta)
        }
    }

    const draw = (ctx)=>{
        const canvas = ctx.canvas;
        const w = canvas.width;
        const h = canvas.height;
        const borderRadius = 10; //圆角半径
        const radius = w/2;
        const ratio = 0.5;
        const theta = ratio * Math.PI * 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        let startPnt = {
            x:w/2,
            y:0
        }; 
        ctx.moveTo(startPnt.x,startPnt.y)
        let center = {
            x:w/2,
            y:h/2
        }


        // startPnt.y += borderRadius;
        ctx.quadraticCurveTo(startPnt.x - borderRadius, startPnt.y + borderRadius, startPnt.x, startPnt.y + 2 * borderRadius)
        // ctx.bezierCurveTo(center.x, center.y, startPnt.x, startPnt.y + 2 * radius)
        startPnt = calcPoint(Math.PI/2,center,radius - borderRadius * 2);
        // ctx.quadraticCurveTo(startPnt.x, center.y - radius + 5 * borderRadius, startPnt.x, startPnt.y)
        ctx.bezierCurveTo(w/2, borderRadius * 2, startPnt.x, startPnt.y - radius + 3 * borderRadius, startPnt.x, startPnt.y)
        
        startPnt = calcPoint(Math.PI,center,radius - borderRadius * 2);
        
        ctx.bezierCurveTo(w/2, borderRadius * 2, startPnt.x, startPnt.y - radius + 3 * borderRadius, startPnt.x, startPnt.y)
   
        // ctx.arc(w/2, borderRadius, borderRadius, -Math.PI/2 , Math.PI/2, true)
        // ctx.arc(w/2, h/2, radius, -Math.PI/2 ,  -Math.PI/2  + theta, false)
        // ctx.arc(w/2, h/2, radius - 2 * borderRadius, -Math.PI/2 ,  -Math.PI/2  + theta, false)
        // startPnt = calcPoint(theta,center,radius - borderRadius);
        // ctx.arc(startPnt.x, startPnt.y, borderRadius,-Math.PI/2 , Math.PI/2,true)
        ctx.stroke();
    }

    return <Stack sx={{width:'300px'}}>
        <Typography align="center" variant="h2">{props.title}</Typography>
        <Content sx={{backgroundColor:theme.palette.success.main}}>
            <Typography sx={{display:"table-cell",verticalAlign:"middle",textAlign:"center"}} variant="h2" >{"18%"}</Typography>
            <Box sx={{position:"absolute",left:0,right:0}}>
                <JSCanvas width={300} height={300} draw={draw}></JSCanvas>
            </Box>
        </Content>
    </Stack>
}

export default PieChart;