import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
const axios = require('axios');

const SingleProduct = (props) => {
    const location = useLocation()
    const [productData, setProductData] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get()
            }

        })()

    }, [])
    console.log(location.state.id)
    return (
        <div>
            <h1>SINGLE PRODUCT</h1>
        </div>
    )
}

export { SingleProduct }