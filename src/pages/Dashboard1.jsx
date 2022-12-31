import { Box, Stack, Typography, useTheme } from "@mui/material";
import PersonList from "../components/PersonCard/PersonList";
import Ads from "../components/Ads/Ads"
import PieChart from "../components/Percentage/PieChart";

const Dashboard1 = (props)=>{
    const theme = useTheme();
    const draw = (ctx)=>{
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 100, 50);
    }
    return <Box sx={{mt:3}}>
            <Typography sx={{mt:2,mb:2}} variant="h1">{"Be single minded"}</Typography>
            <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
                <PersonList/>
            </Stack>
            <Ads sx={{width:"65%",height:"169px", p:2,mt:4,borderRadius:'10px'}}></Ads>
            <PieChart title={"hello"}></PieChart>
        </Box>
}

export default Dashboard1