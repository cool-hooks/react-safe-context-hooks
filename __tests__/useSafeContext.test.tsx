import React, { createContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useSafeContext } from '../src';

type TestContextParams = {
  name: string;
  age: number;
} | null;

let TestContext: React.Context<TestContextParams>;

describe('useSafeContext', () => {
  beforeEach(() => {
    TestContext = createContext<TestContextParams>(null);
  });

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

  it('should throw an error with a default message without displayName', () => {
    const { result } = renderHook(() => useSafeContext(TestContext));

    expect(result.error?.message).toBe(
      'You are trying to use a context outside of the provider'
    );
  });

  it('should throw an error with a default message with displayName', () => {
    TestContext.displayName = 'TestContext';

    const { result } = renderHook(() => useSafeContext(TestContext));

    expect(result.error?.message).toBe(
      'You are trying to use TestContext outside of the provider'
    );
  });

  it('should throw an error with a custom message', () => {
    const { result } = renderHook(() =>
      useSafeContext(TestContext, 'Missing Context')
    );

    expect(result.error?.message).toBe('Missing Context');
  });

  it('should throw an error with a custom message with displayName', () => {
    TestContext.displayName = 'TestContext';

    const { result } = renderHook(() =>
      useSafeContext(
        TestContext,
        (displayName) => `Missing Context: ${displayName}`
      )
    );

    expect(result.error?.message).toBe('Missing Context: TestContext');
  });

  it('should throw an error with a custom message with undefined displayName', () => {
    const { result } = renderHook(() =>
      useSafeContext(
        TestContext,
        (displayName) => `Missing Context: ${displayName}`
      )
    );

    expect(result.error?.message).toBe('Missing Context: undefined');
  });

  it('should throw an error with a default message when an unsupported message value type is provided', () => {
    const { result } = renderHook(() => useSafeContext(TestContext, 12 as any));

    expect(result.error?.message).toBe(
      'You are trying to use a context outside of the provider'
    );
  });
});
