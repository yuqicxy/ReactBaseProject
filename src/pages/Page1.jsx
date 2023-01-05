import { Box, Grid, Grow, Stack, Typography, useTheme } from "@mui/material";
import PersonList from "../components/PersonCard/PersonList";
import Ads from "../components/Ads/Ads"
import PieChart from "../components/Chart/PieChart";
import BarChart from "../components/Chart/BarChart";
import { socialMedia } from "../api/socialMediaApi";

const Page1 = (props)=>{
    const theme = useTheme();
    const colorSet = [
        theme.palette.success,
        theme.palette.warning,
        theme.palette.danger,
        theme.palette.info
    ];
    let charts = socialMedia.map((media,index)=>{
        return <PieChart key={index} sx={{flexGrow:1}} color={colorSet[index]} mainColor={colorSet[index].main} data={{"name":media.name,'value':media.value}}></PieChart>
    })
    return <Grid sx={{mt:2,mb:2}} container spacing={2}>
        <Grid item xl={12}>
            <Typography sx={{mt:2,mb:2}} variant="h1">{"Be single minded"}</Typography>
        </Grid>
        <Grid item xl={12}>
            <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
                <PersonList/>
            </Stack>
        </Grid>
        <Grid item sx={{flexGrow:2}} xs={8} xl={8}>
            <Ads sx={{ p:2,borderRadius:'10px'}}></Ads>
            <Stack direction={'row'} spacing={2} sx={{minHeight:"20em",mt:4,mb:1}}>
                {charts}
            </Stack>
        </Grid>
        <Grid item xs={4} sx={{flexGrow:2}}>
            <BarChart  sx={{p:1,minWidth:'400px',minHeight:"400px",borderRadius:'10px',backgroundColor:"white.main"}}></BarChart>
        </Grid>
    </Grid>
}

export default Page1