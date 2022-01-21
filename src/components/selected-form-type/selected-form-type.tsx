import React, {useContext} from 'react';
import './selected-form-type.css';
import {FormsContext} from '../forms-context/forms-context';


export const SelectedFormType: React.FC = () => {

    const forms = useContext(FormsContext);
    const formFields: string[] = ['text', 'textarea', 'date', 'number', 'datetime-local', 'password'];
    const formTypeList:React.ReactNode[] = [];

    for(let field of formFields){
        const countForms = forms.filter(item=> item.inputType === field).length
        if(countForms === 0) continue;
        const fieldCount = (
            <div>
                <span className="badge badge-primary badge-pill" title='количество добавленных форм'>{countForms}</span>
            </div>);

        formTypeList.push(
            <li className='list-group-item d-flex gap-3 py-3 justify-content-between align-items-center' 
                key={field}>
                    {field}
                    {fieldCount}
            </li> 
        )
    }

    return(
        <div className='selected-form-type'>
            <h4>Selected input Forms:</h4>
            <ul className='list-group'>
                {formTypeList}
            </ul>
        </div>
    )
}