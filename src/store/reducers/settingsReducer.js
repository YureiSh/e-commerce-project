const initialState = {
    user: {
        email: "test@email.com"
    },
    title: "Test page",
    counters: 0
};

export function settingsReducer(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}