import MyButton from '@/components/UI/button/MyButton'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'
import MyPhoto from '../../../../public/myPhoto.jpg'
import styles from './AboutMe.module.scss'

export default function AboutMe() {
	return (
		<div className='container'>
			<div className={styles.topWrapper}>
				<div className={styles.content}>
					<h1>WebFrontend - developer</h1>
					<div>
						<p>
							Я Викулов Анатолий Вячеславович, занимаюсь Web - разработкой.
							Разработаю для вас сайт, с использованием современных технологий,
							окажу поддержку сайта.
						</p>
						<p>Разработаю современный дизайн сайта, учту все ваши пожелания.</p>
					</div>
					<MyButton>
						<Link to='form' smooth={true}>
							Написать
						</Link>
					</MyButton>
				</div>
				<div className={styles.image}>
					<Image src={MyPhoto} alt='Мое Фото' />
				</div>
			</div>
		</div>
	)
}
