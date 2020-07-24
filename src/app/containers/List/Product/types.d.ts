export interface ProductFormState {
  initState: string;
  action: 'add' | 'edit';
  userData: any[];
}

export type ContainerState = ProductFormState;
