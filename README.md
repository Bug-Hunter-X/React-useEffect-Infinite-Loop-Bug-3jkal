# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook.  The issue arises from attempting to update state within the `useEffect`'s callback function without proper dependency management.

## Bug Description
The `bug.js` file contains a React component that uses `useState` and `useEffect`. The useEffect attempts to increment the count in every render, creating an infinite loop.  This is because the state update triggers a re-render, which in turn triggers the useEffect again, creating a continuous cycle.

## Solution
The `bugSolution.js` demonstrates the corrected code, using the dependency array to correctly manage updates and preventing the infinite loop.  The solution involves ensuring that dependencies on the state variable are correctly handled.