# React-My-App

## Hooks

### `useStatus`
  
Import...

```javascript
import { useState } from 'react'
```

Init...

```javascript
const [count, setCount] = useState(0)
```

Set...

```javascript
<button onClick={() => setCount((count) => count + 1)}>
    count is {count}
</button>
```

### `useEffect`

Example see branch [01.use-effect](https://github.com/sosercodes/react-my-app/blob/01.use-effect/src/App.jsx)
 

```javascript
// runs after each render..
useEffect(() => {
    console.log('Hello from useEffect');
    // cleanup runs before 
    return () => {
        console.log('Clean up function');
    };
    // ..of count, an empty array means it will run only after first render
}, [count]);
```
