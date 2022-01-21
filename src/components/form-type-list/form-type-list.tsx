import React from 'react';
import './form-type-list.css';

interface FormTypeListProps{
    addForm: (inputType: string) => void
}

export const FormTypeList: React.FC<FormTypeListProps> = ({addForm}) => {
    const liClass = 'list-group-item list-group-item-action d-flex gap-3 py-3';
    return(
        <div className='form-type-list'>
            <h4>Select input Forms:</h4>
            <ul className='list-group'>
                <li className={liClass} onClick={()=>addForm('text')}>Text</li> 
                <li className={liClass} onClick={()=>addForm('textarea')}>TextArea</li> 
                <li className={liClass} onClick={()=>addForm('date')}>Date</li> 
                <li className={liClass} onClick={()=>addForm('number')}>Number</li> 
                <li className={liClass} onClick={()=>addForm('datetime-local')}>Datetime</li> 
                <li className={liClass} onClick={()=>addForm('password')}>Password</li> 
            </ul>
        </div>
    )
}