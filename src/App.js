import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './features/ducks/user';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	const user = useSelector((state) => state.user.user);

	console.log({ user });

	return <div className='App'>{user && <h1> Hello ,{user.name}</h1>}</div>;
}

export default App;
