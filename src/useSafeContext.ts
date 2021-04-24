import { useContext, Context } from 'react';

interface Callbacks {
  onSafe?: () => void;
  onNotSafe?: (errorMessage: string) => void;
}

export const useSafeContext = <T>(
  unsafeContext: Context<T>,
  { onSafe, onNotSafe } = {} as Callbacks
) => {
  const context = useContext<T>(unsafeContext);

  if (!context) {
    const displayName = unsafeContext.displayName;

    const errorMessage = `Missing context${
      displayName ? `: ${displayName}` : ''
    }`;

    onNotSafe?.(errorMessage);

    throw new Error(errorMessage);
  }

  onSafe?.();

  return context as NonNullable<T>;
};
