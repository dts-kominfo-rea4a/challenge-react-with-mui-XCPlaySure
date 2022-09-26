// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = (data) => {
    let key = 0;
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '100%', maxWidth: 400, backgroundColor:"palegreen" }}>
            {
                data.propsContacts.map((contact) => {
                    return (
                        <ListItem divider key={key++}>
                            <ListItemAvatar>
                                <Avatar alt={contact.name} src={contact.photo} />
                            </ListItemAvatar>
                            <ListItemText primary={contact.name} secondary={<>{contact.phone}<br/>{contact.email}</>} />
                        </ListItem>
                    )
                })
            }
        </List>
    );
};

export default Contact;
