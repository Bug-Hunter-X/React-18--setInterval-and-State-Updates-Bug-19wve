```javascript
//App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This will cause error in React 18 and above versions
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
```