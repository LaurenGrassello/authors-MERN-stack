import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../App.css';

const AuthorForm = (props) => {
    const { initialName, handleSubmitProp } = props
    const [name, setName] = useState(initialName)
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmitProp({ name })
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Link to='/'>Home</Link>
                <p>
                    <label className="form-label">Name: </label>
                    <input type='text' name='name' value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <button className="btn btn-dark">Add</button>
                <button className="btn btn-dark m-2">{<Link style={{color:"white", textDecoration:"none"}} to='/'>Back</Link>}</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{color: "red"}}>{err}</p>
                ))
            }
        </div>
    )
}

export default AuthorForm