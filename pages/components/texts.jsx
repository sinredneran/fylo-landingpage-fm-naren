const Text = ({h2, p, smh2}) => {
    return ( 
        <>
        <style jsx>
            {
                `
                    .h2Style{
                        font-size: 2rem;
                        color: hsl(243, 87%, 12%);
                        font-family: 'Raleway', sans-serif;
                        font-weight: 700;
                        margin-bottom: 1rem;
                    }
                    .pStyle{
                        color: hsl(243, 87%, 12%);
                        margin-bottom: 1.5rem;
                    }
                    @media (max-width: 600px){
                        .h2Style{
                            font-size: ${smh2 ? '1rem' : '1.5rem'};
                            text-align: center;
                        }
                    }
                `
            }
        </style>
            <h2 className="h2Style">{h2}</h2>
            <p className="pStyle">{p}</p>
        </>
     );
}
 
export default Text;