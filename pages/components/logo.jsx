import Link from 'next/link';
import Icon from './svgComp';
const Logo = ({ fillDiff }) => {
    return (
        <>
            <style jsx>
                {
                    `   
                .logo-container{
                    position: relative;
                    width: 166px;
                    height: 49px;
                }

                @media (max-width: 600px){
                    .logo-container{
                        left: -1rem; 
                    }
                }
                `
                }
            </style>
            <Link href='/'>
                <a className='logo-container' href="/">
                    <Icon fillDiff={fillDiff} />
                </a>
            </Link>
        </>
    );
}

export default Logo;