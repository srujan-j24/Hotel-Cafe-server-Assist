import LoginForm from '@/components/templates/LoginPage/LoginForm'
import backgroundSvg from '@/assets/background.svg';

const LoginPage = () => {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center bg-background' style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
                <LoginForm name='Rolls Corner'></LoginForm>
            </div>
        </>        
    );
};

export default LoginPage;