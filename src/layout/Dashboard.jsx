import { styled } from "@mui/system"
import { Box, Divider, List, Input, IconButton, useTheme } from "@mui/material"
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


const Menu = styled(List)(({theme})=>({
    minHeight:"100vh",
    width: '96px',
    display:"flex",
    flexDirection:'column',
    borderRadius:"0px 20px 20px 0px",
    backgroundColor: theme.palette.white.main,
}))

const MenuButton = (props)=>{
    let marginAttr = (props.isLastChild)?"auto auto 40px auto":"40px auto 40px auto";
    return  <IconButton sx={{margin:marginAttr}}>
                <img src={props.img}></img>
            </IconButton>
}

const Dashboard = function(prop){
    const theme = useTheme();
    return (<Box sx={{display:"flex",flexDirection:"row",minHeight:"100vh",minWidth:"100vw"}}>
        <Menu>
            <MenuButton img={logo}></MenuButton>
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
        <Box sx={{flexGrow:1, padding:2.5}}>
            <Box>
                <Box sx={{display:'flex'}}>
                    <img src={Search}></img>
                    <Input sx={{margin:theme.spacing(1)}} placeholder="search" ></Input>
                </Box>
                
            </Box>
            <p>Hello Content</p>
        </Box>
    </Box>)
}

export default Dashboard;