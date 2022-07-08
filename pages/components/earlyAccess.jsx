import Email from "./email";

const EarlyAccess = () => {
    return (
        <>
            <style jsx>
                {
                    `
                    .container{
                        background-color: hsl(238, 22%, 44%);
                        display: flex;
                        padding: 7.5rem 5rem;
                    }
                    .txt-container{
                        color: white;
                        padding: 0 8rem 0 0;
                        width: 50%;
                    }
                    .txt-container h3{
                        margin-bottom: 1rem;
                        font-size: 2rem;
                    }
                    .email-wrapper{
                        width: 50%;
                    }
                    @media (max-width:1024px){
                        .txt-container{
                            width: 60%;
                        }
                    }
                    @media (max-width:768px){
                        .container{
                            flex-direction: column;
                            padding: 5rem;
                        }
                        .container>*{
                            text-align: center; 
                            width: 100%;
                        }
                        .txt-container{
                            padding: 0;
                            margin-bottom: 3rem;
                        }
                        .email-wrapper{
                            padding: 0 4rem;
                        }
                    }
                    @media (max-width:600px){
                        .container{
                            padding: 4rem 1.75rem;
                        }
                        .txt-container h3{
                            font-size: 1.25rem;
                        }
                        .email-wrapper{
                            padding: 0;
                            margin: auto;
                        }
                    }
                `
                }
            </style>
            <section className="container">
                <div className="txt-container">
                    <h3>Get early access today</h3>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <div className="email-wrapper">
                    <Email direction='column' placeholderTxt={'email@example.com'} buttonTxt={'Get Started For Free'}/>
                </div>
            </section>
        </>
    );
}

export default EarlyAccess;