import React from 'react';
import {IForm} from '../interfaces/interfaces';

type FormsContextInterface = IForm[];

export const FormsContext = React.createContext<FormsContextInterface | null>(null);

