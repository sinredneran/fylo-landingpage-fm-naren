import Logo from './logo';

const Nav = () => {
    return (
        <nav>
            <style jsx>
                {
                    `
                        nav{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            padding: 2rem 5rem;
                        }
                        nav ul{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: 0;
                            width: 20%;
                            font-family: 'Raleway', sans-serif;
                            font-weight: 400;
                        }  
                        nav ul li a{
                            color: hsl(243, 87%, 12%);
                            text-decoration: none;
                        }
                        nav ul li a:hover, nav ul li a:focus{
                            color: hsl(243, 87%, 5%);
                        }
                        @media (max-width: 1024px) {
                            nav {
                                padding: 2rem;
                            }
                            nav ul{
                                width: 40%;  
                            }
                          }
                        @media (max-width: 600px){
                            nav{
                                padding: 1rem;
                            }
                            nav ul{
                                width: 50%; 
                            }
                        }
                    `
                }
            </style>
            <Logo fillDiff={false} />
            <ul role={'list'}>
                <li><a href="/">Features</a></li>
                <li><a href="/">Team</a></li>
                <li><a href="/">Sign In</a></li>
            </ul>
        </nav>
    );
}

export default Nav;