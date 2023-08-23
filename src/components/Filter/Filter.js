import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice.js';
import { getFilter } from '../../redux/selectors';


const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = evt => {
    dispatch(filterContact(evt.currentTarget.value));
    // console.log("evt.currentTarget.value filter", evt.currentTarget.value)
    };

  return (
    <div> 
      <label>
        Find contacts by name
        <input 
        type="text" 
        name='filter'
        value={value} 
        onChange={onChange} />
      </label>
    </div>
  );
};


export default Filter;

