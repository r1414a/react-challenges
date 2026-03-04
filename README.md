Here are practical React coding challenges commonly asked in interviews:

---

**Beginner**

1. **Counter App** — Build a counter with increment, decrement, and reset. Add a min/max limit.
2. **Toggle Show/Hide** — Show/hide a paragraph on button click with a smooth transition.
3. **Controlled Form** — Build a form with name, email, password fields with basic validation and error messages shown on submit.
4. **Star Rating Component** — Build a clickable 5-star rating component with hover effects.
5. **Accordion** — Build a FAQ accordion where only one panel can be open at a time.

---

**Intermediate**

6. **Search & Filter List** — Given an array of users, filter them in real-time as the user types. Add debouncing to the search input.
7. **Todo App** — Full CRUD: add, edit, delete, mark complete, filter by status (all/active/completed).
8. **Fetch & Display Data** — Fetch from a public API (e.g. JSONPlaceholder), show a loading spinner, handle errors, and display the data in a list or table.
9. **Pagination** — Implement pagination from scratch on a list of fetched items (no library).
10. **Infinite Scroll** — Load more items as the user scrolls to the bottom using `IntersectionObserver`.
11. **Multi-step Form** — A 3-step form wizard with Next/Back navigation, per-step validation, and a summary page before submit.
12. **Tabs Component** — Build a reusable tabs component without any library.
13. **Modal Component** — Build a reusable modal with a portal, close on backdrop click, and close on `Escape` key.
14. **Shopping Cart** — Add/remove items, update quantity, calculate total price using `useReducer`.
15. **Drag and Drop List** — Reorder a list of items by dragging, without any DnD library.

---

**Advanced**

16. **Autocomplete / Typeahead** — Build a search input that fetches suggestions from an API as you type, with keyboard navigation (arrow keys + Enter) through results.
17. **Custom `useFetch` Hook** — Build a hook that handles loading, error, data states, and request cancellation with `AbortController`.
18. **Virtualized List** — Render a list of 10,000 items efficiently by only rendering visible rows (implement basic windowing from scratch).
19. **Kanban Board** — Columns with cards that can be moved between columns (like a basic Trello board).
20. **Real-time Search with Cache** — Search an API, cache previous results to avoid redundant requests, show stale data while refetching.
21. **OTP Input** — Build a 6-digit OTP input where focus auto-moves to the next box, supports backspace, and paste works correctly.
22. **File Upload with Preview** — Drag-and-drop file upload with image preview, progress bar simulation, and file type/size validation.
23. **Polling Component** — Fetch data every N seconds, pause polling when the tab is not active (using `visibilitychange`).
24. **Undo/Redo** — Implement undo/redo functionality for a text editor or drawing canvas using a history stack.
25. **Context + Reducer Auth Flow** — Build a login/logout flow with protected routes using Context API and `useReducer`.

---

**Good APIs to use for practice:**
- `https://jsonplaceholder.typicode.com` — users, posts, todos
- `https://dummyjson.com` — products, carts, auth
- `https://api.github.com` — repos, users

---
