import React from 'react'
import styles from './HomeAbout.module.scss'
import Container from '../../ui/container/Container'
import Headling from '../../ui/headling/Headling'
import user1 from '../../../assets/user1.png'
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
									I’m a self-taught front-end developer based in Astana,
									Kazakhstan. I specialize in developing responsive websites
									from scratch and transforming them into modern, user-friendly
									web experiences.
								</p>
								<p>
									For over a year, I’ve been turning my creativity and technical
									knowledge into functional, visually appealing websites. I work
									on projects of varying complexity, helping clients establish
									and enhance their online presence.
								</p>
								<p>
									I’m always eager to expand my skills, keeping up with the
									latest technologies and frameworks to deliver innovative
									solutions tailored to each project’s unique needs.
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
