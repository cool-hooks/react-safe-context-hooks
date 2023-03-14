import { useContext, Context } from 'react';

export const useSafeContext = <T>(unsafeContext: Context<T>, message?: string | (displayName: string) => string) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const displayName = unsafeContext.displayName;

    const errorMessage = typeof message === 'function' ? message(displayName) : typeof message === 'string' ? message : `Missing context${
      displayName ? `: ${displayName}` : ''
    }`;

    throw new Error(errorMessage);
  }

  return context as NonNullable<T>;
};
