import React, { useState, useEffect, useCallback } from 'react';
import ContactForm from './components/ContactForm/ContactForm';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const fetchData = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(fetchData)
            .then((response) => response.json())
            .then((data) => {
                setContacts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
    
        setShowForm(false);
    };
    
    const handleCancel = () => {
        setShowForm(false);
    };
    
    const handleDelete = useCallback((index) => {
        setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index))
    }, []);

    return (
        <div>
            <h1>Список контактів</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Телефон</th>
                        <th>Дії</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Видалити</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setShowForm(true)}>Додати контакт</button>
            {showForm && <ContactForm onAddContact={(newContact) => handleAddContact(newContact)} onCancel={handleCancel} />}

        </div>
    );
};

export default Contacts;
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


