import { combineReducers } from 'redux';
import user from './modules/user';
import detail from './modules/detail';

export default combineReducers({
  user,
  detail
});
