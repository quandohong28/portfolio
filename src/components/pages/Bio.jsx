import React from 'react'

function Bio() {
	return (
		<>
			<div class="h-[540px] overflow-y-auto p-10 scrollbar-none">
				<ul className='flex flex-col gap-4 list-disc list-inside'>
					<li>Fullname: Do Hong Quan</li>
					<li>Age: 23</li>
					<li>Gender: Male</li>
					<li>Location: Bac Tu Liem, Hanoi</li>
					<li>Tel: 0362303364</li>
					<li>Mail: quandohong28@gmail.com</li>
					<li>As a student majoring in Web Development at FPT Polytechnic, I would like to  nd an internship opportunity for a Backend Developer position to apply and improve the knowledge I have learned in a real-life environment. I am passionate about programming and have a strong background in languages such as HTML, CSS, Javascript, PHP. I look forward to working in a dynamic and creative environment where I can learn from industry experts, participate in real projects, and contribute to the company's growth.</li>
				</ul>
			</div>
		</>
	)
}

export default Bio