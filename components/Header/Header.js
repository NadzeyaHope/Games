import Item from './Item';
import classes from './Header.module.css';
import Search from "@/components/Header/Search";
import iconSignIn from 'components/icons/user.png';
import iconWishlist from 'components/icons/🔹Icon Color.png';
import Menu from "@/components/Header/Menu";
import Logo from "@/components/Header/Logo";
import logotype from 'components/icons/Group.png'
const Header = () => {
    return (
        <div className={classes.header}>
            <Menu/>
            <Logo logotype={logotype}/>
            <Search/>
            <Item icon={iconSignIn} label={'Sign in'} />
            <Item icon={iconWishlist} label={'Wishlist'} />
        </div>
    )
}
export default Header;