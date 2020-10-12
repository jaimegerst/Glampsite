import * as ActionTypes from './ActionTypes';

export const packages = (state = { isLoading: true,
                                    errMess: null,
                                    packages: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, packages: action.payload};

        case ActionTypes.PACKAGES_LOADING:
            return {...state, isLoading: true, errMess: null, packages: []}

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};