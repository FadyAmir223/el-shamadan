// npm i react-hook-form
// npm i -D @hookform/devtools

import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

type FormValues = {
  email: string;
};

const Form = () => {
  const form = useForm<FormValues>({
    defaultValues:
      // or callback fn from api -> return { }
      { email: 'o@o.com' },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="text"
          {...register('email', {
            // validation
            required: { value: true, message: 'username is required' },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'invalid email format',
            },
            validate: {
              // custom validation
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== 'admin@example.com' ||
                  'enter a different email address'
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith('bad_domain.com') ||
                  'this domain is not supported'
                );
              },
            },
          })}
        />
        <p>{errors.email?.message}</p>
      </form>

      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Form;
