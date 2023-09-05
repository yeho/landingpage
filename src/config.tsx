import React from 'react'
const github_username = 'root'
const discord_usertag = 'yeho_00'
const discord_userid = 'yeho_00'
const email = 'jsh085@gmail.com'

const projects = [
	'yeho/BOT',
	'yeho/backdoor',
	'yeho/network-socket',
]

const links = [
	{
		name: 'Blog',
		icon: 'fa fa-rss',
		link: 'https://yehovaldespino.com/blog',
		description: 'My personal blog',
	},
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/yeho',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://yehovaldespino.com',
		description: 'Personal website',
	},
	{
		name: 'Discord',
		link: `https://discord.com/users/${discord_userid}`,
		icon: 'fab fa-fw fa-discord',
		description: `${discord_usertag} | Add me as friend!`,
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
]

const info = (
	<>
		<p>I am <span className="highlighted">Senior Engineer</span> with +9 years of experience designing, developing, architecting and maintaining applications in the E-commerce, Insurance and Retail industry. {' '}
		</p>
		<p>			
		<span className="highlighted">Architecting core features for corporate apps</span>{' '}
		</p>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
