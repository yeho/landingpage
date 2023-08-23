import React from 'react'
import styles from './commands.module.scss'
import { links, info } from '../config'
import { Commands, Command } from '../typings'
import ListElement from '../ListElement/ListElement'

const rawCommands: Command[] = [
	{
		name: 'help',
		icon: 'fas fa-fw fa-question-circle',
		description: 'List down all available commands',
		execute(app) {
			const { commands } = app.state
			return (
				<>
					Available commands:
					{[...commands.values()].map(
						({ icon, name, description }, key) => (
							<ListElement
								key={key}
								icon={icon}
								name={name}
								description={description}
								help
							/>
						)
					)}
				</>
			)
		},
	},
	{
		name: 'info',
		icon: 'fas fa-fw fa-info-circle',
		description: 'Show information about me',
		execute(app) {
			const { userDataLoaded, userData } = app.state
			if (!userDataLoaded)
				return <>YehoWebsite: user data could not be fetched</>
			const { avatar_url, login, name, bio } = userData
			return (
				<div className={styles.infoWrapper}>
					<div className={styles.infoInner}>
						<img
							src={"foto.png"}
							className={styles.avatar}
							alt="GitHub avatar"
						/>
						<div className={styles.content}>
							<div className={styles.header}>
								<strong>{name}</strong>{' '}
								<span className="muted">@{login}</span>
							</div>
							
							<div className={styles.info}>{info}</div>
						</div>
					</div>

					<div className={styles.icons}>
						<i className="fab fa-fw fa-android"></i>
						<i className="fab fa-fw fa-aws"></i>
						<i className="fab fa-fw fa-cpanel"></i>
						<i className="fa-brands fa-square-git"></i>
						<i className="fab fa-fw fa-raspberry-pi"></i>
						<i className="fab fa-fw fa-github"></i>
						<i className="fab fa-fw fa-js-square"></i>
						<i className="fab fa-fw fa-node-js"></i>
						<i className="fab fa-fw fa-python"></i>
						<i className="fab fa-fw fa-java"></i>
					</div>
				</div>
			)
		},
	},
	{
		name: 'projects',
		icon: 'fas fa-fw fa-tools',
		description: 'Display a list of my projects',
		execute(app) {
			const { projectDataLoaded, projectData } = app.state
			if (!projectDataLoaded)
				return <>YehoWebsite: project data could not be fetched</>
			return (
				<>
					{projectData.map(
						({ name, html_url, description }: any, key: number) => (
							<ListElement
								key={key}
								icon={'fab fa-fw fa-github-alt'}
								name={name}
								link={html_url}
								description={description}
							/>
						)
					)}
				</>
			)
		},
	},
	{
		name: 'links',
		icon: 'fas fa-fw fa-link',
		description: 'Get all my important links and socials',
		execute() {
			return (
				<>
					{links.map(({ icon, name, link, description }, key) => (
						<ListElement
							key={key}
							icon={icon}
							name={name}
							link={link}
							description={description}
						/>
					))}
				</>
			)
		},
	},
	{
		name: 'clear',
		icon: 'fas fa-fw fa-eraser',
		description: 'Clear terminal screen',
		execute(app) {
			app.setState({
				...app.state,
				record: [],
			})
		},
	},
	{
		name: 'whoami',
		icon: 'fas fa-fw fa-id-badge',
		description: 'Show logged user ',
		execute(app) {
			const { commands } = app.state
			return (
				<>
					root
				</>
			)
		},
	},
	{
		name: 'date',
		icon: 'fas fa-fw fa-calendar',
		description: 'Show current date ',
		execute(app) {
			const { commands } = app.state
			return (
				<>
					{new Date().toLocaleString()}
				</>
			)
		},
	},
	{
		name: 'art',
		icon: 'fas fa-fw fa-coffee',
		description: 'Show ascii art',
		execute(app) {
			const { commands } = app.state
			return (
				<>
				
					<p><span className="highlighted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)   <br/>
					&nbsp;&nbsp;(&nbsp;/(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;/(&nbsp;&nbsp;(&nbsp;/(   <br/>
					&nbsp;&nbsp;)\())&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;)\())&nbsp;)\())  <br/>
					&nbsp;((_)\&nbsp;&nbsp;)\&nbsp;&nbsp;((_)\&nbsp;((_)\   <br/>
					__&nbsp;((_)((_)&nbsp;&nbsp;_((_)&nbsp;&nbsp;((_)  <br/>	
					\&nbsp;\&nbsp;/&nbsp;/|&nbsp;__||&nbsp;||&nbsp;|&nbsp;/&nbsp;_&nbsp;\ <br/>
					&nbsp;\&nbsp;V&nbsp;/&nbsp;|&nbsp;_|&nbsp;|&nbsp;__&nbsp;||&nbsp;(_)&nbsp;| <br/>
					&nbsp;&nbsp;|_|&nbsp;&nbsp;|___||_||_|&nbsp;\___/  <br/>
					</span>	</p>
				</>
			)
		},
	},

	
]
const commands: Commands = new Map(rawCommands.map(cmd => [cmd.name, cmd]))

export default commands
