import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import background from './bg.jpg'

function App() {
  const myStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  }
  return (
    <div style={myStyle}>
      <RouterProvider router={routes}></RouterProvider>
    </div >
  );
}

export default App;
