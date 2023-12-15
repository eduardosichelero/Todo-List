import React, { useState } from 'react';

const TodoForm = (props) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        props.addTodo(value, category);

        setValue("");
        setCategory("");
    };

    return (
        <div className='todo-form'>
            <h2 className='mid-text'>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite o Título' value={value} onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma Categoria:</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button className='btn-ord' type="submit">Criar Tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm;
