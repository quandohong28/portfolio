import React from 'react'

function Experiences() {
	const experiences = [
		{
			companyName: 'No experience',
			companyLocation: 'null',
			role: 'null',
			position: 'null',
			startDate: 'null',
			endDate: 'null',
		}
	]
	return (
		<>
			<div class="h-[540px] overflow-y-auto lg:p-10 scrollbar-none">
				{experiences.map((experience, index) => {
					return (
						<div className='mb-12'>
							<div className='flex items-center gap-4 mb-4'>
								<p className='uppercase font-semibold '>{experience.companyName}</p>
								<span class="bg-orange-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{experience.role}</span>
							</div>
							<div className="flex gap-4">
								<div className='flex flex-col justify-between items-end pe-4 border-r-2 border-black'>
									<p className='text-xs'>{experience.startDate}</p>
									<p className='text-xs'>{experience.endDate}</p>
								</div>
								<ul className='flex flex-col gap-4 list-disc list-inside'>
									<li>Location: {experience.companyLocation}</li>
									<li>Position: {experience.position}</li>
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Experiences