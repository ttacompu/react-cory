export default function courseReducer(state=[], action){
    switch(action.type){
            case "CREATE_COURSE":
                [...state, Object.assign({}, action.course)]
                return state;

            default:
                return state;
    }

}