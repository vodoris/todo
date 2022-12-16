# Development Guide

## Run Locally

Note: The todo-server project is private due to Firebase account keys. Reach out to me for access.

1. Clone todo-server project to local.
2. Open prompt to saved `todo-server` project.
3. Perform `npm i`.
4. Run `node server` command and leave running.
5. Clone todo project to local.
6. Open prompt to saved `todo` project.
7. Perform `npm i`.
8. Run `npm start` command and leave running.

The server is running on port `3001` while the project runs on `3000`.

## Project Codebase

### Todo App

- `tailwind.config.js` and `postcss.config.js` are for styling configuration and params.
- `src/App.js` initializes the application and subsequent components and contains all operations for updating, adding, and deleting todos
- `src/components` contains all custom components for the project.
- `src/components/AddTodo.js` component used to create a new todo and add it to the list.
- `src/components/CompletedTodoList.js` component used to split completed todos from active todos.
- `src/components/Todo.js` component to display a single todo item.
- `src/components/TodoList.js` component used to display active todos.
- `src/services` contains service files for crud/api calls and organizes returned data.

### Server App

- `server.js` file which runs the nodejs server. initializes express and cors and houses the getTodos operation.
- Contains a file for the Google Firebase key. The repository is private because of this. For access to the codebase, please reach out to me.

# Tracked Time

### Tuesday, 12/13

```
3:16 PM - 3:42 PM
25 minutes, Creating the base react app, installing dependencies, and removing unneeded stuff.

10:20 PM - 11:18 PM
58 minutes, users can add a list item and mark an item as done.
```

### Thursday, 12/15

```
8:38 AM - 9:22 AM
44 minutes, added local crud operations for core features and started styling overhaul

12:18 PM - 1:11 PM
68 minutes, completed styling overhaul and began researching firebase.

7:06 PM - 7:39 PM
33 minutes, implemented google firebase "get" service. didn't have time for other crud operations.
```

Total Development Time: 3.8 hours.
