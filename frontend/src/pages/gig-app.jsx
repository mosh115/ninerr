import React, { useEffect } from "react"
import { connect } from "react-redux"

import { GigList } from "../cmps/gig-list.jsx"

import { loadGigs, onAddGig } from "../store/gig.actions.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

function _GigApp({ loadGigs, gigs, onAddGig }) {
  useEffect(() => {
    loadGigs()
  }, [])

  return (
    <div>
      <h3>Explore all</h3>
      <button onClick={onAddGig}>Add Gig -will be deleted</button>
      Todo:
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
  onAddGig,
}

export const GigApp = connect(mapStateToProps, mapDispatchToProps)(_GigApp)
