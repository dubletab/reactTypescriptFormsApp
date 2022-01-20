import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    return(
        <div className="px-4 py-5 my-5 text-center">
            <h1>Данной страницы не существует</h1>
            <p className="lead mb-4">Выберите пункт меню или вернитесь назад:</p>
            <button className="btn btn-primary btn-lg px-4 gap-3" onClick={()=>{navigate(-1)}}>GO BACK</button>
        </div>
        
    )
}