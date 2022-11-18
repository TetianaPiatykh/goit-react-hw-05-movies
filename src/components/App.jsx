import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "pages/Home/Home";

const App = () => {
  return (
    <Routes
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Route path="/" element={<Header />} />
      <Route path="" element={<Home />} />
      
    </Routes>
  );
};
 
export default App;
