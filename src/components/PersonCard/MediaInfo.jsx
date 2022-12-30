import { Box, Stack, Typography, useTheme } from "@mui/material";
import LinearPercentage from "../Percentage/LinearPercentage";

function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}

const MediaInfo = (props)=>{
    const theme = useTheme();
    return  <Box sx={{ml:2, mr:2,mb:2}}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="h4" color={props.color.main}>{props.info.number.toLocaleString()}</Typography>
                </Stack>
                <LinearPercentage sx={{mt:'0.5em'}} progress={toPercent(props.info.percentage)} color={props.color}></LinearPercentage>
            </Box>
};

export default MediaInfo;