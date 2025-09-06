import { Link, useMatch, useLocation } from 'react-router-dom'; 
import { useAuthStore } from '../stores/authStore';
import { greyColor, theme } from './Colors';

interface IItem extends React.LiHTMLAttributes<HTMLElement> {
    color?: string; 
    children: React.ReactNode; 
}

function Item({ color = theme.white.lighter, children, ...props}: IItem) {
    return (
        <li
            {...props}
            className={`text-[${color}]`}
        >
            {children}
        </li>
    )
}

function LinkWrapper({children, to, ...props}: {children: React.ReactNode, to: string}) {
    return (
        <Link 
            {...props}
            to={to}
            className={`
                no-underline transition-colors duration-300 ease-in-out hover:[color:${theme.black.lighter}] 
            `}
        >
            {children}
        </Link>
    )
}

function BoldWrapper({children, ...props}: {children: React.ReactNode}) {
    return (
        <span
            {...props}
            className='font-bold'
        >
            {children}
        </span>
    )
}


function Header() {
    const homeMatch = useMatch('/'); 
    const marketMatch = useMatch('/Market')
    const mineMatch = useMatch('/Mine')
    const reviewsMatch = useMatch('/Review')
    const comuMatch = useMatch('/Community')

    // login and sign up. 
    const loginMatch = useMatch('/Login')
    const signMatch = useMatch('/Sign')
    
    const { isLogin, setIsLogin } = useAuthStore(); 

    const execLogout = () => {
        setIsLogin(false); 
    }

    return (
        // content -> padding -> border -> margin. 
        <div className={`flex w-full h-[5vh] m-0 p-0 justify-between items-center bg-[${greyColor}] px-[15vw]`}>
            <ul className={`flex gap-x-[30px]`}>
                <Item><LinkWrapper to="/">{homeMatch ? <BoldWrapper>Home</BoldWrapper> : "Home"}</LinkWrapper></Item>
                <Item><LinkWrapper to="/Market">{marketMatch ? <BoldWrapper>Market</BoldWrapper> : "Market"}</LinkWrapper></Item>
                <Item><LinkWrapper to="/Mine">{mineMatch ? <BoldWrapper>Mine</BoldWrapper> : "Mine"}</LinkWrapper></Item>
                <Item><LinkWrapper to="/Review">{reviewsMatch ? <BoldWrapper>Review</BoldWrapper> : "Review"}</LinkWrapper></Item>
                <Item><LinkWrapper to="/Community">{comuMatch ? <BoldWrapper>Community</BoldWrapper> : "Community"}</LinkWrapper></Item>
            </ul>

            <ul className='flex'>
                { isLogin ? (
                    <Item onClick={execLogout}><LinkWrapper to="/">Logout</LinkWrapper></Item>
                ) : (
                    <Item><LinkWrapper to="/Login">{loginMatch ? <BoldWrapper>Login</BoldWrapper> : "Login"}</LinkWrapper></Item>
                )}
                <Item><LinkWrapper to="/Sign">{signMatch ? <BoldWrapper>Sign</BoldWrapper> : "Sign" }</LinkWrapper></Item>
            </ul>
        </div>
    )
    
}

export default Header;