export default ( state = {}, action ) => {
    switch (action.type){
        case 'SEARCH_POST':
            console.log(action.payload.data.articles)
            return { ...state, posts: action.payload.data.articles }
        default:
            return state;
    }
}