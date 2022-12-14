import React, { Dispatch, SetStateAction, useState } from 'react'

interface RegisterProps {
    setLoginOrRegister: Dispatch<SetStateAction<string>>
}

const Register = ({setLoginOrRegister}: RegisterProps) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e: any) => {
		e.preventDefault()
		console.warn('login:', email, password)
	}

	return (
		<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img
						className="mx-auto h-24 w-auto"
						src="\Chatr.png"
						alt="Your Company"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
						<a onClick={(e) => {
							e.preventDefault()
							setLoginOrRegister('login')
						}} className="font-medium text-red-600 hover:text-red-300 cursor-pointer" >
                login
						</a>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleLogin}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="email-address" className="sr-only">
                           Email address
							</label>
							<input
								onChange={(e) => setEmail(e.target.value.trim())}
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-600 focus:outline-none focus:ring-red-300 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
                          Password
							</label>
							<input
								onChange={(e) => setPassword(e.target.value.trim())}
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-300 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-300"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-red-500 hover:text-red-300">
                  Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  
							</span>
                Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	)
} 

export default Register