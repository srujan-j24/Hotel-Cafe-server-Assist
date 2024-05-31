/* eslint-disable react/prop-types */
import LoginForm from '@/components/templates/LoginPage/LoginForm'

const LoginPage = () => {
    return (
        <>
        <main className='flex justify-center items-center h-dvh ' >
            <div className='transition-all grow flex items-center justify-center mx-10'>
                <LoginForm name='roll corner'></LoginForm>
            </div>
        </main>
        </>        
    );
};

export default LoginPage;