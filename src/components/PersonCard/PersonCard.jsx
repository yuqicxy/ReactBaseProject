import { Avatar, Box, Stack, Icon, Typography, useTheme, SvgIcon } from "@mui/material";
import Color from "../../images/Color.svg"

const Person = (props)=>{
    const theme = useTheme();
    return <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <Avatar sx={{width:"70px",height:"70px"}} src={props.portrait}></Avatar>
        <Stack direction={'column'}>
            <Typography variant="h2">{props.name}</Typography>
            <Typography variant="h4" sx={{opacity:"0.4",mixBlendMode:"normal"}}>{props.place}</Typography>
        </Stack>
    </Stack>
}

const PersonCard = (props)=>{
    const theme = useTheme();

    return <Box sx={{...props.sx,backgroundColor:theme.palette.background.main, width:"30%", minWidth:"448px"}}>
        <Stack sx={{padding:theme.spacing(2)}} direction={'row'} justifyContent={'space-between'}>
            <Person portrait={props.person.portrait} name={props.person.name} place={props.person.place}></Person>
            <SvgIcon color='gray' component={Color} inheritViewBox></SvgIcon>
        </Stack>
        {props.children}
    </Box>
};

export default PersonCard;