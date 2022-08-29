import { useState } from "react"
import {useNavigate} from 'react-router-dom';

export default function Post({addMagazine}){

    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
        user_id: currentUser.id
    })

    function hanleInput(e){
        const name = e.target.name
        let value = e.target.value

        setFormData({...formData, 
        [name]: value
        })

      }

    function handleSubmit(e){
        e.preventDefault()
    
        fetch("http://localhost:9292/magazines", {
            method:'POST', 
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => addMagazine(data))
        navigate('/');
        window.location.reload()
      }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <h2 className="mt-4">Add New Magazine</h2>
                    <form onSubmit={handleSubmit} className="mt-3">                        
                        
                        <div>
                        <input type="text" value={formData.title} onChange={hanleInput} placeholder="Title" name="title" />
                        </div>
                        
                        <div>
                        <textarea className="mt-4" value={formData.description} onChange={hanleInput} type="text" placeholder="Description" name="description" />
                        </div>

                        <select value={formData.category} onChange={hanleInput} className="my-3" name="category">
                            <option disabled selected>Choose Department</option>
                            <option value="classroom">Classroom</option>
                            <option value="admissions">Admissions</option>
                            <option value="management">Management</option>
                        </select>
                        
                        <div>
                        <input type="url" value={formData.image} onChange={hanleInput} placeholder="Image url" name="image" />
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary btn-block mt-3">Post</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        </>
    )
}

