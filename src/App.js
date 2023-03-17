// import logo from './logo.svg';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer } from './components';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <AnimatePresence mode='wait'>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className='mt-14 md:mt-20 md:p-8 p-4 w-full'>
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
