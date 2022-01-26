import React from "react"


export function AvatarPicture({ user, size, isGrey }) {
    // console.log(props);
    let fontSize = '1em';
    let bgColor = user.avatarColor
    if (size === '24px') {
        fontSize = '0.75em'
    }
    if (size === '110px') {
        fontSize = '2.2em'
    }
    if (isGrey) {
        bgColor = '#e4e5e7'
    }

    return (
        <div className="user-avatar-picture">
            {!user.imgUrl &&
                <div className="user-avatar" style={{ backgroundColor: bgColor, width: size, height: size, fontSize }}>
                    <p>{user.username[0].toUpperCase()}</p>
                </div>
            }
            {user.imgUrl &&
                <div className="user-picture" style={{ width: size, height: size }}>
                    <img src={`${user.imgUrl}`} alt={<p>{user.username[0].toUpperCase()}</p>} />
                </div>
            }
        </div>
    )
}