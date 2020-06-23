// Initial State
const state = {
    users: {},
    user: [],
    isLoading: true,
};

// Getters
const getters = {
    all(state) {
        return state.all;
    },
    user(state) {
        return state.user;
    },
    users(state) {
        return state.users;
    },
    userById: (state) => (id) => {
        let user = state.user.find(user => user.id === id);
        if (user) {
            return user;
        }
        this.getUser(id);

        return state.user;

    }
};
