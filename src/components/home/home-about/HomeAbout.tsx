import React from 'react'
import styles from './HomeAbout.module.scss'
import Container from '../../ui/container/Container'
import Headling from '../../ui/headling/Headling'
import user1 from '../../../assets/User1.png'
import Image from 'next/image'
const HomeAbout = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__about}>
				<Container>
					<Headling
						link='/about'
						nameLink='View about me'
						title='about-me'
						width={200}
					/>
					<div className={styles.home__about__content}>
						<div className={styles.home__about__content__left}>
							<div className={styles.home__about__content__left__description}>
								<p>Hello, I’m Elias!</p>
								<p>
									I’m a self-taught front-end developer based in Kyiv, Ukraine.
									I can develop responsive websites from scratch and raise them
									into modern user-friendly web experiences.
								</p>
								<p>
									Transforming my creativity and knowledge into websites has
									been my passion for over a year. I have been helping various
									clients to establish their presence online. I always strive to
									learn about the newest technologies and frameworks.
								</p>
							</div>
						</div>
						<div className={styles.home__about__content__right}>
							<Image src={user1} alt='user1' />
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default HomeAbout
