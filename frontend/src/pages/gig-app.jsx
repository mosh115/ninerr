import React, { useEffect } from "react"
import { connect } from "react-redux"
import { GigList } from "../cmps/gig-list.jsx"
import { loadGigs, addGig } from "../store/gig.actions.js"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { Loader } from "../cmps/Loader.jsx"

function _GigApp({ loadGigs, gigs, AddGig }) {

    useEffect(() => {
        // console.log('useEffect in explosre');
        loadGigs()
    }, [])


    // console.log('gigApp', gigs)
    if (gigs.length === 0) return <h1 className="gig-list">There is nothing to show here...</h1>
    if (!gigs) return <Loader />
    return (
        <div className="main-container">


            {/* Todo: */}
            {/* <Filter/> */}
            <GigList gigs={gigs} className="gig-list" />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs,
    }
}
const mapDispatchToProps = {
    loadGigs,
    addGig,
}

export const GigApp = connect(mapStateToProps, mapDispatchToProps)(_GigApp)
