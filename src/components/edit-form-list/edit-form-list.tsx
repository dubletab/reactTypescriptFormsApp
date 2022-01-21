import React, {useContext} from 'react';
import { FormsContext } from '../forms-context/forms-context';

interface EditFormListProps{
    editFormData: (value: string, id: number) => void
}

export const EditFormList: React.FC<EditFormListProps> = ({editFormData}) => {
    const forms = useContext(FormsContext);

    const liForms = forms?.map(item=>{
        let field;
        if(item.inputType === 'textarea'){
            field = (<textarea value={item.inputData} onChange={(event)=>{editFormData(event.target.value, item.id)}}></textarea>)
        }else{
            field = (<input type={item.inputType} value={item.inputData} onChange={(event)=>{editFormData(event.target.value, item.id)}}/>)
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
            <h4> List of Edit forms: </h4>
            <ul className='list-group list-group-flush'>
            {liForms}
            </ul>
        </div>   
    )
}