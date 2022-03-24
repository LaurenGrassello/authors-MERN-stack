import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'

const EditAuthor = (props) => {
    const history = useHistory()
    const { id } = useParams()
    const [loaded, setLoaded] = useState(false)
    const [author, setAuthor] = useState()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
    }, [id])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => { history.push('/') })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key]['message'])
                }
                setErrors(errorArr)
            })
    }

    return (
        <div>
            {loaded && (
                <>

                    <AuthorForm
                        handleSubmitProp={updateAuthor}
                        initialName={author.name} />
                    {
                        errors.map((err, i) => (
                            <p key={i} style={{ color: "red" }}>{err}</p>
                        ))
                    }

                </>
            )}
        </div>
    )
}

export default EditAuthor;