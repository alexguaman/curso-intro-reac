import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (evt) => {
    setNewTodoValue(evt.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm-container">
      <label className="TodoForm-label">Escribe tu nuevo TODO</label>
      <textarea
        className="TodoForm-ta"
        placeholder="Cortar la cebolla"
        onChange={onChange}
      />
      <div className="TodoForm-button-container">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
