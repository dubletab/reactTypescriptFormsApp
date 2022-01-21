import React, {useContext} from 'react';
import { FormsContext } from '../forms-context/forms-context';
import './form-list.css';

interface FormListProps{
    deleteForm: (id: number) => void
}

export const FormList: React.FC<FormListProps> = ({deleteForm}) => {
    const forms = useContext(FormsContext);
    const liForms = forms.map(item=>{
        let field;
        if(item.inputType === 'textarea'){
            field = (<textarea disabled></textarea>)
        }else{
            field = (<input type={item.inputType} disabled/>)
        }
        return (
        <li key={item.id} className='list-group-item text-left'>
            <div className='d-flex justify-content-between'>
                <p className=''>{item.inputType.toUpperCase()}</p>
                <i className="fas fa-times" onClick={()=> deleteForm(item.id)} title='Удалить форму'></i>
            </div>
            
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