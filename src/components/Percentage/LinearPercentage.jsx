import { styled, useTheme, Box } from "@mui/material"

const Rect= styled('div')((theme,props)=>({
    ...props,
    height:"0.5em",
    // left:0,
    // bottom:0,
    borderRadius:'71px',
}))

const LinearPercentage = (props)=>{
    const theme = useTheme();
    return <Box sx={{...props.sx,position:"relative"}} >
        <Rect sx={{width:'100%',zIndex:0,backgroundColor:props.color.light}}></Rect>
        <Rect sx={{width:props.progress,position:"absolute",top:'0',zIndex:1,backgroundColor:props.color.main}}></Rect>
    </Box>
}

export default LinearPercentage;