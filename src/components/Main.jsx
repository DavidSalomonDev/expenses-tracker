import React, { useState } from 'react'
import Register from './Forms/Register'
import Login from './Forms/Login'
import style from './Main.module.css'

const Main = () => {
	const [user, setUser] = useState(1)
	const [loading, setLoading] = useState(true)
	const [isRegistered, setIsRegistered] = useState(false)

	const formSwitcher = e => {
		setIsRegistered(e === 'Create an account' ? true : false)

	}

	const form = !isRegistered ? <Login /> : <Register />
	return (
		<div className={style.Main}>
			<div className={style.MainBlock}>
				{form}
				<span
					className={style.underLine}>{isRegistered ? 'Have an account?' : 'Not registered?'} <button
						onClick={() => formSwitcher(!isRegistered ? 'Create an account' : 'Login')}
						className={style.linkBtn}>{isRegistered ? 'Login here' : 'Create an account'}</button>
				</span>
			</div>
		</div>
	)
}

export default Main
