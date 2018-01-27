import ActionTypes from '../constant/constant';

const INITIAL_STATE = { 
    todo: []
}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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

        default:
            return( state )
    }
}