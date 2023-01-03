import { Box, Stack, Typography, useTheme } from "@mui/material";
import PersonList from "../components/PersonCard/PersonList";
import Ads from "../components/Ads/Ads"
import PieChart from "../components/Chart/PieChart";
import BarChart from "../components/Chart/BarChart";
import { socialMedia } from "../api/socialMediaApi";

const Dashboard1 = (props)=>{
    const theme = useTheme();
    const colorSet = [
        theme.palette.success,
        theme.palette.warning,
        theme.palette.danger,
        theme.palette.info
    ];
    let charts = socialMedia.map((media,index)=>{
        return <PieChart key={index} color={colorSet[index]} mainColor={colorSet[index].main} data={{"name":media.name,'value':media.value}}></PieChart>
    })
    return  <Box sx={{mt:3}}>
                <Typography sx={{mt:2,mb:2}} variant="h1">{"Be single minded"}</Typography>
                <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
                    <PersonList/>
                </Stack>
                <Stack direction={"row"}>
                    <Stack >
                        <Ads sx={{width:"100%", p:2,mt:4,borderRadius:'10px'}}></Ads>
                        <Stack  direction={'row'}   justifyContent="space-between" spacing={2} sx={{mt:4,mb:1}}>
                            {charts}
                        </Stack>
                    </Stack>
                    <Box sx={{p:2,mt:4,ml:4,minWidth:'400px',borderRadius:'10px',backgroundColor:"white.main"}}>
                        <BarChart></BarChart>
                    </Box>
                </Stack>
            </Box>
}

export default Dashboard1