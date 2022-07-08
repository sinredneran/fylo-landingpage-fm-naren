import { useState } from "react";

const Email = ({ direction, buttonTxt, placeholderTxt }) => {
    const [err, setErr] = useState(false);
    let isColumn = false;
    if (direction === 'column') {
        isColumn = true;
    }

    const handleEmail = (e) => {
        e.preventDefault(false);
    }

    const handleEmailInput = (e) => {
        let value = e.target.value;
        setErr(ValidateEmail(value));
    }

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return false;
        }
        return true;
    }

    return (
        <>
            <style jsx>
                {
                    `
                        .CTA-container{
                            position: relative;
                            display: flex;
                            flex-direction: ${direction};
                            margin-right: ${isColumn && '2rem'};
                        }
                        .inputStyle{
                            padding: 0 0 0 1rem;
                            padding: ${isColumn && '1rem 2rem'};
                            margin-right: 1rem;
                            margin-bottom: ${isColumn && '2rem'};
                            width: ${isColumn ? '100%' : '55%'};
                            border: 1px solid ${err && 'red'};
                        }
                        .buttonStyle{
                            font-family: 'Raleway', sans-serif;
                            font-weight: 700;
                            border: none;
                            background-color: hsl(224, 93%, 58%);
                            padding: ${isColumn ? '1rem' : '0.5rem 3rem' };
                            border-radius: 2.5px;
                            color: white;
                            ${isColumn && 'width: 40%'};
                        }
                        .buttonStyle:hover, .buttonStyle:focus{
                            cursor: pointer;
                            background-color: hsla(224, 93%, 58%, 0.5);
                        }
                        .err {
                            font-weight: 700;
                            position: absolute;
                            bottom: ${isColumn ? '4rem' : '-2rem'};
                            color: ${isColumn ? 'white' : 'red'};
                        }
                        @media (max-width: 1024px) {
                            .CTA-container{
                                justify-content: center;
                            }
                            .err{
                                text-align: center;
                            }
                            .buttonStyle{
                               ${isColumn && 'width: 100%;'}; 
                            }
                        }
                        @media (max-width: 600px){
                            .CTA-container{
                                flex-direction: column;
                                margin: 0;
                            }
                            .inputStyle{
                                width: 100%;
                                padding: 1rem;
                                margin-bottom: 1rem;
                            }
                            .buttonStyle{
                                padding: 1rem;
                            }
                        }
                    `
                }
            </style>
            <form className="CTA-container" onSubmit={handleEmail} >
                <input className="inputStyle" type="email" name="email" id="email" placeholder={placeholderTxt} onChange={handleEmailInput} />
                <button className="buttonStyle" type="submit" >{buttonTxt}</button>
                {err && <span className="err">Please check your email</span>}
            </form>
        </>
    );
}

Email.defaultProps = {
    direction: 'row',
}

export default Email;