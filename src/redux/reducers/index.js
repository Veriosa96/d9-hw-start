const inizialState = {
    getJob:{
        favorite: []
    }
}
// stato iniziale che troviamo ogni volta all'apertura della pagina prima di essere sostituito da un altro stato compilato

const firstReducer = (state = inizialState, action) => {
    switch (action.type) {
    case 'ADD_JOB':
        return{
            ...state,
            getJob:{
                ...state.getJob,
                favorite:[...state.getJob.favorite,action.payload]
            }
        }
        default:
        return state;
    }
}



export default firstReducer;

