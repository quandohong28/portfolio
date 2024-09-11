import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import ErrorPage from './components/routes/ErrorPage.jsx'
import Root from './components/routes/Root.jsx'
import './index.css'
import Bio from './components/pages/Bio.jsx'
import Skills from './components/pages/Skills.jsx'
import Projects from './components/pages/Projects.jsx'
import Experiences from './components/pages/Experiences.jsx'
import Rewards from './components/pages/Rewards.jsx'
import Education from './components/pages/Education.jsx'
import Certifications from './components/pages/Certifications.jsx'


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <Navigate to='home' />,
			},
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'bio',
				element: <Bio />,
			},
			{
				path: 'skills',
				element: <Skills />,
			},
			{
				path: 'projects',
				element: <Projects />,
			},
			{
				path: 'experiences',
				element: <Experiences />,
			},
			{
				path: 'rewards',
				element: <Rewards />,
			},
			{
				path: 'education',
				element: <Education />,
			},
			{
				path: 'certifications',
				element: <Certifications />,
			}
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
