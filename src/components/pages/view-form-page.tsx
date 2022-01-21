import React from 'react';
import { ViewFormList } from '../view-form-list';
import { Row } from '../row';
import { SelectedFormType } from '../selected-form-type';

export const ViewFormPage: React.FC = () => {
    return(
    <div className='px-4 py-5 my-3 text-center'>
        <h1 className='mb-5'>ViewFormData</h1>
        <Row left={<SelectedFormType/>} right={<ViewFormList/>}/>
    </div>
    )
}