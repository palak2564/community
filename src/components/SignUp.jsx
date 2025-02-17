import './SignUp.css'

function SignUp() {
    return (
        <div className="signup_section">
            <div className="signup_img">
                <img src="https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=" alt="Building" />
            </div>
            <div className="signup_form">
                <h2>Sign Up</h2>
                <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form_group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="form_group">
                    <label htmlFor="role">Role</label>
                    <select id="role">
                        <option value="">Select your role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <button type="submit">Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp