import React, {useState} from 'react'
import style from './Login.module.css'

const Register = () =>{
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [displayName, setDisplayName] = useState('')
	const [fireErrors, setFireErrors] = useState('')
	return (
		<>
			<form>
				<input type='text' className={style.regField} placeholder='Your name' name='displayName'/>
				<input type='text' className={style.regField} placeholder='Email' name='email'/>
				<input type='password' className={style.regField} placeholder='Password' name='password'/>
				<input type='submit' className={style.submitBtn} value='Sign Up'/>
			</form>
		</>
	)
}

export default Register
