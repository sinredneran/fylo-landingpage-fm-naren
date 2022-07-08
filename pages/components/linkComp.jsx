import Image from "next/image";
const LinkComp = () => {
    return (
        <>
            <style jsx>
                {
                    `
                    .container{
                        position: relative;
                        align-items: center;
                        display: flex;
                        margin-top:1rem;
                    }
                    .container a{
                        color: hsl(170, 45%, 43%);
                    }
                    .container a:hover, .container a:focus{
                        color: hsl(170, 45%, 50%);
                    }
                    .image-wrapper{
                        position: relative;
                        width: 15px;
                        height: 15px;
                        margin-left: 0.25rem;
                    }
                    @media (max-width: 1024px){
                       .container{
                           justify-content: center;
                       }
                    }
                `
                }
            </style>
            <div className="container">
                <a href="/">See how Fylo works</a>
                <div className="image-wrapper">
                    <Image src={'/images/icon-arrow.svg'} alt='arrow-icon' layout="fill" />
                </div>
            </div>
        </>
    );
}

export default LinkComp;