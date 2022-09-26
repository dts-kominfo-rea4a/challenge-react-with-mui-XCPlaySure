import React, {useState} from "react";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
    Box,
    TextField,
    Card,
    CardContent,
    CardActions,
    Button
} from '@mui/material';

const ContactForm = (props) => {
    //buat state untuk masing2 field
    const [contactName, setContactName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhoto, setContactPhoto] = useState('');

    //karena pakai state jadi perlu function untuk render setiap textfield
    const inputNameOnChange = (event) => {
        setContactName(event.target.value);
    };
    const inputPhoneOnChange = (event) => {
        setContactPhone(event.target.value);
    };
    const inputEmailOnChange = (event) => {
        setContactEmail(event.target.value);
    };
    const inputPhotoOnChange = (event) => {
        setContactPhoto(event.target.value);
    };

    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const formOnSubmitHandler = (event) => {
        event.preventDefault();

        //buat object contact baru
        const objNewContact = {
            name: contactName,
            phone: contactPhone,
            email: contactEmail,
            photo: contactPhoto
        }

        props.propsSubmitHandler(objNewContact);

        //clear inputan lama
        setContactName('');
        setContactPhone('');
        setContactEmail('');
        setContactPhoto('');
    }

    return (
        <Box component='form' onSubmit={formOnSubmitHandler} sx={{display:'flex', margin:'0.5em 0em'}} noValidate>
            <Card sx={{ maxWidth: 450, backgroundColor:'cornsilk' }}>
                <CardContent>
                    <TextField id="name" label="Name*" variant="filled" sx={{width:'100%', marginBottom:'0.5em'}} value={contactName} onChange={inputNameOnChange} />
                    <TextField id="name" label="phone*" variant="filled" sx={{width:'100%', marginBottom:'0.5em'}} value={contactPhone} onChange={inputPhoneOnChange} />
                    <TextField id="name" label="email*" variant="filled" sx={{width:'100%', marginBottom:'0.5em'}} value={contactEmail} onChange={inputEmailOnChange} />
                    <TextField id="name" label="photo url*" variant="filled" sx={{width:'100%'}} value={contactPhoto} onChange={inputPhotoOnChange} />
                </CardContent>
                <CardActions>
                    <Button type="submit" size="small" sx={{marginLeft:'0.5em'}}>Add Contact</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default ContactForm;