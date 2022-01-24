import React from 'react';
import { connect } from "react-redux"


function _UserProfile({ user }) {
    if (!user) window.location.replace('/');

    const formatDate = (value) => {
        let date = new Date(value);
        let mmm_yyyy = date.toUTCString().split(' ').splice(2,2)
        return mmm_yyyy[0] + ' ' + mmm_yyyy[1];
    }
    return (
        <section className="profile-page-container flex">
            <div className="user-card flex column">
                <div className="user-avatar" style={{ backgroundColor: user.avatarColor }}>
                    <p>{user.username[0].toUpperCase()}</p>
                </div>
                <ul>
                    <li className="line"></li>
                    <li>
                        <span className="user-details-icon">
                            <svg width="13" height="13" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"></path></g><defs><clipPath id="clip0"><rect width="12" height="16"></rect></clipPath></defs></svg>
                            {' '}From
                        </span>
                    </li>
                    <li>
                        <span className="user-details-icon">
                            <svg width="13" height="13" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z">
                                </path>
                            </svg>
                            {' '}Member since
                        </span>
                        <p>{formatDate(user.createdAt)}</p>
                    </li>
                </ul>
            </div>

            <div className="user-gigs">here will come users gigs</div>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}
//   const mapDispatchToProps = {
//     onLogin,
//     onSignup,
//     onLogout,
//     loadUsers,
//     removeUser,
//   }

export const UserProfile = connect(
    mapStateToProps,
    // mapDispatchToProps
)(_UserProfile)
