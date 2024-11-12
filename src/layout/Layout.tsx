import React from 'react'
import LayoutHeader from './layout-header/LayoutHeader'
import styles from './Layout.module.scss'
import Link from 'next/link'
import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'
import LayoutLinks from './layout-links/LayoutLinks'
import LayoutFooter from './layout-footer/LayoutFooter'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.wrapper}>
			<LayoutLinks />
			<LayoutHeader />
			<div>{children}</div>
			<LayoutFooter />
		</div>
	)
}

export default Layout
