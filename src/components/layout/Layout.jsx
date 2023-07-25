import Header from '@/components/header/Header'
import Head from 'next/head'

import React from 'react'
import MyFooter from '../footer/MyFooter'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Vikulov Anatoliy' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Header />
			<main>{children}</main>
			<MyFooter />
		</>
	)
}
