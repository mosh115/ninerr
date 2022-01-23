import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadGigs() {
    return (dispatch) => {
        gigService.query()
            .then(gigs => {
                console.log('Gigs from DB:', gigs)
                dispatch({
                    type: 'SET_GIGS',
                    gigs
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load gigs')
                console.log('Cannot load gigs', err)
            })

        gigService.subscribe((gigs) => {
            console.log('Got notified');
            dispatch({
                type: 'SET_GIGS',
                gigs
            })
        })
    }
}

export function onRemoveGig(gigId) {
    return (dispatch, getState) => {
        gigService.remove(gigId)
            .then(() => {
                console.log('Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_GIG',
                    gigId
                })
                showSuccessMsg('Gig removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove gig')
                console.log('Cannot remove gig', err)
            })
    }
}

export function onAddGig() {
    return (dispatch) => {
        const gig = gigService.getEmptyGig();
        gigService.save(gig)
            .then(savedGig => {
                console.log('Added Gig', savedGig);
                dispatch({
                    type: 'ADD_GIG',
                    gig: savedGig
                })
                showSuccessMsg('Gig added')
            })
            .catch(err => {
                showErrorMsg('Cannot add gig')
                console.log('Cannot add gig', err)
            })
    }
}

export function onEditGig(gigToSave) {
    return (dispatch) => {
        gigService.save(gigToSave)
            .then(savedGig => {
                console.log('Updated Gig:', savedGig);
                dispatch({
                    type: 'UPDATE_GIG',
                    gig: savedGig
                })
                showSuccessMsg('Gig updated')
            })
            .catch(err => {
                showErrorMsg('Cannot update gig')
                console.log('Cannot save gig', err)
            })
    }
}
export function onSetPage(page) {
    return (dispatch) => {
        // gigService.save(gigToSave)
        //     .then(savedGig => {
        //         console.log('Updated Gig:', savedGig);
        dispatch({
            type: 'SET_PAGE',
            page: page
        })
        // showSuccessMsg('Gig updated')
        // }
        // .catch(err => {
        //     showErrorMsg('Cannot update gig')
        //     console.log('Cannot save gig', err)
        // })
    }
}

// export function addToGigt(gig) {
//     return (dispatch) => {
//         dispatch({
//             type: 'ADD_TO_GIGT',
//             gig
//         })
//     }
// }
// export function removeFromGigt(gigId) {
//     return (dispatch) => {
//         dispatch({
//             type: 'REMOVE_FROM_GIGT',
//             gigId
//         })
//     }
// }

export function checkout() {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const total = state.gigModule.gigt.reduce((acc, gig) => acc + gig.price, 0)
            const score = await userService.changeScore(-total)
            dispatch({ type: 'SET_SCORE', score })
            dispatch({ type: 'CLEAR_GIGT' })
            showSuccessMsg('Charged you: $' + total.toLocaleString())


        } catch (err) {
            showErrorMsg('Cannot checkout, login first')
            console.log('GigActions: err in checkout', err)
        }
    }
}



// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveGigOptimistic(gigId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_GIG',
            gigId
        })
        showSuccessMsg('Gig removed')

        gigService.remove(gigId)
            .then(() => {
                console.log('Server Reported - Deleted Succesfully');
            })
            .catch(err => {
                showErrorMsg('Cannot remove gig')
                console.log('Cannot load gigs', err)
                dispatch({
                    type: 'UNDO_REMOVE_GIG',
                })
            })
    }
}