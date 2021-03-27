import './App.css';
import { createContext, useState } from 'react';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Content from './Component/Content/Content';

export const CategoryContext = createContext();

function App() {
  const [category,setCategory] = useState(0);

  return (
    <CategoryContext.Provider value={[category,setCategory]}>
        <Header></Header>
        <Home></Home>
        <Content></Content>
    </CategoryContext.Provider>
  );    
}

export default App;
