export interface FormInput {
  id: string;
  number: string;
  name: string;
  expiration: string;
  cvv: string;
  type?: string;
}

interface InputError {
  number: boolean;
  name: boolean;
  expiration: boolean;
  cvv: boolean;
}

export const validateFormData = (
  formInput: FormInput,
  setInputError: React.Dispatch<React.SetStateAction<InputError>>,
) => {
  const errors = {
    number: false,
    name: false,
    expiration: false,
    cvv: false,
  };

  if (!formInput.name.trim()) {
    errors.name = true;
  }

  const numberRegex = /^(\d{4} \d{4} \d{4} \d{4})$/;
  if (!formInput.number.trim() || !numberRegex.test(formInput.number)) {
    errors.number = true;
  }

  const expirationRegex = /^(\d{2}\/\d{2})$/;
  if (
    !formInput.expiration.trim() ||
    !expirationRegex.test(formInput.expiration)
  ) {
    errors.expiration = true;
  }

  const cvvRegex = /^\d{3}$/;
  if (!formInput.cvv.trim() || !cvvRegex.test(formInput.cvv)) {
    errors.cvv = true;
  }

  setInputError(errors);

  const hasErrors = Object.values(errors).some(error => error === true);

  return !hasErrors;
};
