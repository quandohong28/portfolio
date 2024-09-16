import { faFacebook, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import portfolioImage from '../../assets/portfolio.svg';

function Sidebar() {
    const location = useLocation();

    const navItems = [
        {
            name: 'Home',
            url: 'home',
        },
        {
            name: 'Bio',
            url: 'bio',
        },
        {
            name: 'Skills',
            url: 'skills',
        },
        {
            name: 'Projects',
            url: 'projects',
        },
        {
            name: 'Experiences',
            url: 'experiences',
        },
        {
            name: 'Rewards',
            url: 'rewards',
        },
        {
            name: 'Education',
            url: 'education',
        },
        {
            name: 'Certifications',
            url: 'certifications',
        },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: faFacebook,
            url: 'https://fb.com/quan.dh02',
        },
        {
            name: 'GitHub',
            icon: faGithub,
            url: 'https://github.com/quandohong28',
        },
        {
            name: 'Telegram',
            icon: faTelegram,
            url: 'https://t.me/quandohong28',
        },
        {
            name: 'Twitter',
            icon: faTwitter,
            url: 'https://twitter.com/quandohong28',
        },
        {
            name: 'Email',
            icon: faAt,
            url: 'mailto:quandohong28@gmail.com',
        },
    ];

    return (
        <>
            <div className='flex flex-col justify-center items-center my-12 border-r-4 border-black'>
                <div className='mb-8'>
                    <Link to={`home`} className='font-bold'>
                        <img width={200} src={portfolioImage} alt="Portfolio" />
                    </Link>
                </div>
                <div className='flex flex-col mb-8'>
                    {
                        navItems.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    className={`p-1 w-48 text-center mb-4 uppercase font-semibold ${location.pathname.includes(item.url) ? 'bg-orange-200' : 'bg-transparent'}`}
                                    to={item.url}>{item.name}</Link>
                            )
                        })
                    }
                </div>
                <div className='flex justify-between items-center gap-4'>
                    {
                        socialLinks.map((item, index) => {
                            return (
                                <a key={index} href={item.url} target='_blank' className='w-10 h-10 border-2 border-black flex items-center justify-center'>
                                    <FontAwesomeIcon icon={item.icon} size='lg' />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar