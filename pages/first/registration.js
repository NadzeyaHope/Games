import Input from './../../components/Input';
import Inputwithlabel from './../../components/Inputwithlabel'
import Button from "@/components/Button";
export default () => {
    return (
        <div>
            <Inputwithlabel label={'Email'}/>
            <Inputwithlabel label={'Full Name'}/>
            <Inputwithlabel label={'Password'}/>
            <Inputwithlabel label={'Confirm password'}/>
            <Button onClick={()=>{}} children={'Create'} fullWidth={false} />
        </div>
    )
}