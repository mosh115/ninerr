import React from 'react'
import { connect } from 'react-redux'


class _HomePage extends React.Component {
    state = {}



    render() {

        return (
            <section>
                To-do:<br />
                Hero + Search box + 4 popular categories(main-fold)<br />
                Popular professional services,<br />
                bla bla bla<br />
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.userModule.count
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)