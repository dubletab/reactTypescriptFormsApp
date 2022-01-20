import React, {useContext} from 'react';
import { FormsContext } from '../forms-context/forms-context';
import './form-list.css';

export const FormList: React.FC = () => {
    const forms = useContext(FormsContext);
    const liForms = forms?.map(item=>{
        let field;
        if(item.inputType === 'textarea'){
            field = (<textarea disabled></textarea>)
        }else{
            field = (<input type={item.inputType} disabled/>)
        }
        return (
        <li key={item.id} className='list-group-item text-left'>
            <p className=''>{item.inputType.toUpperCase()}</p>
            {field}
        </li>
        )
    })
    return(
        <div className='form-list'>
            <h4> List of added forms: </h4>
            <ul className='list-group list-group-flush'>
            {liForms}
            </ul>
        </div>   
    )
}