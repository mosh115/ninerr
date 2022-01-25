import React, { useState } from 'react';
import { uploadImg } from '../services/cloudinary.service';

export function EditUser() {


    const [inputValues, setInputValue] = useState({
        level: "",
        about: "",
        price: "",
        daysToMake: "",
        description: "",
        imgUrls: "",
        tags: "",
        orderTitle: "",
        orderDesc: "",
        orderdetails: ""
    });

    function handleChange(ev) {
        const { name, value } = ev.target;
        setInputValue({ ...inputValues, [name]: value });

    }

    function handleChange1(ev) {
        const { name, value } = ev.target;
        const arr = value.split(',')
        setInputValue({ ...inputValues, [name]: arr });
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(inputValues);
    }

    async function onUploadImg(ev) {
        console.log(typeof ev.target.files);
        let urls = []

        Object.values(ev.target.files).forEach(async (file) => {
            const url = await uploadImg(file)
            urls.push(url)
            // console.log(urls);
            setInputValue({ ...inputValues, imgUrls: urls });
        })
    }



    return (
        <div className='add-gig main-container'>
            <div className="gig-form">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-control">
                        <label>Title
                            <input
                                placeholder="Title"
                                type="string"
                                name="title"
                                id="title"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.title}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Price
                            <input
                                placeholder="Price"
                                type="number"
                                id="price"
                                name="price"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.price}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >Days To Make
                            <input
                                placeholder="Days To Make"
                                type="number"
                                id="daysToMake"
                                name="daysToMake"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.daysToMake}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-control">
                        <label> Description
                            <textarea
                                placeholder="Description"
                                type="text"
                                name="description"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.description}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Img Urls
                            <input
                                placeholder="comma-seperated imgUrls"
                                type="file"
                                multiple
                                name="imgUrls"
                                className="input-field"
                                onChange={(e) => onUploadImg(e)}
                                value={inputValues.imgUrls}
                                required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Tags

                            <textarea
                                placeholder="comma-seperated tags"
                                type="text"
                                name="tags"
                                className="input-field"
                                onChange={(e) => handleChange1(e)}
                                value={inputValues.tags}
                                required />
                        </label>
                    </div>

                    <b>Order Details</b>

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
                    </div>
                    <button type="submit">
                        submit
                    </button>

                </form>
            </div>
        </div>
    );
}
