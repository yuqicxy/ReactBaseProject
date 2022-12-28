import { useTheme } from '@mui/material/styles';
import { AppBar, Box, styled } from '@mui/material';
// import styled from "@emotion/styled";

// styled('div')(`

// `);

const AppBarStyle = styled(AppBar)(({theme})=>({
    boxShadow:'none',
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    color: "#333333",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      flexShrink: 0,
    },
}));

function TitleComponent(props){
    theme = useTheme();

    return <div>    
        {props.children}
    </div>
}