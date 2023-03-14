import { useContext, Context } from 'react';

type Message = string | ((displayName?: string) => string);

export const useSafeContext = <T>(
  unsafeContext: Context<T>,
  message?: Message
) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const displayName = unsafeContext.displayName;

    let errorMessage: string;

    switch (typeof message) {
      case 'string':
        errorMessage = message;
        break;

      case 'function':
        errorMessage = message(displayName);
        break;

      default: {
        const contextName = displayName || 'a context';
        errorMessage = `You are trying to use ${contextName} outside of the provider`;
        break;
      }
    }

    throw new Error(errorMessage);
  }

  return context as NonNullable<T>;
};
