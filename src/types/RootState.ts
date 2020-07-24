// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { ProductFormState } from 'app/containers/List/Product/types';
/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  productForm?: ProductFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
