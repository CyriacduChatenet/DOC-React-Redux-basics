<div style="display:flex;align-items:center;justify-content:center;width:100%;height:10vh;">
<img src="https://www.baptiste-donaux.fr/react-redux-concept/react-redux.png" alt="react redux" width="480">
<h3>Redux toolkit Basics</h3>
</div>

<h3>Acces to Redux state from react app</h3>
-   go to index.js file of your react app :
-   add Provider tag from react-redux dependance between App tag

```bash
$ <Provider store={store}><App/></Provider>
```

<h3>Use redux in react component</h3>
-  import and use useSelector hook

```bash
$ import { useSelector } from 'react-redux';
```

-  import and use useDispatch hook

```bash
$ import { useDispatch } from 'react-redux';
```

-  call Redux state in react component : 

```bash
$ const yourState = useSelector((state) => state.sliceName.value)
```

-  call Redux state method in react component : 

```bash
$ onClick={() => {dispatch(reduxMethod())}}
```

- [Redux toolkit doc](https://redux-toolkit.js.org/)
- [React doc](https://fr.reactjs.org/)
