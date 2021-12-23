import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Explore = () => {
    const [hotels, setHotels] = useState([])
    useEffect (() => {
        const fetchHotels = async () => {
            const { data } = await axios.get('/api/hotels')
            setHotels(data)
        }
        fetchHotels()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Explore
