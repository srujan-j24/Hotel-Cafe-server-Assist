import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Input } from '../../ui/input'
function LoginForm({name}) {
	return (
		<>
			<Card className="w-96 flex flex-col gap-1 p-4 text-2xl shadow-2xl">
				<CardHeader>
					<CardTitle className='text-center leading-8'>
						Welcome to <span>{name}</span>
						<br/>
						Server Assist
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<Input type='text' placeholder='Username' className='text-lg'></Input>
					<Input type='password' placeholder='Password' className='text-lg'></Input>
				</CardContent>
				<CardFooter className='flex flex-col gap-2'>
					<Button className='w-full text-lg'>Login</Button>
					<Button variant='link' className=''>Forgot Password ?</Button>
				</CardFooter>
				

			</Card>
		</>
            
	);
}

export default LoginForm;