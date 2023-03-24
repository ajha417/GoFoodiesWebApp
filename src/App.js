// import logo from './logo.svg';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer,HomeContainer, OrderDetails } from './components';
import { Routes, Route } from 'react-router-dom';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { actionType } from './context/reducer';
function App() {
  const [{},dispatch] = useStateValue();
  const fetchData = async()=>{
    await getAllFoodItems().then(data=>{
      // console.log(data)
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      })
    });
  };
  useEffect(()=>{
    fetchData();  
  },[])
  return (
    <AnimatePresence mode='wait'>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className='mt-14 md:mt-20 md:p-8 p-4 w-full'>
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/orderDetails" element={<OrderDetails />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
