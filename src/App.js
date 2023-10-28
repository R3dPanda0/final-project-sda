import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';

import Breakout from './Pages/Games/Breakout/Breakout';
import TicTacToe from './Pages/Games/TicTacToe/TicTacToe';
import Snake from './Pages/Games/Snake/Snake';
import SpaceFight from './Pages/Games/Space-Fight/SpaceFight';
import RedPandaMaze from './Pages/Games/RedPanda-Maze/RedPanda-Maze';
import Fighting from './Pages/Games/Fighting/Fighting';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const navLink = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About'
    },
    {
      path: '/contact',
      title: 'Contact'
    }
  ]

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/breakout',
      element: <Breakout />
    },
    {
      path: '/tic-tac-toe',
      element: <TicTacToe />
    },
    {
      path: '/snake',
      element: <Snake />
    },
    {
      path: '/space-fight',
      element: <SpaceFight />
    },
    {
      path: '/redpanda-maze',
      element: <RedPandaMaze />
    },
    {
      path: '/fighting',
      element: <Fighting />
    }
  ])

  return (
    <div className="app">
      <Navbar navLink={navLink} />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;