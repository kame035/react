import './App.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import NotFound from "./pages/404/404.jsx";
import Search from "./components/Search/Search.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemsPage from "./pages/ItemsPage/ItemsPage.jsx"; 
import Book from "./pages/Book/Book.jsx"; 
import Discussion from "./pages/Discussions/Discussions.jsx"; 
import DiscussionPage from "./pages/DiscussionPage/DiscussionPage.jsx"; // Импорт страницы обсуждения

export default function App() {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <div className="container">
                    <Search />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/items' element={<ItemsPage />} />
                        <Route path='/discussion' element={<Discussion />} />
                        <Route path='/book/:id' element={<Book />} /> 
                        <Route path='/discussion/:id/:questionIndex' element={<DiscussionPage />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                    <Footer/>
                </div>
                
               
            </Router>
            
        </div>
    );
}

