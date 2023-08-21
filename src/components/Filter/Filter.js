import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice.js';
import { getFilter } from '../../redux/selectors';
// import { useGetContactsQuery,
// useGetContactsByFilterQuery } from '../../redux/contactSlice';
// import { ColorRing } from 'react-loader-spinner';
// import css from '../Filter/Filter.module.css';

const Filter = () => {
  const [contactName, setContactName] = useState('');
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  // const value = 'www';
  // const {data,  error, isLoading } = useGetContactsByFilterQuery();
  // const { data, error, isFetching } = useGetContactsByFilterQuery(contactName);
  // console.log('useGetContactsByFilterQuery filterContact', filterContact);
  // console.log('data filter', data);
 

  const onChange = evt => {

    dispatch(filterContact(evt.currentTarget.value));
    console.log("evt.currentTarget.value", evt.currentTarget.value)
    setContactName(evt.currentTarget.value);
    // useGetContactsByFilterQuery(contactName);
    
    };

  return (
    <div> 
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
        <h1>{contactName}</h1>
        {/* <button onClick={()=>getContactsByFilter(contactName)}></button> */}
      </label>

     
    </div>
  );
};


export default Filter;









// <div className={css.spiner}>


// const Filter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(getFilter);
//   const {data,  error, isLoading } = useGetContactsQuery();

//   const onChange = evt => {
//     dispatch(filterContact(evt.currentTarget.value));
//     };

//   return (
//     <label>
//       Find contacts by name
//       <input type="text" value={value} onChange={onChange} />
//     </label>
//   );
// };

// export default Filter;


// <div >
// {error && <p>UPS!!! Try again....</p>}
// {isLoading ? (
//   <p>
//     ...Loading
//     <ColorRing
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="blocks-loading"
//       wrapperStyle={{}}
//       wrapperClass="blocks-wrapper"
//       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//     />
//   </p>
// ) : (
//   <ul className={css.filter__list}>
//     {data.map(({ id, name, number }) => (
//       <li key={id} className={css.filter__item}>
//         <p className={css.filter__item__name}>{name}</p>
//         <p className={css.filter__item__numb}>{number}</p>
//         <button
//           // onClick={() => { handleDelete(id); }}
//           // onClick={() => deleteContact(id)}
//           // disabled={result.isLoading}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// )}
// </div>