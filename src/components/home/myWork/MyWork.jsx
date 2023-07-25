import React from 'react'
import styles from './MyWork.module.scss'

export default function MyWork() {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.work__inner}>
					<h3 className='title'>Как проходит работа</h3>
					<div className={styles.items__wrapper}>
						<div className={styles.item}>
							<h5>Если есть дизайн</h5>
							<ul className='list'>
								<li>Вам нужно предоставить мне макет</li>
								<li>Я его оцениваю, называю цену и сроки на выполнение.</li>
								<li>
									После согласования, беру предоплату 50% и приступаю к работе.
								</li>
								<li>
									Закончив, отправляю вам ссылку для оценивания работы. Если все
									вас устраивает, жду оплату, и отправляю файлы.
								</li>
							</ul>
						</div>
						<div className={styles.item}>
							<h5>Если есть дизайн</h5>
							<ul className='list'>
								<li>Вы заполняете бриф-файл (я вам его предоставлю)</li>
								<li>Подбираем дизайны, которые вам нравятся</li>
								<li>
									После выбора, беру предоплату 50% и приступаю к разработке
									дизайна.
								</li>
								<li>
									Согласовываю с вами получившийся дизайн, и приступаю к
									верстке.
								</li>
								<li>
									Закончив, отправляю вам ссылку для оценивания работы. Если все
									вас устраивает, жду оплату, и отправляю файлы.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
