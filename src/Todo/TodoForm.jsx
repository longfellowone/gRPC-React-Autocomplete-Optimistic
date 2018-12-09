import React, { useState } from 'react';
//import { v4 as uuid } from 'uuid';
import { FindProductRequest } from './proto/todo_pb';

export const TodoForm = ({ addTask, taskRef, client, setError }) => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  const handleSumbit = e => {
    e.preventDefault();
    // const message = taskRef.current.value;
    // if (!message) return;
    // addTask(uuid(), message);
    // taskRef.current.value = null;
  };

  const handleChange = e => {
    setValue(e.target.value);
    //const searchValue = value.replace(/[\u201C\u201D]/g, '"');
    console.log(value);
    //setInput(newValue);
    findProduct(value);
    //return newValue;
  };

  const findProduct = name => {
    const request = new FindProductRequest();
    request.setName(name);

    client.findProduct(request, {}, (err, response) => {
      if (err) {
        setError(true);
        console.log(err);
        return;
      }

      response = response.getProductsList().map(product => {
        return {
          value: product.getUuid(),
          label: product.getName(),
        };
      });

      console.log(response);
      return setResults(response);
    });
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        className="w-full bg-grey-light rounded p-2"
        placeholder="Add new task..."
        value={value}
        onChange={handleChange}
        ref={taskRef}
      />
      {results}
    </form>
  );
};

// const handleChange = name => {
//   addTask(uuid(), name.label);
//   setInput('');
// };

// const loadOptions = (input, callback) => {
//   setTimeout(() => {
//     callback(options);
//   }, 0);
//   return;
// };
