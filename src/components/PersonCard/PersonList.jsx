import { Fragment } from "react";
import { useTheme } from "@mui/material";
import { users } from "../../api/userApi";
import PersonCard from "./PersonCard.jsx";
import MediaInfo from "./MediaInfo.jsx";

const PersonList = (props)=>{
    const theme = useTheme();
    const colors=[
        theme.palette.success,
        theme.palette.danger,
        theme.palette.primary,
    ];
    const persons = users.map((user,index)=>{
        let mediaTypes = []
        for(let mediaType in user.media){
            if(user.media.hasOwnProperty(mediaType) && typeof user.media[mediaType] !== 'function') {
                mediaTypes.push(mediaType);
            }
        }
        const ItemList = mediaTypes.map((mediaType,k)=>{
            return <MediaInfo key={k} color={colors[index%3]} title={mediaType.toString()} info={user.media[mediaType]}/>
        })

        return <PersonCard sx={{borderRadius:'10px'}} key={index} person={user}>
            {ItemList}
        </PersonCard>
    });

    return <Fragment>
        {persons}
    </Fragment>
}

export default PersonList;