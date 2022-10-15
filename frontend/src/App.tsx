import React from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
	const [loginOrRegister, setLoginOrRegister] = React.useState('login')
	return (
		<>
			{
				loginOrRegister === 'login' ?  <Login setLoginOrRegister={setLoginOrRegister}/>  : <Register setLoginOrRegister={setLoginOrRegister}/>
			}
		</>
	)	
}


export default App

