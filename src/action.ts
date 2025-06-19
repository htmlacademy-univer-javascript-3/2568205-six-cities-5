import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('cities/changeCity');