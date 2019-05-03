import React from 'react'

const NewToDoForm = ({onChange, onSubmit, draft}) => (
        <div className='addForm'>
            <input type='text' onChange={onChange} value={draft} />
            <button onClick={onSubmit}>Add task</button>
        </div>
)

export default NewToDoForm