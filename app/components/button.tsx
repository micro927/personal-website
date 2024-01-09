import { cx } from '@emotion/css';
import { ButtonProps, VariantEnum } from '../core/types/app';

function Button(props: ButtonProps) {
  const variant = props?.variant ?? VariantEnum.PRIMARY;
  const buttonVariantMapping = {
    [VariantEnum.PRIMARY]: 'bg-primary text-white',
    [VariantEnum.SECONDARY]: 'bg-secondary text-dark',
    [VariantEnum.ACCENT]: 'bg-accent text-dark',
    [VariantEnum.DARK]: 'bg-dark text-white',
  };

  return (
    <button
      {...props}
      type="button"
      className={cx(
        buttonVariantMapping[variant],
        'rounded-xl px-4 py-3 transition duration-200',
        props.className,
      )}
    />
  );
}

export default Button;
