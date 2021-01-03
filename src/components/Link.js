import { memo } from 'react';

export default memo(function Link({ children, ...props }) {
  return (
    <a
      className="inline-flex items-center justify-center flex-wrap hover:underline focus:underline font-medium"
      {...props}
    >
      {children}
    </a>
  );
});
