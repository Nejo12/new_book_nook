## MY NEW BOOK NOOK

---

## Stack used includes and not limited to:

- [ExpressJS](http://expressjs.com/) \* Fast, unopinionated, minimalist web framework for Node.js.
- [NodeJS](https://nodejs.org/en/) \* A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- [MongoDB](https://www.mongodb.com/) for database (hosted on [mLab](https://mlab.com/)) & [Mongoose](https://mongoosejs.com/)
- [React.js](https://reactjs.org) for client, [React Router dom](https://www.npmjs.com/package/react-router-dom/) for routing & [Redux](https://redux.js.org/basics/usagewithreact) for state management
- [Create React App](https://github.com/facebook/create-react-app) A declarative component-based JavaScript library for building user interfaces
- [Styled-Components](https://styled-components.com/) as CSS preprocessor (no CSS frameworks)

### Progress

#### General

- [x] Given that there are no books in the library, users sees an empty list.
- [x] Given that there are books in the library, all users can view the list of books and chose which book to borrow.
- [x] Given that there are books in the library, users can choose a book to see the full details before deciding to add to his/her borrowed list.
- [x] Given that user decides to borrow a book, user is directed to the login page. Since only the signed-in user can borrow books.
- [x] On successful authentication, logged in user can add the preferred book to the borrowed list. Note: Borrowed list is only avalaible to authenticated users.
- [x] Given​ that there are more than one copy of a book in the library, one copy of the borrowed book is deducted from the library list.
- [x] When a user selects an already borrowed book, returning this book is the optional button displayed to the user.
- [x] When a user returns a book, the book is removed from his/her borrowed list, and the library reflects the updated stock of the book.
- [x] Given that a user decides to return all borrowed books to the library, the user's borrowed list displays empty. With a clarifying message.
- [x] Optional "add book button" is displayed for admin to create new book.

**NOTE:**

- [-] Authentication is via [**JSON Web Tokens**](https://jwt.io/)
- [-] Each authenticated user has a borrowing limit of 2 books at any point of time.
- [-] Only 1 copy of a book can be borrowed by a user at any point of time
- [-] Only the signed in user can Add book

#### Future features

- Track your borrowing history.
- Restrict admin access to add new book and modify existing book details.

## Quick Start

Get up and running with a development server using the following commands

```javascript

// Clone the repo in your terminal by clicking the green clone or download button at the top right and copy the url
// In your terminal run the code below (replace "URL" with the url you copied)
git clone URL

// Install all dependencies for client & backend, cd into individual directories. (e.g. cd /backend && npm install).
npm install

// From base folder, run client & development server with concurrently
npm run dev

// Assumes Node and npm are installed on machine
// Server runs on http://localhost:5001 (set in server.js) and client on http://localhost:3000 (default for Create React App)

// Run test individual from either the backend or client's folder
npm test
```

If you would like to contribute, follow the instructions below.

- Fork this project.
- Checkout a new branch
- Make your changes and commit.
- Keep commit messages atomic.
- Raise a pull request against development.

**NB:** All Pull requests must be made against development branch. Pull Requests against master would be rejected.

See project wiki for coding style guide, commit message, pull request and branch naming conventions.

#### License

This project is published under the MIT License. Visit the License.md for details.
