import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectProductForm = (state: RootState) =>
  state.productForm || initialState;

export const selectInitState = createSelector(
  [selectProductForm],
  ({ ...productFormState }) => ({ ...productFormState }),
);

export const selectUserData = createSelector(
  [selectProductForm],
  ({ userData }) => userData,
);
