import React from 'react';
import {EditFormList} from '../edit-form-list';

interface EditFormPageProps{
    editFormData :(value: string, id: number) => void
}

export const EditFormPage: React.FC<EditFormPageProps> = ({editFormData}) => {
    return(
    <div className='px-4 py-5 my-5 text-center'>
        <h1>EditForm</h1>
        <EditFormList editFormData={editFormData}/>
    </div>
    )
}