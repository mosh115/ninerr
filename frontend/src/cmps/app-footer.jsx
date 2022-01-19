
import React, { useState } from 'react'
import { connect } from 'react-redux'


import { UserMsg } from './user-msg.jsx'

function _AppFooter() {




    return (
        <footer className="app-footer">

            Todo:<br />
            categories <br />
            Social Media Links
            <p>
                Ninerr coffeerights 2022
            </p>
            <UserMsg />
        </footer>
    )
}


function mapStateToProps(state) {
    return {


    }
}

const mapDispatchToProps = {

}

export const AppFooter = connect(mapStateToProps, mapDispatchToProps)(_AppFooter)