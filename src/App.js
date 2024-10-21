import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './assets/theme';
import Home from './screens/Home';
import Products from './screens/Products';
import Login from './screens/Login';
import Description from './screens/Description';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';

const App = () => {

	useEffect(() => {
		function handleResize() {
			window.location.reload();
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/login' element={<Login />} />
					<Route path='/description/:id' element={<Description />} />
					<Route path='/cart/' element={<Cart />} />
					<Route path='/checkout/' element={<Checkout />} />
				</Routes>
			</Router>
		</ChakraProvider>
	)
}

export default App;
