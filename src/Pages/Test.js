import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
    let loggedToken = localStorage.getItem('userToken')
    useEffect(() => {
        let address = {
            _id: "232",
            name: "meow",
            town: "adwwa"
        };
        (async () => {
            axios.defaults.headers.common['authorization'] = loggedToken

            const res = await axios({
                method: "GET",
                url: "/api/user/address",
                headers: {
                    authorization: loggedToken
                }
            })
        })()
    }, [])
    return (
        <div>
            <h1>Test</h1>
            {/* <h3>{res}</h3> */}
        </div>
    )
}

export default Test