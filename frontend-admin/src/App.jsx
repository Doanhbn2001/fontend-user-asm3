import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './pages/auth/signIn';
import Home from './pages/home/home';

function App() {
  const [isAdmin, setAdmin] = useState(localStorage.getItem('userId') || false);
  return (
    <div className="App">
      <BrowserRouter>
        {isAdmin ? (
          <Home setAdmin={setAdmin} />
        ) : (
          <SignIn setAdmin={setAdmin} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
