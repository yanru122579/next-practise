import Layout from "../components/Layout";
import "../styles/globals.css";

//第一步：匯入createStore,combineReducers API
import { createStore, combineReducers } from "redux";
//第二步 寫出reducer
// action = {type:'ADD_VALUE',value:1}
// action = {type:'MINUS_VALUE',value:1}
function counter(state = 0, action) {
  switch (action.type) {
    case "ADD_VALUE":
      return state + action.value;
    case "MINUS_VALUE":
      return state - action.value;
    default:
      return state;
  }
}
//第二之一：合併所有的reducer成一個大的reducer
const rootReducer = combineReducers({
  counter,
});
//第三步 :由rootReducer建立store
// const store = createStore(
//   rootReducer /*preLoadedState,*/,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
