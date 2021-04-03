import React, { createContext } from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useSafeContext } from '../src';

const TestContext = createContext<{
  name: string;
  age: number;
} | null>(null);

const Component = () => {
  const context = useSafeContext(TestContext);

  return (
    <p>
      {context.name}, {context.age}
    </p>
  );
};

describe('useSafeContext', () => {
  it('should get context values', () => {
    const wrapper: React.FC = ({ children }) => (
      <TestContext.Provider value={{ name: 'Tom', age: 22 }}>
        {children}
      </TestContext.Provider>
    );

    const { getByText } = render(<Component />, { wrapper });

    expect(getByText('Tom, 22')).toBeDefined();
  });

  it('should throw an error when context provider is not set', () => {
    const { result } = renderHook(() => useSafeContext(TestContext));

    expect(result.error.message).toBe('Missing context');
  });

  it('should throw an error when context provider is not set', () => {
    TestContext.displayName = 'TestContext';

    const { result } = renderHook(() => useSafeContext(TestContext));

    expect(result.error.message).toBe('Missing context: TestContext');
  });
});
