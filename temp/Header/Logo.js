import Image from "next/image";
import logo from '@/temp/icons/Group.png'
import logotype from "@/temp/icons/Group.png";
import PropTypes from "prop-types";

const Logo = (props) => {
    const {logotype} = props;
    return (
        <>
        <Image src={logotype} />
        </>
    )
}
Logo.PropTypes = {
    logotype : PropTypes.node.isRequired
}

export default Logo;