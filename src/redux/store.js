import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import studentReducer from './reducers/studentReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const mainReducer = combineReducers({
    user : userReducer,
    student : studentReducer
})

const commonData = {
    user : {
        items : [
            {
                id: 1, name: 'name1', email: 'name1@gmail.com', phone: 9842789427
            },
            {
                id: 2, name: 'name2', email: 'name2@gmial.com', phone: 8779137109
            }
        ]
    },
    student : {
        studentId: 201,
        marks: 70
    }
}

const store = createStore(mainReducer, commonData,composeWithDevTools())

export default store