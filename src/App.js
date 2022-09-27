import './App.css';
import Header from './components/Header';
import React, {useState} from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { List } from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const formSubmitHandler = (contact) => {
    const objContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      photo: contact.photo
    }
    console.log("contact baru dari child component " + objContact.name);

    const newContact = [...contacts, objContact];

    setContacts(newContact);
  }

  return (
    <div className="App">
      <header>
        <Header sx={{margin:'15em'}} />
      </header>
      <section>
        <table style={{width:'100%', margin:'2em'}}>
          <tbody>
            <tr>
              <td style={{width:'50%', verticalAlign:'top'}}>
                <ContactForm propsSubmitHandler={formSubmitHandler} />
              </td>
              <td style={{width:'50%', verticalAlign:'top'}}>
                <List sx={{ width: '100%', maxWidth: 400, backgroundColor:"palegreen" }}>
                  {
                    contacts.map(single_data => (
                        <Contact data={single_data} key={single_data.phone} />
                    ))
                  }
                </List>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer>Chandra Arifin &copy;</footer>
    </div>
  );
};

export default App;
