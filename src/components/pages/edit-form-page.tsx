import React from 'react';
import {EditFormList} from '../edit-form-list';
import { Row } from '../row';
import { SelectedFormType } from '../selected-form-type';


interface EditFormPageProps{
    editFormData :(value: string, id: number) => void
}

export const EditFormPage: React.FC<EditFormPageProps> = ({editFormData}) => {
    return(
    <div className='px-4 py-5 my-3 text-center'>
        <h1 className='mb-5'>EditForm</h1>
        <Row left={<SelectedFormType/>} right={<EditFormList editFormData={editFormData}/>}/>
    </div>
    )
}