import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import background from './bg.jpg'

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div style={myStyle}>
      <RouterProvider router={routes}></RouterProvider>
    </div >
  );
}

export default App;
