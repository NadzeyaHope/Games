import Input from './../../components/Input';
import Inputwithlabel from './../../components/Inputwithlabel'
import Button from "@/components/Button";
export default () => {
    return (
        <div className={classes.root}>
            <Inputwithlabel label={'Email'}/>
            <Inputwithlabel label={'Password'}/>
            <Button onClick={()=>{}} children={'Login'} fullWidth={false} />
        </div>
    )
}