import React, { useState } from 'react'

export const AddTodo = (props) => {
    let [title,setTitle] = useState("");
    let [desc,setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("You didn't give todo title or todo description which you must!");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    
    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" placeholder=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" placeholder=""/>
                </div>
                <button type="submit" className="btn btn-primary btn-success mt-3">Submit</button>
            </form>
        </div>
    )
}