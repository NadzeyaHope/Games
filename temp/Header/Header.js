import Item from './Item';
import classes from './Header.module.css';
import Search from "@/temp/Header/Search";
import iconSignIn from '@/temp/icons/user.png';
import iconWishlist from '@/temp/icons/\uD83D\uDD39Icon Color.png';
import Menu from "@/temp/Header/Menu";
import Logo from "@/temp/Header/Logo";
import logotype from '@/temp/icons/Group.png'
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