import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './profilepage.css'
import { useAuth } from '../../Contexts/index'
import ProfileForm from "./ProfileComponents/ProfileForm"

const ProfilePage = () => {
    const tempUser = {
        name: "Adarsh Bhalika",
        email: "test@email.com",
        number: "34343443",
        altContact: "ze@email.com",
        defaultAddress: ""
    }

    const userDetails = [
        {
            value: tempUser.name,
            inputType: "text",
            labelTxt: "Full Name",
            inputFor: "name"
        },
        {
            value: tempUser.number,
            inputType: "number",
            labelTxt: "Mobile Number",
            inputFor: "mob-num"
        },
        {
            value: tempUser.email,
            inputType: "email",
            labelTxt: "Email",
            inputFor: "emailId"
        },
        {
            value: tempUser.defaultAddress,
            inputType: "text",
            labelTxt: "Default Address",
            inputFor: "address"
        }
    ]

    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            <Navbar />
            <div className='profile-section'>
                <h1 className='center-txt'>Profile Details</h1>
                <div>
                    {userDetails.map((item, index) => <ProfileForm key={index} props={item} />)}
                    <button onClick={() => { setEditToggle(prev => !prev) }} className='mg-auto'>{editToggle ? "Submit" : "Edit"}</button>
                </div>

                <section className='details-section'>
                    <div className="address-section">
                        <h1 className='center-txt mg-t-20'>Saved Addresses</h1>
                        <div className='address-list'>
                            <label>Full Name</label>
                            <input type="text" />
                            <label>Mobile Number</label>
                            <input type="text" />
                            <label htmlFor="">Email ID</label>
                            <input type="text" />
                            <label htmlFor="">Alternate Contact</label>
                            <input type="text" />
                            <label htmlFor="">Default Address</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="card-section">
                        <h1 className="center-txt mg-t-20">Saved Cards</h1>
                        <div className='cards-list'>
                            <label>Full Name</label>
                            <input type="text" />
                            <label>Mobile Number</label>
                            <input type="text" />
                            <label htmlFor="">Email ID</label>
                            <input type="text" />
                            <label htmlFor="">Alternate Contact</label>
                            <input type="text" />
                            <label htmlFor="">Default Address</label>
                            <input type="text" />
                        </div>
                    </div>
                </section>

            </div >

        </div >
    )
}

export default ProfilePage