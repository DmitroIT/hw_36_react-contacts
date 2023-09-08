import React, { useState } from 'react';

const ContactForm = ({ onAddContact, onCancel }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const getName = (e) => {
        setName(e.target.value);
    }

    const getUsername = (e) => {
        setUsername(e.target.value);
    }

    const getPhone = (e) => {
        setPhone(e.target.value);
    }

    const resetContactForm = () => {
        setName('');
        setUsername('');
        setPhone('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() !== "" && username.trim() !== "" && phone.trim() !== "") {

            onAddContact({
                name,
                username,
                phone
            });

            resetContactForm();
        }
    }

    return (
        <div>
            <h2>Додати новий контакт</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ім'я:</label>
                    <input type="text" value={name} placeholder="Введіть ім'я" required onChange={getName} />
                </div>
                <div>
                    <label>Прізвище:</label>
                    <input type="text" value={username} placeholder="Введіть прізвище" required onChange={getUsername} />
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="text" value={phone} placeholder="Введіть телефон" required onChange={getPhone} />
                </div>
                <div>
                    <button type="submit">Зберегти</button>
                    <button type="button" onClick={onCancel}>Скасувати</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
/////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
