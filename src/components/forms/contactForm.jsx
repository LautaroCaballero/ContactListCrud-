import React, { useRef } from 'react';
import { contact } from '../models/contact.class';
import { STATUS } from '../models/status.enum';

const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const phoneRef = useRef('');
    const statuRef = useRef(STATUS.ONLINE);

    function addContact(e) {
        e.preventDefault();
        const newContact = new contact(
            nameRef.current.value,
            phoneRef.current.value,
            statuRef.current.value
        );
        add(newContact)
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name'></input>
                <input ref={phoneRef} id='inputPhone' type='text' className='form-control form-control-lg' required placeholder='Contact Description'></input>
                <label htmlFor='selectStatus' className='sr-only'></label>
                <select ref={statuRef} defaultValue={STATUS.ONLINE} id='selectStatus'>
                    <option value={STATUS.ONLINE}>OnLine</option>
                    <option value={STATUS.OFFLINE}>OffLine</option>
                    <option value={STATUS.DND}>Do Not Disturb</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add Contact</button>
        </form>
    );
}

export default ContactForm;

