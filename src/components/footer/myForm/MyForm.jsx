import MyButton from '@/components/UI/button/MyButton'
import axios from 'axios'
import React, { useState } from 'react'
import styles from './MyForm.module.scss'

const MyForm = () => {
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [userPhone, setUserPhone] = useState('')
	const [userMess, setUserMess] = useState('')

	async function sendMess() {
		try {
			await axios.post(`${process.env.API_HOST}/send-request`, {
				userName,
				userEmail,
				userPhone,
				userMess,
			})
			setUserName('')
			setUserEmail('')
			setUserPhone('')
			setUserMess('')
		} catch (error) {
			console.log('Sending error', error)
		}
	}
	return (
		<form className={styles.form}>
			<div className={styles.inputs__wrapper}>
				<div className={styles.inputs}>
					<input
						className='input'
						type='text'
						placeholder='ФИО'
						onChange={e => setUserName(e.target.value)}
					/>
					<input
						className='input'
						type='email'
						placeholder='Введите почту'
						onChange={e => setUserEmail(e.target.value)}
					/>
					<input
						className='input'
						type='tel'
						placeholder='Введите телефон'
						onChange={e => setUserPhone(e.target.value)}
					/>
				</div>
				<div className={styles.textAr}>
					<textarea
						className='input'
						placeholder='Введите сообщение'
						onChange={e => setUserMess(e.target.value)}
					></textarea>
				</div>
				<div className={styles.buttons}>
					<button className='btn' onClick={sendMess}>
						Отправить
					</button>
				</div>
			</div>
		</form>
	)
}

export default MyForm
