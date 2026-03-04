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

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
