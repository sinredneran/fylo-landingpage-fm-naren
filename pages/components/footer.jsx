import Image from "next/image";
import Link from "next/link";
import BoxIcon from "./boxIcon";
import Logo from "./logo";

const Footer = () => {
    
    return (
        <>
            <style jsx>
                {
                    `
                        footer{
                            position: relative;
                            padding:5rem;
                            background-color: hsl(243, 87%, 12%);
                            color: white;
                        }
                        footer a{
                            color: white;
                            text-decoration: none;
                        }
                        .contact{
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                        }
                        .f-nav{
                            display: flex;
                            margin-top: 2rem;
                            justify-content: space-between;
                        }
                        .f-nav ul {
                            list-style: none;
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                        }
                        .f-nav ul li a:hover, .f-nav ul li a:focus{
                            color: hsl(224, 93%, 75%);
                        }
                        .f-nav .socials{
                            flex-direction: row;
                        }
                        .attribution{
                            position: absolute;
                            bottom: 0;
                        }
                        .attribution a:hover, .attribution a:focus{
                            color: cyan;
                        }
                        @media (max-width: 768px){
                            .f-nav{
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                gap: 2rem;
                                grid-template-areas:
                                "cc cc cc"
                                "aUc aUc tc"
                                "ss ss ss";
                            }
                            .contact-container{
                                grid-area: cc;
                            }
                            .aboutUs-container{
                                grid-area: aUc;
                            }
                            .terms-container{
                                grid-area: tc;
                            }
                            .socials{
                                grid-area: ss;
                            }
                            .f-nav ul {
                                gap: 0.5rem;
                            }
                        }
                        @media (max-width: 600px){
                            footer{
                                padding: 5rem 2rem;
                            }
                            .f-nav{
                                grid-template-columns: 1fr;
                                grid-template-areas:
                                "cc"
                                "aUc"
                                "tc"
                                "ss";
                            }
                            .socials{
                                margin: auto;
                            }
                            .attribution{
                                text-align: center;
                            }
                        }
                    `
                }
            </style>
            <footer className='footer'>
                <Logo fillDiff={true}/>
                <nav className="f-nav">
                    <ul className="contact-container">
                        <li className="phone contact">
                            <Image src="/images/icon-phone.svg" alt="phone-icon" width='18' height='18' layout="intrinsic" />
                            <p className="contact-txt">Phone: <Link href="/"><a>+1-543-123-4567</a></Link></p>
                        </li>
                        <li className="email contact">
                            <Image src="/images/icon-email.svg" alt="email-icon" width='22' height='18' layout="intrinsic" />
                            <Link className="contact-txt" href="/"><a>example@fylo.com</a></Link>
                        </li>
                    </ul>
                    <ul role={'list'} className="aboutUs-container">
                        <li><Link href="/"><a>About Us</a></Link></li>
                        <li><Link href="/"><a>jobs</a></Link></li>
                        <li><Link href="/"><a>Press</a></Link></li>
                        <li><Link href="/"><a>Blog</a></Link></li>
                    </ul>
                    <ul className="terms-container">
                        <li><Link href="/"><a>Contact Us</a></Link></li>
                        <li><Link href="/"><a>Terms</a></Link></li>
                        <li><Link href="/"><a>Privacy</a></Link></li>
                    </ul>
                    <ul className="socials">
                        <BoxIcon name={'bxl-facebook'} />
                        <BoxIcon name={'bxl-twitter'} />
                        <BoxIcon name={'bxl-instagram'} />
                    </ul>
                </nav>
                <p className="attribution">
                    Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank"><a>Frontend Mentor</a></Link>.
                    Coded by <Link href="https://www.frontendmentor.io/profile/sinredneran"><a>Narender Singh</a></Link>.
                </p>
            </footer>
        </>
    );
}

export default Footer;