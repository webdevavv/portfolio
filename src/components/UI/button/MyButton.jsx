import React from 'react'
import styles from './MyButton.module.scss'

export default function MyButton({ children }) {
	return <button className={styles.btn}>{children}</button>
}
