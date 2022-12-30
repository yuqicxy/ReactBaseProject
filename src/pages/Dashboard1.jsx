import { Box, Stack, Typography, useTheme } from "@mui/material";
import PersonList from "../components/PersonCard/PersonList";

const Dashboard1 = (props)=>{
    const theme = useTheme();
    return <Box sx={{mt:3}}>
            <Typography sx={{mt:2,mb:2}} variant="h1">{"Be single minded"}</Typography>
            <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
                <PersonList/>
            </Stack>
        </Box>
}

export default Dashboard1