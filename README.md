<h1 align="center">Piedra, Papel y Tijeras</h1>

Un juego de "piedra, papel y tijeras" hecho con React, Vite y TypeScript es una aplicación web interactiva que permite a los usuarios jugar el famoso juego de manos contra la computadora. En este juego, los usuarios seleccionan una de las tres opciones: piedra, papel o tijeras, y luego la computadora selecciona su elección de manera aleatoria. Después de que ambos hayan hecho su elección, se determina el resultado del juego según las reglas clásicas:

- Piedra aplasta tijeras (piedra gana).
- Tijeras cortan papel (tijeras ganan).
- Papel envuelve piedra (papel gana).
  
El juego se construye utilizando React para la creación de la interfaz de usuario y la lógica del juego. Vite se utiliza como herramienta de desarrollo rápida y eficiente, y TypeScript garantiza la seguridad y la claridad del código. Los usuarios pueden hacer clic en la opción que eligen, y la aplicación muestra tanto la elección del usuario como la elección de la computadora, así como el resultado del juego.

Este tipo de juego es un excelente ejemplo de cómo se pueden crear aplicaciones web interactivas y lúdicas utilizando tecnologías modernas de desarrollo web.

## Instalación

### usando Yarn

```bash
$ yarn install
$ yarn run dev
```

### usando NPM

```bash
$ npm i
$ npm run dev
```

<!-- 
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
