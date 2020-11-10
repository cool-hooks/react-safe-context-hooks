import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const errorMessage = `Missing context ${
      unsafeContext.displayName || JSON.stringify(unsafeContext)
    }`;

    throw new Error(errorMessage);
  }

  return context;
};
