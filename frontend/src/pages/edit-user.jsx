import React, { useState } from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { uploadImg } from '../services/cloudinary.service';
import { updateUser } from '../store/user.actions';

function _EditUser({ user, updateUser }) {


    const [inputValues, setInputValue] = useState({
        fullname: user.fullname,
        username: user.username,
        // imgUrl: user.url,
        shortAbout: "",
        about: "",
        from: "",
    });

    function handleChange(ev) {
        const { name, value } = ev.target;
        setInputValue({ ...inputValues, [name]: value });

    }

    // function handleChange1(ev) {
    //     const { name, value } = ev.target;
    //     const arr = value.split(',')
    //     setInputValue({ ...inputValues, [name]: arr });
    // }

    async function handleSubmit(ev) {
        ev.preventDefault();
        const userToUpdate = { ...user, ...inputValues }
        console.log('edit-user', userToUpdate);
        updateUser(userToUpdate)
        // try {
        //   const updatedUser =  await updateUser(userToUpdate)
        //     console.log(updatedUser);
        // }

    }

    // async function onUploadImg(ev) {
    //     console.log(typeof ev.target.files);
    //     let urls = []

    //     Object.values(ev.target.files).forEach(async (file) => {
    //         const url = await uploadImg(file)
    //         urls.push(url)
    //         // console.log(urls);
    //         setInputValue({ ...inputValues, imgUrls: urls });
    //     })
    // }


    if (!user) return <h1>Loading</h1>
    return (
        <div className='add-gig main-container'>
            <div className="gig-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label> Full name
                            <input
                                placeholder="Full name"
                                type="text"
                                name="fullname"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.fullname}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label> User name
                            <input
                                placeholder="User name"
                                type="text"
                                name="username"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.username}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Short About
                            <input
                                placeholder="shortAbout"
                                type="text"
                                name="shortAbout"
                                id="shortAbout"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.shortAbout}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>About
                            <textarea
                                placeholder="about"
                                type="text"
                                id="about"
                                name="about"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.about}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >From
                            <input
                                placeholder="e.g United State"
                                type="text"
                                id="from"
                                name="from"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.from}
                                required
                            />
                        </label>
                    </div>


                    {/* <div className="form-control">
                        <label>Img
                            <input
                                placeholder="imgUrl"
                                type="file"
                                name="imgUrl"
                                className="input-field"
                                onChange={(e) => onUploadImg(e)}
                                value={inputValues.imgUrl}
                                required />
                        </label>
                    </div> */}
                    {/* <div className="form-control"> */}
                    {/* <label>Tags

                            <textarea
                                placeholder="comma-seperated tags"
                                type="text"
                                name="tags"
                                className="input-field"
                                onChange={(e) => handleChange1(e)}
                                value={inputValues.tags}
                                required />
                        </label> */}
                    {/* </div> */}

                    {/* <b>Order Details</b>

                    <div className="form-control">
                        <label >Order title
                            <input
                                placeholder="Order title"
                                type="text"
                                id="orderTitle"
                                name="orderTitle"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.orderTitle}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >Order description
                            <input
                                placeholder="Order description"
                                type="text"
                                id="orderDesc"
                                name="orderDesc"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.orderDesc}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >Order Details
                            <textarea
                                placeholder="Order details(comma-seperated)"
                                type="text"
                                id="orderdetails"
                                name="orderdetails"
                                className="input-field"
                                onChange={(e) => handleChange1(e)}
                                value={inputValues.orderdetails}
                                required
                            />
                        </label>
                    </div> */}
                    <button type="submit">
                        submit
                    </button>

                </form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}
const mapDispatchToProps = {
    updateUser,

}

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(_EditUser)