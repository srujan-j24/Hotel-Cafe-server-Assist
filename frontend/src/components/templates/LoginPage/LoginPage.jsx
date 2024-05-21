/* eslint-disable react/prop-types */
import LoginForm from '@/components/templates/LoginPage/LoginForm'
import backgroundSvg from '@/assets/background.svg';

const LoginPage = ({children}) => {
    return (
        <>
            <main className='h-svh w-screen flex flex-col justify-center items-center bg-background' style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
                {children}
                <div className='transition-all grow flex items-center justify-center'>
                    <LoginForm name='roll corner'></LoginForm>
                </div>
            </main>
        </>        
    );
};

export default LoginPage;