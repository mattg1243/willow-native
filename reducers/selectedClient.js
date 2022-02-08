const selectedClientReducer = (state = {}, action) => {
    switch (action.type) {
        case 'selectClient':
            return action.client;
        default:
            return {};
    }
}

export default selectedClientReducer;