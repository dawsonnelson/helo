const initialState = {
    username: {},
    id: {},
    picture: {},

}

const UPDATE_USER = 'UPDATE_USER'

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
        return state;
    }
}

export default reducer
