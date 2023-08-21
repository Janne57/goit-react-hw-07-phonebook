import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContact } from '../../redux/selectors.js';
import { nanoid } from 'nanoid';
// import { addContact } from '../../redux/contactSlice.js';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactSlice';
// import { useGetContactsQuery, useGetContactsByFilterQuery, useAddContactMutation } from 'redux/contactSlice';
// import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

const ContactForm = () => {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const contacts = useSelector(getContact);

  const { data } = useGetContactsQuery();
  // const { data, error, isLoading } = useGetContactsByFilterQuery('qqq');;
// const { dataF, errorF, isLoadingF } = useGetContactsByFilterQuery('qqq');
// console.log('data', data);
// console.log('error', error);
// console.log('isLoading', isLoading);
// console.log('dataF', dataF);
// console.log('errorF', errorF);
// console.log('isLoadingF', isLoadingF);


const [ addContact, result] = useAddContactMutation();
// console.log('addContact', addContact);
console.log('result', result);
// const state = useSelector(state=>state)
// console.log('state', state);

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    // console.log('name', name);
    // console.log('value', value);

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = async (evt, values) => {
     evt.preventDefault();

    if (!name.trim()) {
      return;
    }

const contact = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    };

    // console.log('name', name);
    // console.log('number', number);
    if (
      data.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    } else {
      // dispatch(addContact(contact));
      try {
        await addContact(contact);
        Notiflix.Notify.success("The contact is added!")
      } catch (error) {
        Notiflix.Notify.error("Error...");
        console.log(error);
        
      }
    setName('');
    setNumber('');
    // evt.currentTarget.reset();
    // evt.currentTarget.elements.number.value.reset();
    }
  };

  return (
    <form className={css.form__basic} onSubmit={handleAddContact}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <p>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <button type="submit" className={css.form__button}>
        Add
      </button>
     </form>
  );
};

export default ContactForm;


























// {/* <div>
// {/* {isLoading ? (<p>...Loading</p>) : ()} */}
// </div> */}



// const ContactForm = () => {
//   // const dispatch = useDispatch();
//   // const [name, setName] = useState('');
//   // const [number, setNumber] = useState('');
//   // const contacts = useSelector(getContact);

// const { data, error, isLoading } = useGetContactsQuery();
// console.log('data', data);
// console.log('error', error);
// console.log('isLoading', isLoading);


// const [ addContact, result] = useAddContactMutation();
// console.log('addContact', addContact);
// console.log('result', result);
// // const state = useSelector(state=>state)
// // console.log('state', state);

//   // const handleChange = evt => {
//   //   const { name, value } = evt.currentTarget;

//   //   switch (name) {
//   //     case 'name':
//   //       setName(value);
//   //       break;

//   //     case 'number':
//   //       setNumber(value);
//   //       break;

//   //     default:
//   //       return;
//   //   }
//   // };

//   // const handleSubmit = evt => {
//   //   evt.preventDefault();

//   //   if (!name.trim()) {
//   //     return;
//   //   }

//   //   const contact = {
//   //     id: nanoid(),
//   //     name: evt.currentTarget.elements.name.value,
//   //     number: evt.currentTarget.elements.number.value,
//   //   };

//   //   if (
//   //     contacts.find(
//   //       contact => contact.name.toLowerCase() === name.toLowerCase()
//   //     )
//   //   ) {
//   //     return alert(`${name} is already in contacts.`);
//   //   } else {
//   //     // dispatch(addContact(contact));
//   //   }

//   //   setName('');
//   //   setNumber('');
//   //   // evt.currentTarget.reset();
//   //   // evt.currentTarget.elements.number.value.reset();
//   // };

//   return (
//     <form className={css.form__basic} onSubmit={handleSubmit}>
//       <p>Name</p>
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={handleChange}
//       />
//       <p>Number</p>
//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         value={number}
//         onChange={handleChange}
//       />

//       <button type="submit" className={css.form__button}>
//         Add
//       </button>
//      </form>
//   );
// };

// export default ContactForm;


