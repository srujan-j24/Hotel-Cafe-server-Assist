import { useState } from 'react';
import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Input } from '../../ui/input'
function LoginForm({name}) {
	let [desc, setDesc] = useState('Please enter you credentials');
	
	return (
		<>
			<Card className=" flex flex-col sm:p-4 p-0 text-xl sm:text-2xl shadow-2xl transition-all">
				<CardHeader>
					<CardTitle className='text-center leading-8'>
						Welcome to <span>{name}</span>
						<br/>
						Server Assist
					</CardTitle>
				
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<CardDescription>
						{desc}
					</CardDescription>
					<Input type='text' placeholder='Username' className='text-lg'></Input>
					<Input type='password' placeholder='Password' className='text-lg'></Input>
				</CardContent>
				<CardFooter className='flex flex-col gap-2'>
					<Button className='w-full text-lg'>Login</Button>
					<Button variant='link' className='text-primary-foreground'>Forgot Password ?</Button>
				</CardFooter>
				

			</Card>
		</>
            
	);
}

export default LoginForm;