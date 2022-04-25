/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.title.trim()) {
      // eslint-disable-next-line react/prop-types
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Write Item Please');
    }
    // console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
