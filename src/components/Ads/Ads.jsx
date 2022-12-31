import { Box, Button, Stack, Typography, styled, useTheme } from "@mui/material"
import WriteImg from "../../images/2.png"
import ads from "../../api/adsApi"

const ColorButton = styled(Button)(({theme})=>({
    width:"140px",
    height:"50px", 
    marginTop:"auto",
    marginBottom:theme.spacing(2) , 
    backgroundColor:theme.palette.white.main,
    color:theme.palette.primary.main,

    "&:hover":{
        color:theme.palette.white.main,
        backgroundColor: theme.palette.primary.main,
    }
}))

const Image = styled('img')(({theme})=>({
    margin:theme.spacing(1),
}))

const Ads = (props)=>{
    const theme = useTheme();
    return <Stack sx={{...props.sx,backgroundColor:'primary.main',color:"white.main"}} direction={'row'}>
        <Image src={WriteImg}></Image>
        <Stack >
            <Typography variant="h2">
                {ads.title}
            </Typography>
            <Typography variant="h4">
                {ads.content}
            </Typography>
        </Stack>
        <ColorButton variant="contained">see more</ColorButton>
    </Stack>
}

export default Ads;