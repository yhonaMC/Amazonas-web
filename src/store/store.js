import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../Reducers/loginReducer";
import { registerReducer } from "../Reducers/registerReducer";
import { ProductosReducer } from "../Reducers/productosReducer";
import { ActiveReducer } from "../Reducers/ActiveReducer";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  product: ProductosReducer,
  categorys: ActiveReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
