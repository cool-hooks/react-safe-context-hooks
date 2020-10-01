import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    // TODO: fix context name
    throw new Error(`Missing context ${unsafeContext.displayName}`);
  }

  return context;
};
