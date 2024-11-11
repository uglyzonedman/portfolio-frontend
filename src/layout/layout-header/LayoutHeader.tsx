import LogoSvg from '@/src/components/ui/logo/Logo'
import Link from 'next/link'
import React from 'react'
import styles from './LayoutHeader.module.scss'
import { headerMenu } from '@/src/consts/header_menu'
import ArrowSvg from '@/src/components/ui/arrow/Arrow'

const LayoutHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__content}>
					<div className={styles.header__content__logo}>
						<LogoSvg />
						<Link className={styles.header__content__logo__title} href={'/'}>
							uglyZonedman
						</Link>
					</div>
					<div className={styles.header__content__navigation}>
						<ul className={styles.header__content__navigation__list}>
							{headerMenu.map(item => (
								<li
									key={item.id}
									className={styles.header__content__navigation__list__item}
								>
									<Link
										className={
											styles.header__content__navigation__list__item__link
										}
										href={item.link}
									>
										<span>{item.name.slice(0, 1)[0]}</span>
										{item.name.slice(1, item.name.length)}
									</Link>
								</li>
							))}
						</ul>
						<button className={styles.header__content__navigation__lang}>
							<span>EN</span>
							<ArrowSvg />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default LayoutHeader
