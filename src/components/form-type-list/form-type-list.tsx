import React from 'react';
import './form-type-list.css';

interface FormTypeListProps{
    addForm: (inputType: string) => void
}

export const FormTypeList: React.FC<FormTypeListProps> = ({addForm}) => {
    return(
        <div className='form-type-list'>
            <h4>Select input Forms:</h4>
            <ul className='list-group'>
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('text')}>Text</li> 
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('textarea')}>TextArea</li> 
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('date')}>Date</li> 
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('number')}>Number</li> 
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('datetime')}>Datetime</li> 
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('password')}>Password</li> 
                <li className='list-group-item list-group-item-action d-flex gap-3 py-3' onClick={()=>addForm('tel')}>Tel</li>
            </ul>
        </div>
    )
}