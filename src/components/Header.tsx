import { Link, useMatch, useLocation } from 'react-router-dom'; 
import { useAuthStore } from '../stores/authStore';
import { greyColor } from './Colors';

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

    return (
        // content -> padding -> border -> margin. 
        <div className={`flex w-full h-[5vh] m-0 p-0`}>
            {/* TODO */}
        </div>
    )
    
}

export default Header;