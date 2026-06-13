import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'white-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, to, className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 gap-2';

    const variants = {
      primary: 'bg-brand-primary text-white hover:bg-brand-primary-dark',
      outline: 'border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-white',
      white: 'bg-white text-text-primary hover:bg-white/90',
      'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-text-primary',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
