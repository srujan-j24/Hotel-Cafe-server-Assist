/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { dotStream } from 'ldrs';
import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Input } from '../../ui/input'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '@/appwrite/auth';
import {login as authLogin} from '@/store/authSlice'
function LoginForm({name}) {
	dotStream.register()
	let [desc, setDesc] = useState("Please enter your credentials");
	let [loading, setLoading] = useState(false)
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {register, handleSubmit} = useForm();
	const [err, setErr] = useState("")
	const login = async (data) =>{
		setErr("")
		setLoading(true)
		try {
			const session = await authService.login(data);
			if(session){
				const userData = await authService.getCurrentUser();
				if(userData) dispatch(authLogin(userData))
				navigate('/serve')
			}
		} catch (error) {
			setErr(error.message);
		}finally{
			setLoading(false)
		}
	}
	return (
		<>
		<form onSubmit={handleSubmit(login)}>
			<Card className="flex flex-col min-w-80 p-4 text-xl sm:text-2xl shadow-2xl shadow-slate-800 transition-all">
				<CardHeader>
					<CardTitle className='text-center leading-8'>
						Welcome to Server Assist
					</CardTitle>
					<CardDescription className='text-center'>
						{desc}
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<Input type='text' placeholder='Username' className='text-lg' {...register("email", {required: true})}></Input>
					<Input type='password' placeholder='Password' className='text-lg' {...register("password", {required: true})}></Input>
				</CardContent>
				<CardFooter className='flex flex-col gap-2'>
					<Button className='w-full text-lg' type="submit">
						{loading && <l-dot-stream size="10"></l-dot-stream>}
						{!loading && "Login"}	
						
					</Button>
					<Button variant='link' className='text-secondary-foreground'>Forgot Password ?</Button>
				</CardFooter>
			</Card>
		</form>
		</>
            
	);
}

export default LoginForm;