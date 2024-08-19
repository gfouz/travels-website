import { Input as NextUIInput } from '@nextui-org/input';
import { InputProps } from '../../schemas/post.schema.ts';

const Input = (props: InputProps) => {
  const {
    errors,
    type = 'text',
    color,
    label,
    register,
    placeholder,
    defaultValue,
  } = props;

  return (
    <NextUIInput
      type={type}
      label={label}
      color={color}
      variant='underlined'
      labelPlacement='outside'
      placeholder={placeholder}
      {...register(label)}
      defaultValue={defaultValue}
      classNames={{
        label: '!text-vioñet-100 text-md capitalize font-black',
        input: 'text-violet-100 text-md',
      }}
      isInvalid={errors[label]?.message ? true : false}
      errorMessage={`${errors[label]?.message}`}
    />
  );
};
export default Input;
