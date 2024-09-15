import React from 'react'

function Projects() {
	const projects = [
		{
			title: 'Portfolio Website',
			description: 'This is a personal project to help me practice my frontend, ui/ux skills and is my personal website.',
			type: 'Personal Project',
			technologies: 'ReactJS, Tailwind CSS',
			url: 'https://github.com/quandohong28/pp_portfolio',
			startDate: '08/09/2024',
			endDate: '26/09/2024',
		},

		{
			title: 'Reminders App',
			description: 'Provides users with reminder and note taking applications. Can display, edit, delete and update folders and tasks. Uses sessions to authenticate user information. Data is stored on a MySQL database.',
			technologies: 'PHP, MySQL, Blade, Tailwind CSS',
			type: 'Team Project',
			url: 'https://github.com/quandohong28/tp_reminders',
			startDate: '28/07/2024',
			endDate: 'now',
		}
	]

	return (
		<>
			<div class="h-[540px] overflow-y-auto p-10 scrollbar-none">
				{projects.map((project, index) => {
					return (
						<div className='mb-12'>
							<div className='flex items-center gap-4 mb-4'>
								<p className='uppercase font-bold '>{project.title}</p>
								<span class="bg-orange-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{project.type}</span>
							</div>
							<div className="flex gap-4">
								<div className='flex flex-col justify-between items-end pe-4 border-r-2 border-black'>
									<p className='text-xs'>{project.startDate}</p>
									<p className='text-xs'>{project.endDate}</p>
								</div>
								<ul className='flex flex-col gap-4 list-disc list-inside'>
									<li className='mb-8'>{project.description}</li>
									<li>Technologies: {project.technologies}</li>
									<li>Github: <a className='text-sm text-orange-300 italic' target='_blank' href={project.url}>{project.url}</a></li>
								</ul>
							</div>

						</div>
					)
				})}
			</div>
		</>
	)
}

export default Projects