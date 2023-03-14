import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const displayName = unsafeContext.displayName;

    const errorMessage = `You're trying to use ${
      displayName || 'the'
    } context outside of the provider`;

    throw new Error(errorMessage);
  }

  return context as NonNullable<T>;
};
