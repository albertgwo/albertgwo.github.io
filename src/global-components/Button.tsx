import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'text';
  color?: 'cream' | 'gray';
  loading?: boolean;
  icon?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'text',
  color = 'green',
  icon = false,
  loading,
  children,
  className,
  ...props
}) => (
  <button
    type='button'
    className={twMerge(
      classnames(
        'inline-flex items-center justify-center relative font-semibold text-center !outline-none box-border disabled:opacity-50 transition-all cursor-pointer',
        {
          'rounded-sm': !icon,
          'rounded-full': icon,

          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',

          'text-gray-200': color === 'gray',
          'text-[#F0E7DF]': color === 'cream',
        }
      ),
      className
    )}
    {...props}
  >
    <span className={'inline-flex items-center justify-center'}>{children}</span>
  </button>
);
