import Image from "next/image";

const ImageComponent = ({ image_src, image_alt }) => {
    let i2 = false;
    if (image_alt === 'illustration_2') {
        i2 = true;
    }
    return (
        <>
            <style jsx>
                {
                    `
                .image-container{
                    position: relative;
                    width:50%;
                    ${i2 && 'width: 45%;'}
                    display: grid;
                    place-items:center;
                    padding: 0 7.5% 0 0;
                    ${i2 && 'top: 7rem;'}
                    ${i2 && 'left: 5%;'}
                    ${i2 && 'height: 450px;'}
                }
                .image-container .inner-wrapper{
                    position: relative;
                    width:100%;
                    height:100%;
                }
                @media (max-width: 1024px){
                    .image-container{
                        text-align:center;
                        margin: auto;
                        padding: 0 10rem;
                        width: 80%;
                        height: 375px;
                        ${i2 && 'top: 0rem;'}
                        ${i2 && 'left: 0%;'}
                    }
                }
                @media (max-width: 768px){
                    .image-container{
                        height: 300px;
                        width: 90%;
                    }
                }
                @media (max-width: 600px){
                    .image-container{
                        width: 100%;
                        padding: 2rem;
                    }
                }
                `
                }
            </style>
            <figure className="image-container">
                <div className="inner-wrapper">
                    <Image src={image_src} alt={image_alt} layout="fill" priority />
                </div>
            </figure>
        </>
    );
}

export default ImageComponent;