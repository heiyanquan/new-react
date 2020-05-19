import { combineReducers } from 'redux';
import user from './modules/user';
import recommend from './modules/recommend';
import detail from './modules/detail';

export default combineReducers({
  recommend,
  detail,
  user,
});
