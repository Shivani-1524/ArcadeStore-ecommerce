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
        // (async () => {
        //     console.log('TEST')
        //     axios.defaults.headers.common['authorization'] = loggedToken

        //     const res = await axios({
        //         method: "POST",
        //         url: "/api/user/address",
        //         headers: {
        //             authorization: loggedToken
        //         },
        //         data: {
        //             address
        //         }
        //     })
        //     console.log(res)
        // })()
        (async () => {
            axios.defaults.headers.common['authorization'] = loggedToken

            const res = await axios({
                method: "GET",
                url: "/api/user/address",
                headers: {
                    authorization: loggedToken
                }
            })
            console.log(res)
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