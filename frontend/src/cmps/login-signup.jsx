import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'

export function LoginSignup(props) {
    console.log(props);
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(props.isSignUp)
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const users = await userService.getUsers()
        setUsers(users)
    }, [])

    const clearState = () => {
        setCredentials({ username: '', password: '', fullname: '' })
        setIsSignup(false)
    }

    const handleChange = ev => {
        const field = ev.target.name;
        const value = ev.target.value;
        setCredentials({ ...credentials, [field]: value });
    }

    const onLogin = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username) return;
        props.onLogin(credentials);
        clearState()
    }

    const onSignup = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username || !credentials.password || !credentials.fullname) return;
        props.onSignup(credentials);
        clearState()
    }

    const toggleSignup = (ev) => {
        ev.stopPropagation()
        setIsSignup(!isSignup)
    }

    const stopPropagation = (ev) => {
        ev.stopPropagation()
    }

    return (
        <div className="login-background flex justify-center align-center" onClick={() => { props.toggleSignIn(false); props.toggleSignUp(false); }}>
            <div className="signIn-up-section" onClick={stopPropagation}>
                {!isSignup && <form className="login-form" onSubmit={onLogin} >
                    <select
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    >
                        <option value="">Select User</option>
                        {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                    </select>
                    {/* <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={this.handleChange}
                        required
                        autoFocus
                        />
                        <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                    /> */}
                    <button>Login!</button>
                </form>}
                {isSignup && <form className="signup-form" onSubmit={onSignup}>
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <button >Signup!</button>
                </form>}
                <p>
                    <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
                </p>
            </div>
        </div>
    )
}
