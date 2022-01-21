import React, {useContext} from 'react';
import { FormsContext } from '../forms-context/forms-context';
import './view-form-list.css';

export const ViewFormList: React.FC = () => {
    const forms = useContext(FormsContext);
    const liForms = forms?.map(item=>{
        return (
        <li key={item.id} className='list-group-item text-left'>
            <p className=''>{item.inputType.toUpperCase()}: {item.inputData}</p>
        </li>
        )
    })
    return(
        <div className='view-form-list'>
            <h4> View data on forms: </h4>
            <ul className='list-group list-group-flush'>
            {liForms}
            </ul>
        </div>   
    )
}