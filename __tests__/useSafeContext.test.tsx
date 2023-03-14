import React, { createContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useSafeContext } from '../src';

const TestContext = createContext<{
  name: string;
  age: number;
} | null>(null);

describe('useSafeContext', () => {
  it('should get context values', () => {
    const contextValue = { name: 'Tom', age: 22 };

    const wrapper: React.FC = ({ children }) => (
      <TestContext.Provider value={contextValue}>
        {children}
      </TestContext.Provider>
    );

    const { result } = renderHook(() => useSafeContext(TestContext), {
      wrapper,
    });

    expect(result.current.name).toBe(contextValue.name);
    expect(result.current.age).toBe(contextValue.age);
  });

  it('should throw an error when the context provider is not set and the context has not displayName', () => {
    const { result } = renderHook(() => useSafeContext(TestContext));

    expect(result.error?.message).toBe(
      'You are trying to use the context outside of the provider'
    );
  });

  it('should throw an error when the context provider is not set and the context has displayName', () => {
    TestContext.displayName = 'TestContext';

    const { result } = renderHook(() => useSafeContext(TestContext));

    expect(result.error?.message).toBe(
      'You are trying to use TestContext outside of the provider'
    );
  });
});
