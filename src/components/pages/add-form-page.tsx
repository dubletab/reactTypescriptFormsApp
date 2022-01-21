import React from 'react';
import { FormList } from '../form-list';
import { FormTypeList } from '../form-type-list';
// import { Form } from '../interfaces/interfaces';
import { Row } from '../row';

interface AddFormProps{
    addForm: (inputType: string) => void
    deleteForm: (id: number) => void
}

export const AddFormPage: React.FC<AddFormProps> = ({addForm, deleteForm}) => {
    return(
        <div className='px-4 py-5 my-5 text-center'>
            <h1>AddForm</h1>
            <Row left={<FormTypeList addForm={addForm}/>} right={<FormList deleteForm={deleteForm}/>}/>
        </div>
    )
}