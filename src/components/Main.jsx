import React, { useEffect, useState } from 'react'
import Register from './Forms/Register'
import Login from './Forms/Login'
import Tracker from './Tracker/Tracker'
import style from './Main.module.css'
import fire from '../config/Fire'

const Main = () => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [isRegistered, setIsRegistered] = useState(false)


	const authListener = () => {
		fire.auth().onAuthStateChanged(user => {
			(user) ? setUser(user) : setUser(null)
		})
	}

	useEffect(() => {
		authListener()
	}, [])

	const formSwitcher = e => {
		setIsRegistered(e === 'Create an account' ? true : false)

	}

	const form = !isRegistered ? <Login /> : <Register />
	return (
		<div className={style.Main}>
			{!user ?
				(<div className={style.MainBlock}>
					<h1 className={style.title}>Expenses tracker</h1>
					{form}
					<span
						className={style.underLine}>{isRegistered ? 'Have an account?' : 'Not registered?'} <button
							onClick={() => formSwitcher(!isRegistered ? 'Create an account' : 'Login')}
							className={style.linkBtn}>{isRegistered ? 'Login here' : 'Create an account'}</button>
					</span>
					<footer className={style.footer}>Created by davidsalomon</footer>
				</div>)
				:
				<Tracker />
			}
		</div>
	)
}

export default Main
