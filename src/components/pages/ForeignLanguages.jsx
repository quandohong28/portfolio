import React from 'react'

function ForeignLanguages() {
	const languages = [
		{
			name: 'English',
			reading: 'Read and understand specialized documents well',
			writing: 'Good',
			listening: 'Listen well to daily conversations',
			speaking: 'Fluent',
		},
		{
			name: 'Japanese',
			reading: 'Read and understand specialized documents well',
			writing: 'Good',
			listening: 'Listen well to daily conversations',
			speaking: 'Fluent',
		}
	]

	return (
		<>
			<div class="h-[540px] overflow-y-auto lg:p-10 scrollbar-none">
				{languages.map((language, index) => {
					return (
						<div className='mb-12'>
							<div className='flex items-center gap-4 mb-4'>
								<p className='uppercase font-semibold '>{language.name}</p>
							</div>
							<div className="flex gap-4">
								<ul className='flex flex-col gap-4 list-disc list-inside'>
									<li>Reading: {language.reading}</li>
									<li>Writing: {language.writing}</li>
									<li>Listening: {language.listening}</li>
									<li>Speaking: {language.speaking}</li>
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default ForeignLanguages