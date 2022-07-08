const BoxIcon = ({ name }) => {
    return (
        <>
            <style jsx>
                {
                    `
                    i{
                        border: 2px solid white;
                        border-radius: 50%;
                        padding: 0.5rem;
                        color: white;
                    }
                    .bx:hover, .bx:focus{
                        border: 2px solid hsl(224, 93%, 75%);
                        color: hsl(224, 93%, 75%);
                    }
                    `
                }
            </style>
            <li><a href="/">
                <i className={`bx ${name} bx-sm`} ></i>
            </a></li>
        </>
    );
}

export default BoxIcon;