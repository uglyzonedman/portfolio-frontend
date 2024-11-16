import React from 'react'
import styles from './LayoutFooter.module.scss'
import Container from '@/src/components/ui/container/Container'
import LogoSvg from '@/src/components/ui/logo/Logo'
import Link from 'next/link'
import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'

const LayoutFooter = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__content}>
					<div className={styles.footer__content__left}>
						<div className={styles.footer__content__left__logo}>
							<LogoSvg />
							<Link
								className={styles.footer__content__left__logo__title}
								href={'/'}
							>
								uglyZonedman
							</Link>
						</div>
						<p className={styles.footer__content__left__description}>
							Web designer and front-end developer
						</p>
					</div>
					<div className={styles.footer__content__right}>
						<h3 className={styles.footer__content__right__title}>Media</h3>
						<div className={styles.footer__content__right__links}>
							<Link
								href={'/'}
								className={styles.footer__content__right__links__item}
							>
								<FaGithub color='#ABB2BF' size={32} />
							</Link>
							<Link
								href={'/'}
								className={styles.footer__content__right__links__item}
							>
								<FaTelegram color='#ABB2BF' size={32} />
							</Link>
							<Link
								href={'/'}
								className={styles.footer__content__right__links__item}
							>
								<FaDiscord color='#ABB2BF' size={32} />
							</Link>
						</div>
					</div>
				</div>
				<p className={styles.footer__copyright}>
					© Copyright 2022. Made by Elias
				</p>
			</Container>
		</footer>
	)
}

export default LayoutFooter
