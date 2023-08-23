import Contacts from './/Contacts/Contacts.js';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import css from './/App.module.css';


const App = () => {

  return (
   
    <div className={css.basic}>
      <h1 className={css.basic_text}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.basic_text}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};

export default App;





