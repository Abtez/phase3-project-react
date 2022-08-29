import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const [logUser, setlogUser] = useState([])
    const [username, setUsername] = useState('')
    const url = "http://localhost:9292/users"

    useEffect(() => {
        fetch(url).then(res=> res.json())
        .then(users => setlogUser(users))
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        logUser.filter(user => {
            if(user.name.toLowerCase().match(username)){
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                navigate('/');
                window.location.reload()
            }
        });
        
    }

    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={(e) => handleSubmit(e)} className="mt-3">
                        <h4 className="text-center">Login</h4>
                        <div className="form-outline mb-4">
                            <input placeholder="Enter Name" value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-group" required />
                        </div>
                        

                        <div>
                            <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        
        </>
    )
}