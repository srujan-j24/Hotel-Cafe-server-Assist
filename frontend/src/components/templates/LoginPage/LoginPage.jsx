import LoginForm from '@/components/templates/LoginPage/LoginForm'
import backgroundSvg from '@/assets/background.svg';

const LoginPage = () => {
    return (
        <>
            <div className='h-svh w-full flex justify-center items-center bg-background' style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
                <div className='sm:w-96 mx-8 w-full min-w-80 max-w-96'>
                    <LoginForm name='Rolls Corner'></LoginForm>
                </div>
            </div>
        </>        
    );
};

export default LoginPage;