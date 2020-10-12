import {combineReducers} from 'redux';
import count from './count';
import dog from './dog';

const rootReducer = combineReducers(
    {count, 
     dog   
    }
)

export default  rootReducer;