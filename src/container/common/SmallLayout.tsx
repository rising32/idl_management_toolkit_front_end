import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function SmallLayout({ className, children, onClick }: Props): JSX.Element {
  const wholeClassName = 'shadow-xl ' + className;

  return (
    <div className={wholeClassName} onClick={onClick}>
      {children}
    </div>
  );
}

export default SmallLayout;
