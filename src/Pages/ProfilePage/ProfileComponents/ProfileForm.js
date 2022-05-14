import React from 'react'
import '../profilepage.css'
const ProfileForm = ({ props }) => {
    const { value, inputType, labelTxt, inputFor } = props
    return (
        <div className='input-container'>
            <label htmlFor={inputFor}>{labelTxt}</label>
            <input id={inputFor} type={inputType} defaultValue={value} />
        </div>

    )
}

export default ProfileForm