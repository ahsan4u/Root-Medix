import {services, maxsaketDoctors} from '../data/cardsData';
import React       from "react";
import UserInfo    from "../components/UserInfo";
import ScrollDiv   from '../components/ScrollDiv';
import DoctorCard  from '../components/DoctorCard';
import ServiceCard from '../components/ServiceCard';

function TreatmentPage() {
    const maxDoctors = Object.keys(maxsaketDoctors).map(key=>maxsaketDoctors[key]);

    return(
        <>
            <div className="lg:flex justify-between px-2 lg:px-7 pt-3 py-12 bg-[#fffbff]">
                <div className="lg:w-[76%] lg:mr-4">
                    <div className="shadow-lg border-r border-dotted border-gray-200 rounded-2xl overflow-hidden relative flex justify-between">
                        <div className="w-[100%] aspect-[16/6.5] text-white font-bold relative bg-[url(/img/treatment/treatmentTemp.png)] bg-[length:100%_100%] z-10">
                            <div className="w-[58%] text-white text-center font-bold h-full flex flex-col justify-center">
                                <h1 className="lg:text-5xl text-xl">Heart Transplant</h1>
                                <p className="lg:text-5xl lg:mt-5 mt-1 text-xl">Cost In India</p>
                            </div>
                        </div>
                        <img src="./img/asd2.png" alt="Image" className="absolute right-0 aspect-[8/7.4] h-full"/>
                    </div>

                    <div className="shadow-lg rounded-xl mt-5 lg:mt-10 p-1 lg:p-3">
                        <h1 className="px-3 font-bold text-2xl mb-1">Heading</h1>
                        <p className="px-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quod porro iste assumenda at, repudiandae eos veritatis culpa eaque earum, aliquam optio unde ex, debitis adipisci ipsum inventore laudantium accusamus cumque! Ex ratione similique libero autem quas repellat perferendis maiores, exercitationem minima tenetur in necessitatibus architecto est a odit, sapiente omnis sed impedit asperiores dolorem rem. Quae debitis nobis at ullam architecto animi similique esse voluptatibus facere hic, fuga cumque, aliquam excepturi ex dicta, placeat iste? Omnis minima, provident, odit fugit officiis excepturi nisi nam iste, illo quae enim molestiae magni nihil et impedit alias unde laboriosam! Saepe quos omnis facere, similique doloremque vitae magnam autem a, beatae blanditiis dolor deserunt recusandae, eligendi velit non veniam sint iure soluta earum. Similique iusto perferendis provident numquam eius, dolorem quod perspiciatis assumenda aliquam commodi quidem vitae, iste facere. Aut illo ut dignissimos molestiae in obcaecati? Quod maiores facere assumenda soluta numquam ad quis fugit rerum, quasi consequatur non sapiente, a quisquam eos vel! Blanditiis rerum error maiores aperiam architecto quam eaque officiis est facere quisquam consectetur iure dolores ea, libero molestias consequuntur aspernatur ab nemo corporis repellat quod? Quas nihil ad sed blanditiis accusantium, porro veritatis velit necessitatibus quis, quisquam minus ducimus?</p>

                        <h1 className="px-3 font-bold text-2xl mb-1">Heading</h1>
                        <p className="px-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quod porro iste assumenda at, repudiandae eos veritatis culpa eaque earum, aliquam optio unde ex, debitis adipisci ipsum inventore laudantium accusamus cumque! Ex ratione similique libero autem quas repellat perferendis maiores, exercitationem minima tenetur in necessitatibus architecto est a odit, sapiente omnis sed impedit asperiores dolorem rem. Quae debitis nobis at ullam architecto animi similique esse voluptatibus facere hic, fuga cumque, aliquam excepturi ex dicta, placeat iste? Omnis minima, provident, odit fugit officiis excepturi nisi nam iste, illo quae enim molestiae magni nihil et impedit alias unde laboriosam! Saepe quos omnis facere, similique doloremque vitae magnam autem a, beatae blanditiis dolor deserunt recusandae, eligendi velit non veniam sint iure soluta earum. Similique iusto perferendis provident numquam eius, dolorem quod perspiciatis assumenda aliquam commodi quidem vitae, iste facere. Aut illo ut dignissimos molestiae in obcaecati? Quod maiores facere assumenda soluta numquam ad quis fugit rerum, quasi consequatur non sapiente, a quisquam eos vel! Blanditiis rerum error maiores aperiam architecto quam eaque officiis est facere quisquam consectetur iure dolores ea, libero molestias consequuntur aspernatur ab nemo corporis repellat quod? Quas nihil ad sed blanditiis accusantium, porro veritatis velit necessitatibus quis, quisquam minus ducimus?</p>

                        <h1 className="px-3 font-bold text-2xl mb-1">Heading</h1>
                        <p className="px-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quod porro iste assumenda at, repudiandae eos veritatis culpa eaque earum, aliquam optio unde ex, debitis adipisci ipsum inventore laudantium accusamus cumque! Ex ratione similique libero autem quas repellat perferendis maiores, exercitationem minima tenetur in necessitatibus architecto est a odit, sapiente omnis sed impedit asperiores dolorem rem. Quae debitis nobis at ullam architecto animi similique esse voluptatibus facere hic, fuga cumque, aliquam excepturi ex dicta, placeat iste? Omnis minima, provident, odit fugit officiis excepturi nisi nam iste, illo quae enim molestiae magni nihil et impedit alias unde laboriosam! Saepe quos omnis facere, similique doloremque vitae magnam autem a, beatae blanditiis dolor deserunt recusandae, eligendi velit non veniam sint iure soluta earum. Similique iusto perferendis provident numquam eius, dolorem quod perspiciatis assumenda aliquam commodi quidem vitae, iste facere. Aut illo ut dignissimos molestiae in obcaecati? Quod maiores facere assumenda soluta numquam ad quis fugit rerum, quasi consequatur non sapiente, a quisquam eos vel! Blanditiis rerum error maiores aperiam architecto quam eaque officiis est facere quisquam consectetur iure dolores ea, libero molestias consequuntur aspernatur ab nemo corporis repellat quod? Quas nihil ad sed blanditiis accusantium, porro veritatis velit necessitatibus quis, quisquam minus ducimus?</p>
                    </div>
                </div>

                <div className="lg:w-72 mt-14 border-t border-dotted border-gray-200 flex-shrink-0 self-start shadow-lg bg-gradient-to-t from-[#b2b9d4] via-white to bg-white rounded-3xl lg:rounded-xl sticky top-14">
                    <UserInfo/>
                </div>
            </div>
            <ScrollDiv heading={'Top Doctors For Heart Transplant'} cardsData={maxDoctors} Card={DoctorCard} scroll={true}/>
            
            <div className="mt-12">
                <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard}/>
            </div>
        </>
    )
}

export default TreatmentPage;