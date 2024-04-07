import React from 'react';
import './input.scss';

export interface IInput {
   placeholder: string;
   type: React.HTMLInputTypeAttribute;
}

const Input: React.FC<IInput> = ({ placeholder, type }) => {
   return <input className='customInput' type={type} placeholder={placeholder} />;
};

export default Input;
