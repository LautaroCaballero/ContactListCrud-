import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../models/contact.class';
import { STATUS } from '../models/status.enum';
import '../../styles/contact.css'

const ContactComponent = ({ contact, toggle, remove }) => {

    function contactStatusBudge() {
        switch(contact.status) {
            case STATUS.ONLINE:

            return(<h6 className='mb-0'><span className='badge bg-success contact-action'>{contact.status}</span></h6>)
            case STATUS.DND:

            return(<h6 className='mb-0'><span className='badge bg-danger contact-action'>{contact.status}</span></h6>)
            case STATUS.OFFLINE:

            return(<h6 className='mb-0'><span className='badge bg-light contact-action' style={{color:'black'}}>{contact.status}</span></h6>)
            default:
                break;
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.number}</span>
            </td>
            <td className='align-middle'>
                <span onClick={() => toggle(contact)}>{contactStatusBudge()}</span>
            </td>
            <td className='align-middle'>
                <i className='bi-trash task-action contact-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(contact).isRequired,
    toggle: PropTypes.func.isRequired
}

export default ContactComponent;
