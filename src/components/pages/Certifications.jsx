import React from 'react'

function Certifications() {
	const certifications = [
		{
			name: 'JLPT N5',
			organization: 'Japan Fund Exchange and Japan Education and Services',
			date: '2024',
			credentialId: '',
			credentialUrl: '',
		},
		{
			name: 'IELTS 6.5',
			organization: 'British Council',
			date: '2023',
			credentialId: '',
			credentialUrl: '',
		},
		{
			name: 'TOEIC 800',
			organization: 'ETS',
			date: '2023',
			credentialId: '',
			credentialUrl: '',
		},
	]

	return (
		<>
			<div class="h-[540px] overflow-y-auto lg:p-10 scrollbar-none">
				{certifications.map((certification, index) => {
					return (
						<div className='mb-12'>
							<div className='flex items-center gap-4 mb-4'>
								<p className='uppercase font-semibold '>{certification.name}</p>
							</div>
							<div className="flex gap-4">
								<div className='flex flex-col justify-between items-end pe-4 border-r-2 border-black'>
									<p className='text-xs'>{certification.date}</p>
								</div>
								<ul className='flex flex-col gap-4 list-disc list-inside'>
									<li>Organization: {certification.organization}</li>
									<li>Credential ID: {certification.credentialId}</li>
									<li>Credential URL: {certification.credentialUrl}</li>
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Certifications