import Layout from "../components/Layout";
import "../styles/globals.css";

//第一步：匯入createStore,combineReducers API
import { createStore, combineReducers } from "redux";
//第二步 寫出reducer
// action = {type:'ADD_VALUE',value:1}
function counter(state, action) {
  return newState;
}
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
