import React from 'react'

function Skills() {

    const skills = {
        softSkills: [
            'Time Management',
            'Team work',
            'Problem Solving',
        ],
        languages: [
            'PHP',
            'Javascript',
            'Java',
        ],
        frameworks: [
            'Laravel',
            'ReactJS',
            'Angular',
            'ExpressJS',
            'Tailwindcss',
            'Bootstrap',
        ],
        databases: [
            'MySQL',
            'MongoDB',
            'Google Firebase',
        ],
        tools: [
            'Git/Github',
            'Docker',
            'Postman',
            'VS Code',
        ],
        os: [
            'Windows',
            'Linux',
            'MacOS',
        ]
    }

    const keys = Object.keys(skills)

    return (
        <>
            <div class="h-[540px] overflow-y-auto p-10 scrollbar-none">
                <div className='grid grid-cols-2 gap-12'>
                    {keys.map((key, index) => {
                        return (
                            <div key={index}>
                                <h1 className='uppercase font-bold mb-2'>{key}</h1>
                                <ul>
                                    {skills[key].map((skill, index) => {
                                        return (
                                            <li key={index}>{skill}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills