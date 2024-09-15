import React from 'react'

function Skills() {
    return (
        <>
            <div class="h-[540px] overflow-y-auto p-10 scrollbar-none">
                <div className='flex justify-between'>
                    <div>
                        <p className='uppercase font-bold mb-4'>HARD SKILLS</p>
                        <ul className='flex flex-col gap-4 list-disc list-inside'>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>ReactJS</li>
                            <li>Angular</li>
                            <li>MySQL</li>
                            <li>Github CI/CD</li>
                            <li>Docker</li>
                            <li>Linux</li>
                        </ul>
                    </div>

                    <div>
                        <p className='uppercase font-bold mb-4'>SOFT SKILLS</p>
                        <ul className='flex flex-col gap-4 list-disc list-inside'>
                            <li>Time Management</li>
                            <li>Team work</li>
                            <li>Problem Solving</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills