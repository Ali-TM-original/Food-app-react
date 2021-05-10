import React, { useState } from 'react';


export default function Header(props) {
    let [title, setTitle] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        if(!title){
            alert("Title and Description cannot be blank")
        }
        props.sendreq(title)
        setTitle('')

    }

    return (
        <div className="container">
            <h3 className="text-center my-3">Search For Recipe</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                        </div>     
            </form>
                    </div>
    )
}