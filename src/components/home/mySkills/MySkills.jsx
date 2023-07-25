import MyButton from '@/components/UI/button/MyButton'
import React from 'react'
import styles from './MySkills.module.scss'

export default function MySkills() {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.skills__inner}>
					<div className={styles.title__wrapper}>
						<h3 className='title'>Мои знания</h3>
					</div>
					<div className={styles.items__wrapper}>
						<div className={styles.item}>
							<h6>Языки разметки</h6>
							<ul className='list'>
								<li>Занимаюсь версткой более 2-х лет.</li>
								<li>Легко сверстаю сайт, любой сложности</li>
								<li>Адаптивная, кроссбраузерная верстка.</li>
								<li>Использую соверменный стек технологий.</li>
							</ul>
						</div>
						<div className={styles.item}>
							<h6>Современный дизайн</h6>
							<ul className='list'>
								<li>
									После согласования проекта, задам вам несколько вопросов.
								</li>
								<li>На их основе разработаю дизайн для вашего сайта.</li>
							</ul>
						</div>
						<div className={styles.item}>
							<h6>JS-Фреймворки</h6>
							<ul className='list'>
								<li>
									Разработаю для вас Web-приложение с использованием Vue.js или
									React.js
								</li>
								<li>Также владею Nuxt и Next.</li>
							</ul>
						</div>
					</div>
					<MyButton>Примеры работ</MyButton>
				</div>
			</div>
		</div>
	)
}
