import React, { useState } from 'react'
import fire from '../../config/Fire'
import style from './Login.module.css'

const Register = () => {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fireErrors, setFireErrors] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		console.log(email, password, displayName)
		fire.auth().createUserWithEmailAndPassword(email, password)
			.then(user => {
				let currentUser = fire.auth().currentUser
				currentUser.updateProfile({ displayName })
			})
			.catch(error => setFireErrors(error.message))
	}

	let errorNotification = fireErrors && (<div className={style.error}>{fireErrors}</div>)
	return (
		<div>
			{errorNotification}
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={(e) => setDisplayName(e.target.value)} className={style.regField} placeholder='Your name' name='displayName' value={displayName} />
				<input type='text' onChange={(e) => setEmail(e.target.value)} className={style.regField} placeholder='Email' name='email' value={email} />
				<input type='password' onChange={(e) => setPassword(e.target.value)} className={style.regField} placeholder='Password' name='password' value={password} />
				<input type='submit' className={style.submitBtn} value='Sign Up' />
			</form>
		</div>
	)
}

export default Register
