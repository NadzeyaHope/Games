import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Header from "@/components/Header/Header";

const Index = () => {
    return (
        <div style={{padding: 200}}>
            <Button onClick={() => {}} fullWidth>Hello</Button>
            <Input nameLabel={'Last Name'} fullWidth/>
            <Header/>
        </div>
    )
};

export default Index;