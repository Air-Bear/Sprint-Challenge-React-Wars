# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
	React is a front-end library that aims to streamline the process of making modular components to render information to the DOM dynamically. It does this by abstracting away alot of the clutter of interacting with the DOM and maintains little performance impact by only rendering and re-rendering certain aspects when there's an active change.

1. Describe component state.
	state obfuscates our data and centralizes how we change out information in order to make trouble shooting easier and streamlined. For example, the only way to change state data is with the declared setter function. So if our data isn't rendering appropriately, we can quickly find every instance of our data being transformed.

1. Describe props.
	props are read-only variables that hold our data. We pass props from parent to child in order to create an intuitive top down flow of information.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
	Side effects are any action that we take outside of the scope of our component. For example, and API call is a side effect since it sends a request to outside of our function. We can sync effects using the useEffect hook provided to us by react. With it we can declare a query or conditional bit of information to check for changes.
