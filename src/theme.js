import { createTheme } from "@mui/material";
import RobotoBoldTTF from "./font/Roboto-Bold.ttf";
import RobotoRegularTTF from "./font/Roboto-Regular.ttf";

// custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#4339F2",
            light:"#DAD7FE"
        },
        danger:{
            main:"#FF3A29",
            light:"#FFE5D3",
        },
        info:{
            main:"#02A0FC",
            light:"#CCF8FE",
        },
        success:{
            main:"#34B53A",
            light:"#E2FBD7",
        },
        warning:{
            main:"#FFB200",
            light:"#FFF5CC",
        },
        black:{
            main:"#000000",
        },
        white:{
            main:"#FFFFFF",
        },
        background: {
            default: "#F8F8F8",
            main: "#FFFFFF",
        },
        action: {
            primary: "#4339F2",
            Danger: "#FF3A29",
            Info: "#02A0FC",
            Success: "#34B53A",
            Warning: "#FFB200",
        },
        green: {
            main: "rgb(0, 82, 73)",
            light: "rgb(200, 250, 205)",
            lighter: "rgba(0, 171, 85, 0.08)",
            dark: "rgb(0, 123, 85)",
            darker: "rgb(0, 171, 85)",
        },
        blue: {
            main: "rgb(4, 41, 122)",
            dark: "rgb(12, 83, 183)",
            light: "rgb(208, 242, 255)",
        },
        yellow: {
            main: "rgb(122, 79, 1)",
            dark: "rgb(183, 129, 3)",
            light: "rgb(255, 247, 205)",
        },
        maroon: {
            main: "rgb(122, 12, 46)",
            dark: "rgb(183, 33, 54)",
            light: "rgb(255, 231, 217)",
        },
        gray: {
            main: "rgb(99, 115, 129)",
            light: "rgb(223, 223, 223)",
            lighter: "rgb(244, 246, 248)",
        },
        red: {
            main: "rgb(255, 72, 66)",
        },
        mixins: {
            toolbar: {
            minHeight: 64,
            },
        },
    },
    typography:{
        fontFamily: [
            'RobotoRegular',
            // 'RobotoBold',
        ].join(','),
        h1:{
            fontFamily: 'RobotoRegular',
            fontSize: '40px',
            fontWeight:'1000',
            lineHeight: '52px',
        },
        h2:{
          fontFamily: 'RobotoRegular',
          fontStyle: 'normal',
          fontWeight: '800',
          fontSize: '22px',
          lineHeight: '29px'
        },
        h3:{
          fontFamily: 'RobotoRegular',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '26px'
        },
        h4:{
          fontFamily: 'RobotoRegular',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '20px'
        },
    },
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                '@font-face':{
                    fontFamily:"RobotoBold",
                    src:`url(${RobotoBoldTTF}) format("truetype")`
                },
                '@font-face':{
                    fontFamily:"RobotoRegular",
                    src:`url(${RobotoRegularTTF}) format("truetype")`
                }
            }
        }
    }
});

export default theme;
