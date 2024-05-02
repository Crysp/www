import { MDComponent } from '../../kernel';

export const Code: MDComponent<'code'> = ({
  children,
  className,
  ...other
}) => (
  <code
    className={[`bg-stone-50 px-2 py-1 rounded`, className]
      .filter(Boolean)
      .join(' ')}
    {...other}
  >
    {children}
  </code>
);
