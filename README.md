# Dev Stack

## Description

Dev Stack is a web app that helps developers choose technologies for their projects. They can browse, compare, and create their own technology stack.

## Technologies Used

- React.js
- Tailwind CSS, DaisyUI
- TypeScript 
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

## Features

1. **Browse Technologies** – View a categorized list of frontend, backend, database, and tooling options with short descriptions for each.
2. **Compare Side by Side** – Select multiple technologies and compare their details next to each other to decide what fits your project best.
3. **Build Your Own Stack** – Pick and save the technologies you want into a personal "stack," with a friendly empty state shown when nothing has been added yet.

---

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code directly inside our JavaScript files. It's used in React because it makes it much easier to describe what the UI should look like. Under the hood, JSX gets converted into regular JavaScript.

### 2. What is the difference between props and state?

Props are data passed into a component from its parent, and the component receiving them cannot change them  they're read-only. State is data that a component manages itself, and it can change over time which causes the component to re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a functional component hold and update its own state between renders. In this project, I used it to keep track of which technologies the user has selected for their stack, so the UI updates immediately when they add or remove one.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code in response to a component rendering or certain values changing  things like fetching data, subscribing to something, or setting up a timer. I used it to load the technologies data from a JSON file when the component first mounts, so the list is fetched once and then stored in state to be displayed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to tell items apart when the list changes (items added, removed, or reordered). Without a unique key, React can't efficiently figure out which items changed, which can lead to bugs or the wrong elements being updated/re-rendered.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition, like whether a piece of data exists or a state value is true/false. For example, I used it to show a message when the user's stack is empty:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty. Start adding technologies!</p>
) : (
  <StackList items={stack} />
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data down to a child through **props** — basically attributes on the child component in JSX, like `<Card title="React" />`. For a child to send data back up, the parent passes down a **function as a prop**, and the child calls that function (usually with some data as an argument) whenever something happens, like a button click. This way, the parent's state gets updated, and since state lives in the parent, it can flow back down to update other components too.