import { cx } from '@emotion/css';
import { ButtonProps, VariantEnum } from '../core/types/app';

function Button(props: ButtonProps) {
  const variant = props?.variant ?? VariantEnum.ACCENT;
  const buttonVariantMapping = {
    [VariantEnum.PRIMARY]:
      'bg-primary-500 hover:bg-primary-300 text-background',
    [VariantEnum.SECONDARY]: 'bg-secondary-500 hover:bg-secondary-600',
    [VariantEnum.ACCENT]: 'bg-accent-500 hover:bg-accent-600',
    [VariantEnum.LIGHT]: 'bg-light text-primary-950 hover:bg-primary-50',
  };

  return (
    <button
      {...props}
      type="button"
      className={cx(
        buttonVariantMapping[variant],
        'rounded-xl px-4 py-3 font-medium transition duration-200',
        props.className,
      )}
    />
  );
}

export default Button;
