import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Dashboard = () => {
    const [authors, setAuthors] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author`)
            .then(res => {
                setAuthors(res.data)
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const handleDelete = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <table className='table'>
        <thead>
        <Link to={`/new`}>Add a new author</Link>
        <h4>We have quotes by:</h4>
                    <tr>
                        <th> Author</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors &&
                        authors.map((author, i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td> <Link to={`/author/${author._id}/edit`} >Edit </Link></td>
                                <td> <button className="btn btn-dark" onClick={() => handleDelete(author._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
    )
}

export default Dashboard;