import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const displayName = unsafeContext.displayName;

    const contextName = displayName || 'the context';
    const errorMessage = `You are trying to use ${contextName} outside of the provider`;

    throw new Error(errorMessage);
  }

  return context as NonNullable<T>;
};
