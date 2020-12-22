import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const displayName = unsafeContext.displayName;

    const errorMessage = `Missing context${
      displayName ? `: ${displayName}` : ''
    }`;

    throw new Error(errorMessage);
  }

  return context;
};
