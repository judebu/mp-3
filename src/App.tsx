import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './mains/Home';
import Education from './mains/Education';
import Experiences from './mains/Experiences';
import Achievements from './mains/Achievements';
import Projects from './mains/Projects';
import References from './mains/References';
import Credits from './mains/Credits';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> },
      { path: 'education', element: <Education/> },
      { path: 'experiences', element: <Experiences/> },
      { path: 'achievements', element: <Achievements/> },
      { path: 'projects', element: <Projects/> },
      { path: 'references', element: <References/> },
      { path: 'credits', element: <Credits/> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;