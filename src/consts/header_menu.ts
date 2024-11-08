interface HeaderMenuType {
	id: number
	name: string
	link: string
}

export const headerMenu: HeaderMenuType[] = [
	{
		id: 1,
		name: '#home',
		link: '/',
	},
	{
		id: 2,
		name: '#works',
		link: '/works',
	},
	{
		id: 3,
		name: '#about-me',
		link: '/about-me',
	},
	{
		id: 4,
		name: '#contacts',
		link: '/contacts',
	},
]
