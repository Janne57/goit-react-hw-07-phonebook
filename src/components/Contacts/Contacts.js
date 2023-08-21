import React from 'react'; 
import { useSelector } from 'react-redux';
import css from '../Contacts/Contacts.module.css';
// import { deleteContact } from '../../redux/contactSlice.js';
import { getFilter } from '../../redux/selectors';
import {
  useGetContactsQuery,
  // useGetContactsByFilterQuery,
  useDeleteContactMutation,
} from 'redux/contactSlice';
import { ColorRing } from 'react-loader-spinner';
// import css from '..//components/Loader.module.css';

const Contacts = () => {
  // const [contactName, setContactName] = useState('');
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  console.log('filter', filter);
  const { data, error, isFetching } = useGetContactsQuery();
  // const contacts = data;
  // const { data, error, isFetching } = useGetContactsByFilterQuery(filter, 
  //   {skip: filter ==='',});
  // console.log('data contact', data);

  const [deleteContact, result] = useDeleteContactMutation();

  // const getVisibleContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   console.log('data contact', data);
  //   // return contacts.filter(contact =>
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContact = getVisibleContact();

  // const handleDelete = id => {
  //   dispatch(deleteContact(id));
  //   console.log('deleteContact', deleteContact(id));
  // };

  return (
    <div className={css.spiner}>
      {error && <p>UPS!!! Try again....</p>}
      {isFetching ? (
        <p>
          ...Loading
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </p>
      ) : (
        <ul className={css.contact__list}>
          {data.map(({ id, name, number }) => (
            <li key={id} className={css.contact__item}>
              <p className={css.contact__item__name}>{name}</p>
              <p className={css.contact__item__numb}>{number}</p>
              <button
                // onClick={() => { handleDelete(id); }}
                onClick={() => deleteContact(id)}
                disabled={result.isFetching}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contacts;



















// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import css from '../Contacts/Contacts.module.css';
// // import { deleteContact } from '../../redux/contactSlice.js';
// import { getFilter, getContact } from '../../redux/selectors';
// import { useGetContactsQuery } from 'redux/contactSlice';

// const Contacts = () => {
//   // const dispatch = useDispatch();
//   // const contacts = useSelector(getContact);
//   // const filter = useSelector(getFilter);

//   const {data, error, isLoading} = useGetContactsQuery();
//   // const getVisibleContact = () => {
//   //   const normalizedFilter = filter.toLowerCase();

//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalizedFilter)
//   //   );
//   // };

//   // const visibleContact = getVisibleContact();

//   // const handleDelete = id => {
//   //   dispatch(deleteContact(id));
//   //   console.log('deleteContact', deleteContact(id));
//   // };

//   // return (
//   //   <ul className={css.contact__list}>
//   //     {visibleContact.map(({ id, name, number }) => (
//   //       <li key={id} className={css.contact__item}>
//   //         <p className={css.contact__item__name}>{name}</p>
//   //         <p className={css.contact__item__numb}>{number}</p>
//   //         <button
//   //           // onClick={() => { handleDelete(id); }}
//   //           onClick={() => null}
//   //         >
//   //           Delete
//   //         </button>
//   //       </li>
//   //     ))}
//   //   </ul>
//   // );
// };

// export default Contacts;
