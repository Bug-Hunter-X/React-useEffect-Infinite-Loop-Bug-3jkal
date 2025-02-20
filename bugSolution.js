```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Only runs once on mount
    console.log('Mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```