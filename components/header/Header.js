import classes from './header.module.css'
const Header = () => {
return (
    <div className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className="header__cart">
                <a href="/cart.html" className="button button--cart">
                    <span>520 ₽</span>
                    <div className="button__delimiter"></div>
                    <span>3</span>
                </a>
            </div>
        </div>
    </div>
)
}