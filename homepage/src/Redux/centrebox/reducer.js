import * as types from "./actiontype";
const init ={
    loading:false,
    news:[],
    error:false
}
export const newsReducer=(state=init,action)=>{
    switch(action.type){
        case types.GETNEWS:
            return{
                ...state,news:action.payload,
                loading:false,
               
            }

         case types.GETNEWSLOADING:
            return{
                ...state,
                loading:true,
                error:false
            }   
            case types.GETNEWSERROR:
                return{
                    ...state,
                    loading:false,
                    error:true
                }
                default:
                    return{
                        ...state
                    }
    }
}