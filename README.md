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

Executes after rendering. Example see branch [01.use-effect](https://github.com/sosercodes/react-my-app/blob/01.use-effect/src/App.jsx)
 

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

### `useRef`

The `useRef` hook will return a mutable `ref` object which you can use to access DOM nodes.

Exsample see branch [02.use-ref](https://github.com/sosercodes/react-my-app/blob/02.use-ref/src/App.jsx).


## Handling Lists

Handling lists in React is quite easy, we can use a JavaScript array and use the `map()` function to transform it into List Elements.

Exsample see branch [03.handling-lists](https://github.com/sosercodes/react-my-app/blob/03.handling-lists/src/App.jsx).

