import Text from "./texts";
import Image from "next/image";
import ImageComponent from "./imageComp";
import LinkComp from "./linkComp";
import Card from "./card";

const Main_2 = () => {
    return (
        <>
            <style jsx>
                {
                    `
                    section{
                        position: relative;
                    }
                    .section-main{
                        position: relative;
                        display:flex;
                        width: 100%;
                        background-color: hsl(240, 75%, 98%);
                    }
                    .head-image{
                        position: relative;
                        width: 100%;
                        height: 114px;
                        margin-top: 6rem;
                    }
                    .txts{
                        color:hsl(243, 87%, 12%);
                    }
                    .half-1{
                        width: 50%;
                        padding: 6rem;
                    }
                    .extra-txt{
                        margin-top: -0.5rem;
                    }
                    .image-comp{
                        background: green;
                    }
                    @media (max-width: 1024px){
                        .section-main{
                            flex-direction: column-reverse;
                        }
                        .half-1{
                            width: 100%;
                        }
                        .head-image{
                            margin-top: 0rem;
                        }
                        .txts{
                            text-align: center;
                        }
                    }
                    @media (max-width: 600px){
                        .half-1{
                            width: 100%;
                            padding: 1rem;
                            line-height: 1.3;
                        }
                        .txts{
                            text-align: left;
                        }
                    }
                `
                }
            </style>
            <section>
                <figure className="head-image">
                    <Image src="/images/bg-curve-desktop.svg" layout="fill" alt="background-image" />
                </figure>
                <div className="section-main">
                    <div className="half-1">
                        <div className="txts">
                            <Text
                                smh2={true}
                                h2={'  Stay productive, wherever you are'}
                                p={'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.'}
                            />
                            <p className="extra-txt"> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
                            <LinkComp />
                        </div>
                        <Card />
                    </div>
                    <ImageComponent image_src={'/images/illustration-2.svg'} image_alt={'illustration_2'} />
                </div>
            </section>
        </>
    );
}

export default Main_2;