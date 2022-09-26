// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider
} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '100%', maxWidth: 400, backgroundColor:"palegreen" }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={data.name} src={data.photo} />
                </ListItemAvatar>
                <ListItemText primary={data.name} secondary={<>{data.phone}<br/>{data.email}</>} />
            </ListItem>
            <Divider />
        </List>
    );
};

export default Contact;
