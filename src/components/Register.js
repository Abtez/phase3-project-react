import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function Register(){
    const navigate = useNavigate();
    const userUrl = "http://localhost:9292/users"

    const [userData, setUserData] = useState({
        name: "",
        user_type: "Choose role",
        avatar: ""
      })

      function hanleInput(e){
        const name = e.target.name
        let value = e.target.value

        setUserData({...userData, 
        [name]: value
        })

      }

    function handleSubmit(e){
        e.preventDefault()
    
        fetch(userUrl, {
            method:'POST', 
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => {
            localStorage.setItem('currentUser', JSON.stringify(data));
            console.log(data);
        })
        navigate('/');
        window.location.reload()
      }

    return(
        <>

        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="mt-3">
                        <h4 className="text-center">Create Account</h4>
                        <div className="form-outline mb-4">
                            <input placeholder="Full Name" value={userData.name} onChange={hanleInput} type="text" name="name" className="form-group" />
                        </div>

                        <div>
                        <input value={userData.avatar} onChange={hanleInput} placeholder="Image Url" type="url" name="avatar" />
                        </div>

                        <div className="my-3">
                            <select value={userData.user_type} onChange={hanleInput} name="user_type">
                                <option disabled selected >Choose role</option>
                                <option value="staff">Staff</option>
                                <option value="student">Student</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        

                        <div>
                            <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        
        </>
    )
}