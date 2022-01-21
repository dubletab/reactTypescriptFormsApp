import React from 'react';
import { FormList } from '../form-list';
import { SelectFormTypeList } from '../select-form-type';
import { Row } from '../row';

interface AddFormProps{
    addForm: (inputType: string) => void
    deleteForm: (id: number) => void
}

export const AddFormPage: React.FC<AddFormProps> = ({addForm, deleteForm}) => {
    return(
        <div className='px-4 py-5 my-3 text-center'>
            <h1 className='mb-5'>AddForm</h1>
            <Row left={<SelectFormTypeList addForm={addForm}/>} right={<FormList deleteForm={deleteForm}/>}/>
        </div>
    )
}