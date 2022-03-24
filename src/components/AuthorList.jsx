import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'


const AuthorList = (props) => {

    return (
        <div className='container'>
            <table>
            <thead>
            <tr>
            <th>Author</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.author.map((author, i)=>(
                <tr key={i}>
                <td>{author.name}</td>
                <td><Link to={`/author/${author._id}/edit`}/>Edit</td>
                <td><DeleteButton authorId={author._id} successCallback={()=>props.removeFromDom(author._id)}/></td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default AuthorList;