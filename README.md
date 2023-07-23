# React Table App

This is a simple React application that fetches data from an API and displays it in a table. The table has sorting and filtering capabilities, and the user can select how many items to display per page. The application is built using TypeScript for type safety.

## Features

- Fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) to get a list of users.
- The table displays user data with columns: "ID", "Username", "Email" and "Phone".
- Users can sort the table by clicking on the column headers. Clicking on the same column header twice toggles between ascending and descending order.
- The table can be filtered by typing into an input field. It searches for substrings in the "Username" and "Email" columns.
- Users can select how many items to display per page using a dropdown select. Default items per page is 5, with options of 5, 10, and 15.
- Pagination buttons are provided at the bottom of the table to navigate between pages.
- The table data is paginated on the client-side based on the user's pagination selection.
- A loading spinner is displayed while data is being fetched from the API.
- An error message is shown instead of the table in case the API request fails, and the "Add new user" button is disabled in this case.
- Users can delete individual items from the table.
- An "Add new user" button is provided to add a new user to the table. The new user's ID, Username, Email, and Phone are generated automatically.
- "@material-ui" has been used as a fast and handful tool to build MVP apps.

## Folder Structure

- `src`: Contains the main source code files.
  - `App.tsx`: The main component that renders the table and handles data fetching and pagination logic.
  - `components`: Contains the reusable React components.
    - `TableHeader.tsx`: Component for rendering the table header with sorting functionality.
    - `TableBody.tsx`: Component for rendering the table body with user rows.
    - `TableRow.tsx`: Component for rendering individual user rows.
    - `TablePagination.tsx`: Component for rendering pagination buttons and handling page changes.
    - `Table.module.css`: Contains CSS styles to customize the appearance of the table.
    - `helpers.ts`: Contains some utility functions to modulize app.
  

## How to Run

1. Clone the repository and navigate to the project directory.
2. Install the dependencies using `npm install`.
3. Start the development server with `npm start`.
4. The application will open in your default web browser.

## Conclusion

This React application demonstrates how to build a table with pagination, sorting, filtering, and other functionalities using TypeScript and React components. It provides a clean and organized user interface for displaying and managing a list of users fetched from an external API. The app's modular structure makes it easy to maintain and extend in the future.
