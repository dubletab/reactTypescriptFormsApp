import React, {useState} from 'react';
import { Header } from '../header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddFormPage, EditFormPage, ViewFormPage, NotFoundPage } from '../pages';
import { IForm } from '../interfaces/interfaces';
import { FormsContext } from '../forms-context/forms-context';

export const App: React.FC = () => {
  const [forms, setForms] = useState<IForm[]>([]);  

  const addForm = (inputType: string) => {
    const newForm: IForm = {
      inputType: inputType,
      inputData: '',
      id: new Date().getTime()
    }
    setForms(prev => {
      return [...prev, newForm];
    })
  }

  const deleteForm = (id: number) => {
      setForms(prev => {
          return prev.filter(item => {
              return item.id !== id
          })
      })
  }

  const editFormData = (value: string, id: number) => {
    setForms(prev => {
        return prev.map(item => {
            if(item.id === id) item.inputData = value;
            return item;
        })
    })
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Router>
        <Header/>
        <FormsContext.Provider value={forms}>
          <Routes>
              <Route path='/reactTypescriptFormsApp/' element={<AddFormPage addForm={addForm} deleteForm={deleteForm}/>}/>
              <Route path='/reactTypescriptFormsApp/edit' element={<EditFormPage editFormData={editFormData}/>}/>
              <Route path='/reactTypescriptFormsApp/view' element={<ViewFormPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </FormsContext.Provider>
      </Router>
    </div>
  );
}
