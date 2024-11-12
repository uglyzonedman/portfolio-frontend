import React from 'react'
import Headling from '../../ui/headling/Headling'
import Container from '../../ui/container/Container'
import styles from './HomeContacts.module.scss'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import { FaMessage, FaRegMessage } from 'react-icons/fa6'
const HomeContacts = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__contacts}>
				<Container>
					<Headling
						link='/contacts'
						nameLink='Send message to me'
						title='contacts'
						width={200}
					/>
					<div className={styles.home__contacts__content}>
						<div className={styles.home__contacts__content__left}>
							<p className={styles.home__contacts__content__left__description}>
								I’m interested in freelance opportunities. However, if you have
								other request or question, don’t hesitate to contact me
							</p>
						</div>
						<div className={styles.home__contacts__content__right}>
							<h3 className={styles.home__contacts__content__right__title}>
								Message me here
							</h3>
							<div className={styles.home__contacts__content__right__links}>
								<div
									className={styles.home__contacts__content__right__links__item}
								>
									<FaDiscord color='#ABB2BF' size={32} />
									<p>uglyzonedman</p>
								</div>
								<div
									className={styles.home__contacts__content__right__links__item}
								>
									<FaTelegram color='#ABB2BF' size={32} />
									<p>https://t.me/uglyzonedman </p>
								</div>
								<div
									className={styles.home__contacts__content__right__links__item}
								>
									<FaMessage color='#ABB2BF' size={32} />
									<p>majest228@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default HomeContacts
