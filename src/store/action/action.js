import ActionTypes from '../constant/constant';

// Initialize Firebase
import fires from '../../fire'


    export function changeTodo(objectTodo) {
        return dispatch => {
            let todos = {
                name : objectTodo.name,
                isEdit : false
                }
                fires.database().ref('/').child('todo').push(todos)
                console.log(todos);

                dispatch({ type: ActionTypes.TODO, payload: todos})
        }
    }
    export function _updateButton(value , index) {
        return dispatch => {
            let edit = (key, text) => {
                fires.database().ref("todo/" + key).set(text);
                console.log({text})
            }
                dispatch({ type: ActionTypes.UPDATEBUTTON, payload: value ,  index : index , edit : edit})
        }
    }
    export function deleteTodo(index) {
        return dispatch => {
            let todos = index
            let remove  = (key)=> {
                fires.database().ref('/').child("todo/" + key).remove()
            }           
        dispatch({ type: ActionTypes.TODODELETE, payload: todos , remove: remove})
        }
}
export function editTodo(ind) {
    return dispatch => {
        let todo = ind
            dispatch({ type: ActionTypes.TODOEDIT, payload: todo })
    }
}
export function isCancel(ind) {
    return dispatch => {
        let todo = ind
            dispatch({ type: ActionTypes.TODOEDITCANCEL, payload: todo })
    }
}
export function firebase(snapshout) {
    return dispatch => {

            dispatch({ type: ActionTypes.FIREBASE , payload : snapshout})
    }
}
