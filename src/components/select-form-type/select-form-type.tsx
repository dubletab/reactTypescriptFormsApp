import React, {useContext} from 'react';
import './select-form-type.css';
import {FormsContext} from '../forms-context/forms-context';

interface SelectFormTypeListProps{
    addForm: (inputType: string) => void
}

export const SelectFormTypeList: React.FC<SelectFormTypeListProps> = ({addForm}) => {

    const forms = useContext(FormsContext);
    const formFields: string[] = ['text', 'textarea', 'date', 'number', 'datetime-local', 'password'];
    const formTypeList:React.ReactNode[] = [];

    for(let field of formFields){
        const countForms = forms.filter(item=> item.inputType === field).length
        const fieldCount = countForms > 0 ? (
            <div>
                <span className="badge" title='количество добавленных форм'>{countForms}</span>
            </div>) : null;

        formTypeList.push(
            <li className='list-group-item list-group-item-action d-flex gap-3 py-3 justify-content-between align-items-center' 
                onClick={()=>addForm(field)} 
                key={field}>
                    {field}
                    {fieldCount}
            </li> 
        )
    }

    return(
        <div className='select-form-type'>
            <h4>Select input Forms:</h4>
            <ul className='list-group'>
                {formTypeList}
            </ul>
        </div>
    )
}