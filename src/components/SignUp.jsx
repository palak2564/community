import React from 'react'
import '../Components/SignUP.css'

const SignUp = () => {
    return (
        <div className='signup_section'>
            <div className='signup_img'>
                <img src="https://assets-news.housing.com/news/wp-content/upload"/>
            </div>
            <div className='signup_form'>
                <h3>Sign Up</h3>
                <label htmlFor="email">Email : </label>
                <input type="email" />
                <label htmlFor="password">Password : </label>
                <input type="password" />
                <label htmlFor="role">Role : </label>
                <select name="role" id="role">
                    <option value="">Select</option>
                    <option value="Admin">Admin</option>
                    <option value="Resident">Resident</option>
                    <option value="others">others</option>
                </select>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp
