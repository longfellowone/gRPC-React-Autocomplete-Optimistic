import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FindProductRequest } from './proto/todo_pb';

export const TodoForm = ({ addTask, taskRef, client, setError }) => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');
  const [highlightedIndex, sethighlightedIndex] = useState(0);

  const handleSumbit = () => {
    if (!value) return;
    addTask(uuid(), results[highlightedIndex].label);
    setResults([]);
    setValue('');
  };

  const handleChange = e => {
    const currentSearch = taskRef.current.value;
    const newSearch = currentSearch.replace(/[\u201C\u201D]/g, '"');
    setValue(currentSearch);
    findProduct(newSearch);
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
          indexes: product.getIndexsList().map(index => index.getIndex()),
        };
      });
      return setResults(response);
    });
  };

  const onKeyPressed = e => {
    if (results !== undefined && results.length !== 0) {
      if (e.key === 'Escape') {
        setResults([]);
        sethighlightedIndex(0);
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        handleSumbit();
        sethighlightedIndex(0);
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSumbit();
        sethighlightedIndex(0);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (highlightedIndex !== results.length - 1) {
          setValue(results[highlightedIndex + 1].label);
          sethighlightedIndex(highlightedIndex => highlightedIndex + 1);
        }
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (highlightedIndex !== 0) {
          setValue(results[highlightedIndex - 1].label);
          sethighlightedIndex(highlightedIndex => highlightedIndex - 1);
        }
      }
    }
  };

  const handleSelect = index => {
    if (highlightedIndex === index) {
      return 'bg-grey-dark p-2';
    } else {
      return 'bg-grey-light p-2';
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        className="w-full bg-grey-light rounded-t p-2"
        placeholder="Add new task..."
        onChange={handleChange}
        value={value}
        ref={taskRef}
        onKeyDown={onKeyPressed}
        tabIndex="0"
      />
      <ul className="list-reset">
        {results.map((result, index) => {
          return (
            <li
              onKeyDown={onKeyPressed}
              key={result.value}
              className={handleSelect(index)}
            >
              {replaceAt(result.label, result.indexes)}
            </li>
          );
        })}
      </ul>
    </form>
  );

  function replaceAt(string, indexes) {
    let obj;
    let s = [...string];
    for (let i = 0; i < indexes.length; i++) {
      obj = Object.assign(s, {
        [indexes[i]]: (
          <span style={{ fontWeight: 'bold' }} key={i}>
            {string[indexes[i]]}
          </span>
        ),
      });
    }
    return obj;
  }
};

// let i;
// let s = [...result.label];

// for (i = 0; i < result.indexes.length; i++) {
//   Object.assign(s, {
//     [result.indexes[i]]:
//       '<b>' + result.label[result.indexes[i]] + '</b>',
//   });
// }

// let i;
// let s = [...result.label];

// for (i = 0; i < result.indexes.length; i++) {

// }

// console.log(s.join(''));

// function replaceAt(string, index) {
//   return (
//     string.substring(0, index) +
//     +'<div style={{fontWeight: "bold"}}>' +
//     string.substring(index, index + 1).bold() +
//     '</div>' +
//     string.substring(index + 1)
//   );
//}
