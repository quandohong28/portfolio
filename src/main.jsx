import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	createHashRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom'
import Bio from './components/pages/Bio.jsx'
import Certifications from './components/pages/Certifications.jsx'
import Education from './components/pages/Education.jsx'
import Experiences from './components/pages/Experiences.jsx'
import ForeignLanguages from './components/pages/ForeignLanguages.jsx'
import Home from './components/pages/Home.jsx'
import Projects from './components/pages/Projects.jsx'
import Skills from './components/pages/Skills.jsx'
import ErrorPage from './components/routes/ErrorPage.jsx'
import Root from './components/routes/Root.jsx'
import './index.css'

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
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
				path: 'foreign-languages',
				element: <ForeignLanguages />,
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

document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
