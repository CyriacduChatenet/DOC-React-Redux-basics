<div style="display:flex;align-items:center;justify-content:center;width:100%;height:10vh;">
<img src="https://www.baptiste-donaux.fr/react-redux-concept/react-redux.png" alt="react redux" width="480">
<h3>Redux toolkit Basics</h3>
</div>


<h3>Init Redux</h3>
<h5>Install dependancies</h5>

```bash
$ npm i redux react-redux @reduxjs/toolkit
```

<h5>React Redux template with JavaScript</h5>

```bash
$ npx create-react-app my-app --template redux
```

<h5>React Redux template with TypeScript</h5>

```bash
$ npx create-react-app my-app --template redux-typescript
```

<h3>Init Redux store</h3>
<h5>in JS</h5>

```bash
$ export const store = configureStore({
  reducer: {
    // your reducers
  },
});
```

<h5>in TS</h5>

```bash
$ export const store = configureStore({
  reducer: {
    // your reducers
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
```
<h6>Configure redux hooks types</h6>

```bash
$ import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

<h3>Init Redux slice</h3>
<h5>in JS</h5>

```bash
$ import { createSlice } from "@reduxjs/toolkit";

export const yourSlice = createSlice({
    name : "yourSlice",
    initialState : {
        // state
    },
    reducers : {
        // methods
    }
})

export const {//methods} = counterSlice.actions;
export default counterSlice.reducer;
```

<h5>in TS</h5>

```bash
$ import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SliceState {
    value: number
  }  

  const initialState: CounterState = {
    value: 0,
  }

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.value ++
        },
        decrement : (state) => {
            state.value --
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer;
```

<h3>Acces to Redux state from react app</h3>
-   go to index.(j/t)s file of your react app :
-   add Provider tag from react-redux dependance between App tag
<h5>in JS & TS</h5>

```bash
$ <Provider store={store}><App/></Provider>
```

<h3>Use redux in react component</h3>
-  import and use useSelector hook
<h5>in JS & TS</h5>

```bash
$ import { useSelector } from 'react-redux';
```

-  import and use useDispatch hook
<h5>in JS & TS</h5>

```bash
$ import { useDispatch } from 'react-redux';
```

-  call Redux state in react component : 
<h5>in JS & TS</h5>

```bash
$ const yourState = useSelector((state) => state.sliceName.value)
```

-  call Redux state method in react component : 
<h5>in JS & TS</h5>

```bash
$ onClick={() => {dispatch(reduxMethod())}}
```

- [Redux toolkit doc](https://redux-toolkit.js.org/)
- [React doc](https://fr.reactjs.org/)
