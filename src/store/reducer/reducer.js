import ActionTypes from '../constant/constant';

<<<<<<< HEAD
const INITIAL_STATE = { 
    todo: []
=======
const INITIAL_STATE = {
    userName: 'Haider',
    currentUser:'',
    users: [],
    messages: {},
    recipientID: ''
>>>>>>> ffe0176b1413a63ca91e16cc7fdd9905d4d2aa9e
}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
<<<<<<< HEAD
        case ActionTypes.TODO:
            return ( state )
        case ActionTypes.UPDATEBUTTON:
        const obj1 = Object.assign( {} , state.todo[action.index] , action.payload );
        state.todo.splice(action.index, 1 , obj1);
        action.edit(state.todo[action.index].id , obj1)
        
            return (state)

        case ActionTypes.TODODELETE:
        let ids = state.todo[action.payload].id
        state.todo.splice(action.payload,1)
        action.remove(ids);
            return({
                todo :  state.todo.concat()
        })

        case ActionTypes.TODOEDIT:
            
            const objOld = state.todo[action.payload] = {name :state.todo[action.payload].name , isEdit : true , id :state.todo[action.payload].id }
            const objnew = Object.assign( {} , state ,objOld);
        return ({
            todo : objnew.todo.concat()
        })
        case ActionTypes.TODOEDITCANCEL:
        const oldObj = state.todo[action.payload] = {name :state.todo[action.payload].name , isEdit : false , id :state.todo[action.payload].id }
        const newObj = Object.assign( {} , state ,gaa);
        return ({
            todo : newObj.todo.concat()
        })
        case ActionTypes.FIREBASE:
                return ({
                todo : state.todo.concat(action.payload)
        })

=======
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })   
        case ActionTypes.ALLUSERS:
            return ({
                ...state,
                users: action.payload
            }) 
        case ActionTypes.CHANGERECPUID:
            return ({
                ...state,
                recipientID: action.payload
            })
        case ActionTypes.MESSAGES:
            return ({
                ...state,
                messages: action.payload
            })
>>>>>>> ffe0176b1413a63ca91e16cc7fdd9905d4d2aa9e
        default:
            return( state )
    }
}