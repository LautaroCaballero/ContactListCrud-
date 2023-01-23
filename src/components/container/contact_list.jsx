import React, { useState } from 'react';
import ContactForm from '../forms/contactForm';
import { contact } from '../models/contact.class';
import { STATUS } from '../models/status.enum';
import ContactComponent from '../pure/contact';

const ContactList = () => {
    const defaultContact = new contact('Lautaro', '3364585251', STATUS.ONLINE)
    const defaultContact1 = new contact('Jorge', '33645842452', STATUS.OFFLINE)
    const defaultContact2 = new contact('OMAR', '3364123212', STATUS.DND)

    const [contacts, setContacts] = useState([defaultContact,defaultContact1,defaultContact2])

    function toggleStatus(contact) {
        console.log('click', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        if (tempContact[index].status === STATUS.ONLINE){
            tempContact[index].status = STATUS.OFFLINE
        } else if (tempContact[index].status === STATUS.OFFLINE) {
            tempContact[index].status = STATUS.DND
        } else {
            tempContact[index].status = STATUS.ONLINE
        }
        setContacts(tempContact)
    }

    function removeContact(contact) {
        console.log('click thrash');
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts)
    } 

    function addContact(contact) {
        console.log('click add');
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts)
    } 

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your contacts: </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Pone number</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return(
                                        <ContactComponent
                                        key={index}
                                        contact={contact}
                                        toggle={toggleStatus}
                                        remove={removeContact}
                                        >

                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
