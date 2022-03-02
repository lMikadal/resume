import Img1 from '../img/1.png';
import Img2 from '../img/2.png';
import Img3 from '../img/3.png';
import Img4 from '../img/4.png';
import Img5 from '../img/5.png';
import Img6 from '../img/6.png';
import Img7 from '../img/7.png';
import Img8 from '../img/8.png';
import Img9 from '../img/9.png';
import Img10 from '../img/10.png';
import Img11 from '../img/11.png';
import Img12 from '../img/12.png';

function ContentHandwork() {
    return (
        <div className='grid justify-items-center p-3'>
            <h1 className='p-3 text-3xl'>ผลงาน</h1>

            <h4 className="text-lg pb-2">Show Item (React-Node.js)</h4>
            <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="8"
                    aria-label="Slide 9"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="9"
                    aria-label="Slide 10"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="10"
                    aria-label="Slide 11"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="11"
                    aria-label="Slide 12"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={Img1}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img2}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img3}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img4}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img5}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img6}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img7}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img8}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img9}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img10}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img11}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Img12}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default ContentHandwork;