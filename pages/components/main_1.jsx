import Email from "./email";
import ImageComponent from "./imageComp";
import Text from "./texts";

const Main_1 = () => {
    return (
        <>
            <style jsx>{
                `
                section{
                    position: relative;
                    padding: 5rem 0 10rem 0;
                }
                .section-main{
                    position: relative;
                    display: flex;
                    width: 100%;
                }
                .txts{
                    width: 50%;
                    padding:6rem;
                }
                @media (max-width: 1024px){
                    section{
                        padding: 5rem 0;
                    }
                    .section-main{
                        flex-direction: column-reverse;   
                    }
                    .txts{
                        text-align: center;
                        width: 100%;
                    }
                }
                @media (max-width: 600px){
                    .txts{
                        padding: 1rem;
                        line-height: 1.3;
                    }
                }

                `
            }
            </style>
            <section>
                <div className="section-main">
                    <div className="txts">
                        <Text
                            smh2={false}
                            h2={'All your files in one secure location, accessible anywhere.'}
                            p={'Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.'}
                        />
                        <Email placeholderTxt={'Enter your email...'} buttonTxt={'Get Started'} />
                    </div>
                    <ImageComponent image_src={'/images/illustration-1.svg'} image_alt={'illustration_1'} />
                </div>
            </section>
        </>
    );
}

export default Main_1;