import { createStore } from 'redux';
import {create} from 'redux-react-hook';
import reducerData from './reducer'

export function makeStore() {
  return createStore(reducerData);
}

export const {StoreContext, useDispatch, useMappedState} = create();