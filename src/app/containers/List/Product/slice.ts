import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { searchData } from 'app/containers/DashBoardLayout/assets/mock/chart';

// The initial state of the ProductFormState container
export const initialState: ContainerState = {
  initState: '',
  action: 'add',
  userData: searchData,
};

const ProductFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<string>) {
      state.initState = action.payload;
    },
    actionProduct(state, action: PayloadAction<'add' | 'edit'>) {
      state.action = action.payload;
    },
    createNewProduct(state, action: PayloadAction<any>) {
      console.log(action.payload);
    },
  },
});

export const { name: sliceKey, actions, reducer } = ProductFormSlice;
