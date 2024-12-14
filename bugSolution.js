```javascript
// bugSolution.js
import React, { useState, useEffect, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(incrementCount, 1000);
    return () => clearInterval(interval);
  }, [incrementCount]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
```