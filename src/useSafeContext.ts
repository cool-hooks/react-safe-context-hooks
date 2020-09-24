import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    throw new Error(`Missing context ${unsafeContext.displayName}`);
  }

  return context;
};
