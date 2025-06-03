## текущий момент в скриншоте:
![Alt text](image.png)


# Redux + Redux Toolkit | Продвинутый полный курс

Спойлер: конспект не веду.

Повторяю проект по видео канала "Евгений Паромов | Front-end":
1) "Redux + Redux Toolkit | Продвинутый полный курс | Часть 1": https://www.youtube.com/watch?v=YROz0WYExww&t=930s&ab_channel=%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%D0%9F%D0%B0%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%7CFront-end
2) "RTK Query, Thunk, createAsyncThunk | Продвинутый полный курс | Часть 2": https://www.youtube.com/watch?v=9NVDzMW6b1k&list=LL&index=4&t=2719s&ab_channel=%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%D0%9F%D0%B0%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%7CFront-end 

### Полезные ссылки:
1) Документация и уставовка Redux-toolkit: https://redux-toolkit.js.org/tutorials/quick-start 


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
