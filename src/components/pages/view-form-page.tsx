import React from 'react';
import { ViewFormList } from '../view-form-list';

export const ViewFormPage: React.FC = () => {
    return(
    <div className='px-4 py-5 my-5 text-center'>
        <h1>ViewFormData</h1>
        <ViewFormList/>
    </div>
    )
}