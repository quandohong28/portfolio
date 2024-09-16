import React from 'react'

function Education() {
	const educations = [
		{
			schoolName: 'fpt polytechnic college',
			schoolLocation: 'FPT Polytechnic Building, 13 Trinh Van Bo Street, Xuan Phuong, Nam Tu Liem, Hanoi',
			degree: 'Formal College',
			major: 'Web Development',
			gpa: '3.5',
			startDate: '09/2022',
			endDate: '01/2025',
		}
	]
	return (
		<>
			<div class="h-[540px] overflow-y-auto lg:p-10 scrollbar-none">
				{educations.map((education, index) => {
					return (
						<div className='mb-12'>
							<div className='flex items-center gap-4 mb-4'>
								<p className='uppercase font-semibold '>{education.schoolName}</p>
								<span class="bg-orange-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{education.degree}</span>
							</div>
							<div className="flex gap-4">
								<div className='flex flex-col justify-between items-end pe-4 border-r-2 border-black'>
									<p className='text-xs'>{education.startDate}</p>
									<p className='text-xs'>{education.endDate}</p>
								</div>
								<ul className='flex flex-col gap-4 list-disc list-inside'>
									<li>Location: {education.schoolLocation}</li>
									<li>Major: {education.major}</li>
									<li>GPA: {education.gpa}</li>
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Education