import Image from "next/image";

const Card = () => {
    return (
        <>
            <style jsx>
                {
                    `
                        .card-container{
                            box-shadow: 0 0 15px -5px hsl(238, 22%, 44%);
                            border-radius: 10px;
                            width: 80%;
                            padding: 2rem;
                            margin-top: 2rem;
                            color: hsl(243, 87%, 12%);
                            background-color: white;
                        }
                        .quote-container{
                            position: relative;
                            width: 15px;
                            height: 13px;
                            margin-bottom: 1rem;
                        }
                        .man-container{
                            display: flex;
                            margin-top: 1rem;
                        }
                        .man-container .avatar-container{
                            position: relative;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            overflow: hidden;
                        }
                        .man-txts{
                            margin-left: 0.5rem;
                            line-height: 1.3;
                        }
                        .man-txts .name{
                            font-weight: 700;
                        }
                        .man-txts .designation{
                            font-size: 0.6rem;
                        }
                        @media (max-width: 1024px){
                            .card-container{
                                margin: auto;
                                margin-top: 3rem;
                            }
                        }
                        @media (max-width: 600px){
                           .card-container{
                                width: 100%;
                               margin: 4rem auto;
                               line-height: 1.4;
                               padding: 1rem;
                           }
                        }

                    `
                }
            </style>
            <div className="card-container">
                <div className="quote-container">
                    <Image src='/images/icon-quotes.svg' layout="fill" />
                </div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="man-container">
                    <div className="avatar-container">
                        <Image src='/images/avatar-testimonial.jpg' layout="fill" objectFit="cover" />
                    </div>
                    <div className="man-txts">
                        <p className="name">Kyle Burton</p>
                        <p className="designation">Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </>);
}

export default Card;