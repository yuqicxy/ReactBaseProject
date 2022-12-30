import { styled } from "@mui/system"
import { Box, Divider, List, Input, IconButton, useTheme, Badge, Avatar, Stack, SvgIcon } from "@mui/material"
import logo from '../images/logo.svg'
import Icon1 from "../images/Icon 1.svg"
import Icon2 from "../images/Icon 2.svg"
import Icon3 from "../images/Icon 3.svg"
import Icon4 from "../images/Icon 4.svg"
import Icon5 from "../images/Icon 5.svg"
import Icon6 from "../images/Icon 6.svg"
import Icon7 from "../images/Icon 7.svg"
import Icon8 from "../images/Icon 8.svg"
import Search from "../images/Search.svg"

import Plus from "../images/Plus.png"
import { users } from "../api/userApi"

const Menu = styled(List)(({theme})=>({
    minHeight:"100vh",
    width: '96px',
    display:"flex",
    flexDirection:'column',
    borderRadius:"0px 20px 20px 0px",
    backgroundColor: theme.palette.white.main,
}))

const TranformedLogo = styled(logo)(({theme})=>({
    '& path': {
        transform:'scale(0.6)',
    },
}))

const MenuButton = (props)=>{
    let marginAttr = (props.isLastChild)?"auto auto 40px auto":"40px auto 40px auto";
    return  <IconButton sx={{margin:marginAttr}}>
                <SvgIcon sx={{marginBottom:"0px"}} component={props.img}></SvgIcon>
            </IconButton>
}

const MenuBar = (props)=>{
    return  <Menu>
                <MenuButton img={TranformedLogo}></MenuButton>
                <Divider variant="middle"/>
                <MenuButton img={Icon1}></MenuButton>
                <MenuButton img={Icon2}></MenuButton>
                <MenuButton img={Icon3}></MenuButton>
                <MenuButton img={Icon4}></MenuButton>
                <MenuButton img={Icon5}></MenuButton>
                <MenuButton img={Icon6}></MenuButton>
                <MenuButton img={Icon7}></MenuButton>
                <MenuButton img={Icon8} isLastChild="true"></MenuButton>
            </Menu>
}

const SearchInput = (props)=>{
    const theme = useTheme();
    return <Box sx={{display:"flex",alignItems:"center"}}>
        <SvgIcon sx={{marginBottom:"0px"}} component={Search}></SvgIcon>
        <Input sx={{marginBottom:"0px", paddingLeft:theme.spacing(0.5),height: AvatarSize}} placeholder="search" disableUnderline={true} ></Input>
    </Box>
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const AddPeople = styled(Avatar)(({theme})=>({
    backgroundColor:theme.palette.action.primary,
    "& :hover":{
        backgroundColor:theme.palette.action.Success,   
    },
}))

const UserAvatar = (props)=>{
    return <Avatar sx={{width:AvatarSize,height:AvatarSize}} alt={props.user.name} src={props.user.portrait}/>
};


const Dashboard = function(prop){
    const theme = useTheme();
    return (<Box sx={{display:"flex",flexDirection:"row",minHeight:"100vh",minWidth:"100vw"}}>
        <MenuBar/>
        <Box sx={{flexGrow:1, padding:6}}>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignContent:"center"}}>
                <SearchInput></SearchInput>
                <Stack sx={{ml:"auto"}} spacing={.5} direction="row">
                    <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                        <UserAvatar user={users[0]} ></UserAvatar>
                        {/* <Avatar sx={{width:AvatarSize,height:AvatarSize}} alt="Remy Sharp" src={Person1}/> */}
                    </StyledBadge>
                    <UserAvatar user={users[0]} ></UserAvatar>
                    <UserAvatar user={users[0]} ></UserAvatar>
                    {/* <Avatar sx={{width:AvatarSize,height:AvatarSize}} alt="Remy Sharp" src={Person2}/>
                    <Avatar sx={{width:AvatarSize,height:AvatarSize}} alt="Remy Sharp" src={Person3}/> */}
                    <AddPeople sx={{width:AvatarSize,height:AvatarSize}} alt="Remy Sharp" src={Plus}/>
                </Stack>
            </Box>
            {prop.children}
        </Box>
    </Box>)
}

const AvatarSize = "2em";

export default Dashboard;