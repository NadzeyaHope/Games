import Button from "@/components/form/Button";
import InputWithLabel from '@/components/form/InputWithLabel';

const LoginPage = () => {
    return (
        <div>
            <InputWithLabel label={'Email'}/>
            <InputWithLabel label={'Password'}/>
            <Button onClick={()=>{}}>Login</Button>
        </div>
    )
}

export default LoginPage;