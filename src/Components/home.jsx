import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        await axios.get("http://localhost:4000/auth/me", {
            withCredentials: true,
        })
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.log("Fetch User Error", error)
                navigate('/login')
            })
    }

    const logout = async () => {
        await axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
            .then((response) => {
                navigate('/login')
            })
            .catch((error) => {
                console.log("Logout Error", error)
            })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            <div>Home Page</div>
            {user ? (
                <>
                    <h5>User is  - {user?.name}</h5>
                    <h5>Email is  - {user?.email}</h5>
                    <img width={150} height='auto' src={user?.picture} alt="Profile PIC" />
                    <button onClick={() => logout()}>Logout</button>
                </>
            ) : (
                <h5>No User Found</h5>
            )}
        </>
    )
}

export default Home