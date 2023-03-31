const userReducer = (state='',action)=>{
    
    switch (action.type) {
        case 'ADD_USER':
            // console.log('===',state,'===',action);       just to check
            return{
                ...state,
                items:[...state.items,action.payload]
            }

            case 'DELETE_USER':
            // console.log('===',state,'===',action);   
            return{
                ...state,
                items: state.items.filter((user)=> user.id !== action.payload)
            }

            case 'USER_INFO':
            // console.log('===',state,'===',action);
            let userDetail = state.items.filter((user)=> user.id === action.payload)
            return{
                ...state,
                user: (userDetail.length>0) ? userDetail[0]: {}
            }

            case 'USER_UPDATE':
            // console.log('===',state,'===',action);   
            return{
                ...state,
                items: state.items.filter((user)=> user.id !== action.payload.id ? action.payload : user)
            }
    
        default:
            return state
    }

}

export default userReducer