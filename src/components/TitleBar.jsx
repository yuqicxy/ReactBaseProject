import { useTheme } from '@mui/material/styles';

// import styled from "@emotion/styled";

// styled('div')(`

// `);

function TitleComponent(props){
    theme = useTheme();

    return <div>    
        {props.children}
    </div>
}