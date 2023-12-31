import React from 'react';

function Filter({ filter, setFilter, setSort }) {
    return (
        <div className='filter'>
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p className='text'>Status</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p className='text'>Ordem alfabética</p>
                    <button className='btn-ord' onClick={() => setSort("Asc")}>Crescente</button>
                    <button className='btn-ord' onClick={() => setSort("Desc")}>Decrescente</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
