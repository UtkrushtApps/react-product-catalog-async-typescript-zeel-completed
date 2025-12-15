# Product Catalog

## Task Overview
Utkrusht is expanding its internal marketplace for assessment materials. As an engineer on the development team, you are responsible for creating a simple product catalog page that asynchronously loads a list of products for assessors. The page must efficiently render the fetched data, handle errors (such as network failures), and provide responsive feedback to users while loading. This task is important to ensure assessors can reliably discover and review available test products with a fast, user-friendly experience.

## Objectives
- Retrieve product information from a mock API endpoint using asynchronous logic executed when the component first mounts.
- Show an appropriate loading indicator during the fetch process and display a clear message if the request fails.
- Present the list of products in a responsive grid layout, including each product’s name, price, and description.
- Ensure the grid renders efficiently and avoids unnecessary re-renders when handling larger product lists.
- Use React hooks for state and effect management, with all relevant data and component structures properly typed using TypeScript interfaces.

## How to Verify
- Load the product catalog page and confirm that it enters a loading state before displaying any products.
- Simulate a failed network request to verify that the user sees an informative error message.
- When data loads successfully, ensure that products are displayed in a clean, responsive grid with accurate details.
- Observe that updates to component state do not trigger excessive re-rendering of individual grid items, especially where memoization or similar patterns are applied.
- Confirm that the project compiles without TypeScript errors and that all product-related data structures are correctly typed.
- During testing, ensure no warnings appear about state updates on unmounted components, confirming proper handling of asynchronous operations.

## Helpful Tips
- Use functional React components written in TypeScript to maintain clarity and strong typing throughout the project.
- Structure your code so that data-fetching responsibilities are kept logically separate from UI rendering for better readability and maintainability.
- Rely on React hooks to manage component state and trigger side effects in a predictable manner.
- Handle asynchronous API calls carefully so that requests do not continue updating state after a component has unmounted.
- Provide users with clear indicators during loading and error situations to make the interface informative and user-friendly.
- Consider lightweight performance improvements that help the product grid render smoothly, especially when dealing with larger sets of items.
- Keep the interface accessible and responsive to support a range of typical user interactions.
