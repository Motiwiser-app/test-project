const INITIAL_STATE = {
    listings: null,
    limit: 5,
};

const applySetListings = (state, action) => ({
    ...state,
    listings: action.listings,
});

const applySetListingsLimit = (state, action) => ({
    ...state,
    limit: action.limit,
});

const applySetListing = (state, action) => ({
    ...state,
    listings: {
        ...state.listings,
        [action.uid]: action.listing,
    },
});

function listingReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LISTINGS_SET': {
            return applySetListings(state, action);
        }
        case 'LISTINGS_LIMIT_SET': {
            return applySetListingsLimit(state, action);
        }
        case 'LISTING_SET': {
            return applySetListing(state, action);
        }
        default:
            return state;
    }
}


export default listingReducer;