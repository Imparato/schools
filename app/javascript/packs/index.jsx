// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root.reducer";
import { getSchools } from "./actions/school.action";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import '@tailwindcss/forms';

document.addEventListener("turbolinks:load", () => {
  const reactApp = document.querySelector(".react-app");
  if (reactApp) {
      const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    store.dispatch(getSchools());

    ReactDOM.render(
      <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(".react-app")
    );
  }
  });
