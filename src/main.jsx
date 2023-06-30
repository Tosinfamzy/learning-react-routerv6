import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
// import VanDetail from './pages/VanDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/vans' element={<Vans />} />
			{/* <Route path='/vans/:id' element={<VanDetail />} /> */}
		</Routes>
	</BrowserRouter>
);
