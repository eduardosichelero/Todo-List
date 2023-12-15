import React from 'react'

function Filter() {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select >
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Inconpletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button>Asc</button>
                <button>Des</button>
            </div>
        </div>
    </div>
  )
}

export default Filter