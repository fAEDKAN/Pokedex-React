import { useState, ChangeEvent } from "react";

interface FormState {
  [key: string]: any;
}

interface FormFunctions {
  valueSearch: string;
  formState: FormState;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

export const useForm = (initialForm: FormState = {}): FormFunctions => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const valueSearch = formState.valueSearch || "";

  return {
    valueSearch,
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
