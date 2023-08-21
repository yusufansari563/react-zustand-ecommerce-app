import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
      <React.Fragment>
          {children}
      </React.Fragment>
  );
};

export default Container;
