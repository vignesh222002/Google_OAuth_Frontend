import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Login() {
    const [url, setUrl] = useState('')

    const fetchLoginUrl = async () => {
        await axios.get('http://localhost:4000/auth/google/url')
            .then((response) => {
                setUrl(response.data)
            })
            .catch(error => console.log("Fetch Login Url Error", error))
    }

    useEffect(() => {
        fetchLoginUrl()
    }, [])

    return (
        <>
            <div>Login Page</div>
            <h5>{url}</h5>
            <a href={url}>Click here to Login</a>
        </>
    )
}

export default Login