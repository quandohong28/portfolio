import React from 'react'
import Star from '../routes/Star'

function Skills() {
    const skills = {
        hardSkills: [
            {
                name: 'PHP',
                level: 4,
                experience: '2,5 years'
            },
            {
                name: 'Laravel',
                level: 4,
                experience: '6 months'
            },
            {
                name: 'ReactJS',
                level: 4,
                experience: '2 years'
            },
            {
                name: 'Angular',
                level: 3,
                experience: '1 years'
            },
            {
                name: 'MySQL',
                level: 4,
                experience: '2 years'
            },
            {
                name: 'Github CI/CD',
                level: 3,
                experience: '6 months'
            },
            {
                name: 'Docker',
                level: 3,
                experience: '2 months'
            },
            {
                name: 'Linux',
                level: 4,
                experience: '2 years'
            },
        ],
        softSkills: [
            {
                name: 'Time Management',
                level: 5,
            },
            {
                name: 'Team work',
                level: 4,
            },
            {
                name: 'Problem Solving',
                level: 5,
            }
        ],
    }

    return (
        <>
            <div class="h-[540px] overflow-y-auto p-10 scrollbar-none">
                <div className='grid grid-cols-2 gap-12'>
                    <div>
                        <p className='uppercase font-bold mb-4'>HARD SKILLS</p>
                        <ul className='flex flex-col gap-4 list-disc list-inside'>
                            {skills.hardSkills.map((skill, index) => {
                                return (
                                    <li key={index} className='flex flex-col'>
                                        <div className='flex justify-between gap-2'>
                                            <span>{skill.name}</span>
                                            <Star value={skill.level} />
                                        </div>
                                        <p className='text-sm text-gray-400'>{skill.experience}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p className='uppercase font-bold mb-4'>SOFT SKILLS</p>
                        <ul className='flex flex-col gap-4'>
                            {skills.softSkills.map((skill, index) => {
                                return (
                                    <li key={index} className='flex flex-col'>
                                        <div className='flex justify-between gap-2'>
                                            <span>{skill.name}</span>
                                            <Star value={skill.level} />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills