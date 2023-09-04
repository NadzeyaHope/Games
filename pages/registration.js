import Input from '../components/form/Input';
import InputWithLabel from '../components/form/InputWithLabel'
import Button from "@/components/form/Button";
export default () => {
    return (
        <div>
            <InputWithLabel label={'Email'}/>
            <InputWithLabel label={'Full Name'}/>
            <InputWithLabel label={'Password'}/>
            <InputWithLabel label={'Confirm password'}/>
            <Button onClick={()=>{}} children={'Create'} fullWidth={false} />
        </div>
    )
}