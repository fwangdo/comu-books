import { Link, useMatch, useLocation } from 'react-router-dom'; 

function Header() {
    const homeMatch = useMatch('/'); 
    const marketMatch = useMatch('/Market')
    const mineMatch = useMatch('/Mine')
    const reviewsMatch = useMatch('/Review')
    const comuMatch = useMatch('/Community')
    const loginMatch = useMatch('/Login')
    const signMatch = useMatch('/Sign')
    
}

export default Header;