# Burger Builder with React!

Project built using **React** library. Multiple React features were used here: **Hooks**, **Redux**, **Authentication**, **Testing**, **Routing** etc.

## How to use

- Use **"less"** and **"more"** buttons and construct _your own burger_.

- To proceed buying burger you need to **signin** or **signup** by clicking "authenticate" navigation link. Put your _e-mail_ and _password_ (don't write your real ones) then press _signin_ (if accounts exists) / _signup_ (if account is new).

- Press _continue_ to proceed to the **checkout**. There you need to **fill** all the fields of _submission form_. After you finished press "submit".

- Now you **can check** your _submitted order_ by clicking **"Orders"** navigation link. **All orders** made from the **current account** will be _displayed_ there.

- This website has a **responsive web-design**. Feel free to check out its _mobile_ and _tablet versions_.

## How to launch

- Need **final version**? Simply check link of the app. It is _in the header_ next to the _description_.

- **Deployment code** is located in "_public_" folder.

- To launch **development code** download _zip file_ on your computer. Extract it into the empty folder. Then open npm to install all dependencies. Inside project's directory type:

  ```
  npm init
  ```

  now run the code:

  ```
  npm start
  ```

  You are ready to go and to make your burger. ;)

## Project structure

- **/build/** depository includes _deployment version_ of the project.

- **/config/** depository includes _webpack's_ and other _dependencies's building configurations_.

- **/public/** depository includes _index.html_ file. React will render its DOM there.

- **/scripts/** depository includes the ruleset, which determines how npm and its dependencies should conduct upon each of the fundamental calls (_npm start_, _npm build_ and _npm test_).

- **/src/** depository includes _development code_:

  - **/assets/** includes _burger logo image_.

  - **/components/** includes all _functional_ (stateless) _components_. Their _".js"_ and _".css"_ files.

  - **/containers/** includes all _class-based_ (statefull) _components_. Their _".js"_, _".test.js"_ and _".css"_ files.

  - **/hoc/** includes all _High-Order-Components_ (wrapping). For instance, _withErrorHandler()_ wraps other components to handle errors for them.

  - **/store/** includes _"Redux"_ related code.

- **/App.js** is a _head_ (main) class-based component. It is wrapper of all React components.
- **/index.js** inserts _App.js_ into the _root_ div element of _index.html_ file.
- **/.gitignore** is a list filled with exceptions for Git. Once the whole project is commited exceptions will be ignored.
- **/.package.json** and **/.package-lock.json** both keep the list of requirements, which allow npm to download all necessary dependencies for further successful project loading.

## Things I've learned

- **React fundamentals**:

  - What are **components** and their two types: _functional(stateless)_ and _class-based(statefull)_.

  - What are **state** and **props**. How and where to use each of them.

  - **Lifecycle Hooks** such as _componentDidMount()_, _componentDidUpdate()_ etc.

- How to **efficiently work** with **CSS** in React using _npm eject_ command.

- How to make **one-page** website functioning like **multi-page** website using various _re-rendering_ and _routing_ tools.

- How to **retrieve** and **post data** to the **backend** of _Firebase Database_ storage.

- How to effeciently **debug big applications** using browser _default tools_ ("sources" tab) and _extensions_ ("Redux" and "React" ext.).

- How to **handle errors**: _fetch_, _catch_ them and _return sufficient feedback_.

- How to work with **forms**. How to handle **forms validation** by _handling submission_ and _adding validation feedback_.

- How to implement **routing & routes**, **passing data between multiple pages** via _query params_ and implementing _navigation links_.

- What is **Redux**: its **basics** (_reducers_, _store_, _actions_ etc.) and **advanced features**(_middleware_, _devtools_, _action creators_, _handling async code_ etc.).

- How to implement **authentication** feature using _tokens_, _persistent authentication with local storage_ and _guarding routes_.

- How to **test** project's individual files using _npm test_ command and creating _".test.js"_ files. Also learned how to _test Redux_.

- **React Hooks** such as _useState()_ and _useEffect()_. Also, why _class-based components_ are **not required anymore**.

- Also learned about **Preact**, **Gatsby.js**, **React native** and many **other tools** _to boost_ my _competence_ and _optimize_ my _developing abilities_.

- Names of **multiple sites**, which provide an **unbelievable opportunity** to **boost React knowledge** by **practising** and **gain inspiration**. Here are the names of few: _builtwithreact_ and _react.rocks_.

## Built With

- [React](https://reactjs.org/) - JS library for building UI.

- [Redux](https://redux.js.org/) - predictable state container for JS apps.

## Authors

- **Aleksey Novikov** - _Final work_ - [Aleksey Novikov](https://github.com/Aleksey-N-hub).
