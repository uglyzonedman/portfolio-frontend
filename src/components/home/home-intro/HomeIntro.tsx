import React, { useEffect, useState } from 'react'
import styles from '../Home.module.scss'
import HomeIntroUser from './home-intro-user/HomeIntroUser'
import HomeIntroPhrase from './home-intro-phrase/HomeIntroPhrase'
import Container from '../../ui/container/Container'

const HomeIntro = () => {
	const [currentPhrase, setCurrentPhrase] = useState(0)
	const [isFading, setIsFading] = useState(false)
	const phrases = [
		{
			id: 1,
			phrase: 'To live is to be prepared to die at any time.',
			author: 'Ken Kaneki',
		},
		{
			id: 2,
			phrase:
				'I’m not saying you have to trust others. Just don’t lie to yourself.',
			author: 'Renji Yomo',
		},
		{
			id: 3,
			phrase:
				'Only those who are prepared to be devoured have the right to fight.',
			author: 'Yamori (Jason)',
		},
		{
			id: 4,
			phrase: 'Sometimes you need to hurt others to protect what’s important.',
			author: 'Touka Kirishima',
		},
		{
			id: 5,
			phrase: 'I am nothing but a tool. I have no right to dreams or hopes.',
			author: 'Kishou Arima',
		},
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFading(true)
			setTimeout(() => {
				setCurrentPhrase(prev => (prev === phrases.length - 1 ? 0 : prev + 1))
				setIsFading(false)
			}, 1000)
		}, 5000)

		return () => clearInterval(interval)
	}, [phrases.length])

	return (
		<section className={styles.home__intro}>
			<Container>
				<div className={styles.home__intro__content}>
					<div className={styles.home__intro__content__left}>
						<h3 className={styles.home__intro__content__left__title}>
							uglyzonedman is a <span>front-end</span> and
							<span> back-end developer</span>
						</h3>
						<p className={styles.home__intro__content__left__description}>
							I create projects using cutting-edge technologies, combining
							innovation and functionality to deliver exceptional results.
						</p>
						<button className={styles.home__intro__content__left__contact}>
							Contact me!!
						</button>
					</div>
					<HomeIntroUser />
				</div>
				<div>
					<HomeIntroPhrase
						key={phrases[currentPhrase].id}
						item={phrases[currentPhrase]}
						isFading={isFading}
					/>
				</div>
			</Container>
		</section>
	)
}

export default HomeIntro
