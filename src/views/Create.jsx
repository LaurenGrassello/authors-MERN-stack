import React, { useState } from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'
import {useHistory} from 'react-router-dom'


const Create = () => {
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const createAuthor = a => {
        axios.post('http://localhost:8000/api/author', a)
        .then(res=> {history.push("/")}
        )
        .catch(err=>{
            const errorResponse = err.response.data.errors
            const errorArr = []
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key]['message'])
            }
            setErrors(errorArr)
        })
    }


    return (
        <div>
            <AuthorForm handleSubmitProp={createAuthor} initialName='' />
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </div>
    )

}

export default Create;

// import React, { useEffect, useState } from 'react'
// import { useParams, useHistory } from 'react-router-dom'
// import axios from 'axios'
// import AuthorForm from '../components/AuthorForm'

// const Create = (props) => {
//     const history = useHistory()
//     const { id } = useParams()
//     const [loaded, setLoaded] = useState(false)
//     const [author, setAuthor] = useState()
//     const [errors, setErrors] = useState([])

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/author/' + id)
//             .then(res => {
//                 setAuthor(res.data)
//                 setLoaded(true)
//             })
//     }, [id])

//     const createAuthor = a => {
//         axios.post('http://localhost:8000/api/author', a)
//             .then(res => {
//                 setAuthor([...author, res.data])
//                 history.push("/")
//             })
//             .catch(err => {
//                 const errorResponse = err.response.data.errors
//                 const errorArr = []
//                 for (const key of Object.keys(errorResponse)) {
//                     errorArr.push(errorResponse[key]['message'])
//                 }
//                 setErrors(errorArr)
//             })
//     }

//     return (
//         <div>
//             {loaded && (
//                 <>

//                     <AuthorForm
//                         handleSubmitProp={createAuthor}
//                         initialName={author.name} />
//                     {
//                         errors.map((err, i) => (
//                             <p key={i} style={{ color: "red" }}>{err}</p>
//                         ))
//                     }

//                 </>
//             )}
//         </div>
//     )
// }

// export default Create;