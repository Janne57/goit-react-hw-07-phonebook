import Contacts from './/Contacts/Contacts.js';
// import ContactForm from './ContactForm/ContactForm.js';
// import Filter from './Filter/Filter.js';
import css from './/App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContact } from 'redux/selectors.js';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations.js';


const App = () => {
  // const dispatch = useDispatch();
  // const { items, isLoading, error} = useSelector(getContact);
  // console.log("items", items);

  // useEffect(() => {
  // dispatch(fetchContacts());
  //   }, [dispatch]);

  return (
   
    <div className={css.basic}>
       {/* {isLoading && <p>Loading...</p>}
       {error && <p> Error...{error}</p>}
       {/* <p>{items.length > 0  && JSON.stringify(items, null, 2) }</p> 
       <p>{JSON.stringify(items, null, 2) }</p> */}
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}

      {/* <h2>Contacts</h2>
      <Filter /> */}

      <Contacts />
    </div>
  );
};

export default App;





