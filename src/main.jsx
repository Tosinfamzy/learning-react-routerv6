import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';

import '../server';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/vans' element={<Vans />} />
				<Route path='/vans/:id' element={<VanDetail />} />
				<Route path='host' element={<HostLayout />}>
					<Route index element={<Dashboard />} />
					<Route path='income' element={<Income />} />
					<Route path='reviews' element={<Reviews />} />
					<Route path='vans' element={<HostVans />} />
					<Route path='vans/:id' element={<HostVanDetail />} />
				</Route>
			</Route>
		</Routes>
	</BrowserRouter>
);
