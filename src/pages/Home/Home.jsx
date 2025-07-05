import React from "react";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Fotter";
import { NavLink, useNavigate } from "react-router-dom";
import { FadeContent } from "../../components/ui/FadeContent";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CardQuestion } from "../../components/CardQuestion";
import { GameCard } from "../../components/GameCard";

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      frontTopText: "아빠",
      frontBottomText: "appa",
      backContent: "AYAH",
    },
    {
      frontTopText: "엄마",
      frontBottomText: "eomma",
      backContent: "IBU",
    },
  ];
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
        <section className="text-center px-6 lg:pt-40 pt-32 pt bg-gradient-to-br from-light-blue via-white to-light-red h-screen font-montserrat">
          <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-20">한</span>
          <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[10%] rotate-[15deg] text-6xl opacity-20">글</span>
          <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-1/2 -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>
          <h1 className="text-5xl font-bold font-opensans">
            Kuasai Bahasa Korea dengan
            <span className="text-kr-blue"> TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>
          <h2 className="text-4xl font-semibold mt-5 font-montserrat">Buka Potensi Korea Anda Sekarang Juga</h2>

          <p className="my-10 lg:mt-10 max-w-4xl mx-auto text-md text-2xl font-opensans">
            Berlatih dengan soal-soal nyata, dapatkan skor instan, dan pahami kesalahan Anda dengan penjelasan rinci. Bergabunglah dengan kami dan capai tujuan bahasa Anda.
          </p>
          <div className="mt-16 z-20">
            <NavLink to={"/tryouts"}>
              <Button children={"Coba Sekarang"} width={"300px"} height={"50px"} />
            </NavLink>
          </div>
        </section>
      </FadeContent>

      {/* Features Section */}

      <section
        className="text-center
       px-6  pt-5 h-screen relative "
      >
        {/* <div style={{ width: '100%', height: '300px', position: 'absolute', bottom:10, left:0, top:-190,}}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div> */}
        <p className="text-2xl font-semibold max-w-4xl mx-auto font-opensans mb-5">
          <span className="text-kr-blue font-montserrat">TE</span>
          <span className="text-kr-red font-montserrat">-KOR </span>
          menyediakan alat dan sumber daya yang Anda butuhkan untuk berhasil dalam perjalanan bahasa Korea Anda.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-around items-center">
          <div>
            <div className="bg-gradient-to-bl from-light-red via-white to-light-blue p-[5px] rounded-lg max-w-72 mb-5 font-inter">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl font-montserrat">Skor Real-time</h3>
                <p className="text-md mt-1 font-opensans">Dapatkan umpan balik instan tentang kinerja Anda dengan skor real-time dan pelacakan kemajuan.</p>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-light-blue via-white to-light-red p-[5px] rounded-lg max-w-72 mb-5 lg:ms-32 md:ms-32">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl font-montserrat">Penjelasan Jawaban</h3>
                <p className="text-md mt-1 font-opensans">Pahami kesalahan Anda dengan penjelasan rinci untuk setiap jawaban, membantu Anda belajar secara efektif.</p>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-light-blue via-white to-light-red p-[5px] rounded-lg max-w-72 mb-5">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl font-montserrat">Soal Latihan</h3>
                <p className="text-md mt-1 font-opensans">Akses perpustakaan besar soal latihan yang mencakup semua tingkat kemahiran bahasa Korea.</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <CardQuestion />
          </div>
        </div>
      </section>

      {/* Simulation Steps */}

      <div className="lg:pt-18 pb-10 text-center p-5 flex-row justify-center bg-gradient-to-bl from-white  via-white to-light-blue">
        <h2 className="text-2xl font-bold font-montserrat mb-14 pt-16">Langkah Langkah Mengikuti Try-out Dan Bermain Game</h2>
        <div className="flex mx-auto bg-white rounded shadow-lg max-w-screen-lg flex-wrap justify-center">
          <div className="w-44 py-5">
            <div className=" border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="M180-180v-600 530-88 158Zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v390h-60v-390H180v600h340v60H180Zm522 40L572-210l42-43 88 88 175-175 43 42L702-80ZM300-450q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 164h244v-60H432v60Zm0-164h244v-60H432v60Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4  mb-2 font-extrabold font-montserrat">Daftar dan Masuk</p>
              <p className="font-opensans">Isi nama lengkap,Username, email, dan Password</p>
            </div>
          </div>
          <div className="h-10 mt-12 mx-5 hidden md:block lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
              <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
            </svg>
          </div>
          <div className="w-44 py-5">
            <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q14 0 25.5 6t18.5 14l-44 44v-4H180v600h600v-343l60-60v403q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm281-168L239-510l42-42 180 180 382-382 42 42-424 424Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4 mb-2 font-extrabold font-montserrat">Pilih Try-out atau Game</p>
              <p className="font-opensans">Pilih Try-out sesuai kebutuhanmu dan pilih game yang super seru</p>
            </div>
          </div>
          <div className="h-10 mt-12 mx-5 hidden md:block lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
              <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
            </svg>
          </div>
          <div className="w-44 py-5">
            <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="m682-138 146-91-146-91v182ZM240-620h480v-60H240v60ZM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41ZM120-81v-699q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v327q-14.17-6.86-29.08-11.43Q796-469 780-472v-308H180v599h310q2.88 18.17 8.94 34.59Q505-130 513-114l-33 33-60-60-60 60-60-60-60 60-60-60-60 60Zm120-199h252.27q3.73-16 8.23-31t12.5-29H240v60Zm0-170h384q22-11 46-17.5t50-8.5v-34H240v60Zm-60 269v-599 599Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4 mb-2 font-extrabold font-montserrat">Kerjakan dan Mainkan</p>
              <p className="font-opensans">Kerjakan Try-out atau mainkan Game super seru</p>
            </div>
          </div>
          <div className="h-10 mt-12 mx-5 hidden md:block lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
              <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
            </svg>
          </div>
          <div className="w-44 py-5">
            <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4 mb-2 font-extrabold font-montserrat">Lihat hasil dan Evaluasi</p>
              <p className="font-opensans">kamu bukan hanya dapat nilai tetapi juga dapat evaluasi</p>
            </div>
          </div>
        </div>

        {/* Preparation Before Tes */}

        <div>
          <h2 className="text-2xl font-bold font-montserrat mb-14 pt-16">Siapkan Hal Berikut Sebelum Mengikuti TRYOUT</h2>
        </div>
        <div className="flex mx-auto bg-white rounded shadow-lg max-w-screen-lg flex-wrap justify-center">
          <div>
            <div>
              <div className="flex mx-auto  gap-10 max-w-screen-lg flex-wrap justify-center">
                <div className="w-72 py-5">
                  <div className=" border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4  mb-2 font-extrabold font-montserrat">Alokasi waktu selama 60–70 menit</p>
                    <p className="font-opensans">Pastikan kamu memiliki cukup waktu tanpa gangguan untuk menyelesaikan try out dengan fokus penuh.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M200-120q-17 0-28.5-11.5T160-160v-40q-50 0-85-35t-35-85v-200q0-50 35-85t85-35v-80q0-50 35-85t85-35h400q50 0 85 35t35 85v80q50 0 85 35t35 85v200q0 50-35 85t-85 35v40q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120Zm-40-160h640q17 0 28.5-11.5T840-320v-200q0-17-11.5-28.5T800-560q-17 0-28.5 11.5T760-520v160H200v-160q0-17-11.5-28.5T160-560q-17 0-28.5 11.5T120-520v200q0 17 11.5 28.5T160-280Zm120-160h400v-80q0-27 11-49t29-39v-112q0-17-11.5-28.5T680-760H280q-17 0-28.5 11.5T240-720v112q18 17 29 39t11 49v80Zm200 0Zm0 160Zm0-80Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat">Ruangan minim distraksi</p>
                    <p className="font-opensans">Pilih tempat yang tenang agar kamu bisa berkonsentrasi maksimal selama try out berlangsung.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat">Koneksi internet yang stabil</p>
                    <p className="font-opensans">Gunakan koneksi internet yang lancar agar try out berjalan tanpa hambatan teknis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex mx-auto  gap-10 max-w-screen-lg flex-wrap justify-center">
                <div className="w-72 py-5">
                  <div className=" border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4  mb-2 font-extrabold font-montserrat">Gunakan earphones untuk listening</p>
                    <p className="font-opensans">Suara akan terdengar lebih jelas dan mengurangi gangguan dari sekitar.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M240-360h280l80-80H240v80Zm0-160h240v-80H240v80Zm-80-160v400h280l-80 80H80v-560h800v120h-80v-40H160Zm756 212q5 5 5 11t-5 11l-36 36-70-70 36-36q5-5 11-5t11 5l48 48ZM520-120v-70l266-266 70 70-266 266h-70ZM160-680v400-400Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat"> Alat tulis dan buku untuk mencatat</p>
                    <p className="font-opensans">Mencatat poin penting akan membantumu memahami materi dengan lebih baik.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M480-540ZM80-160v-80h400v80H80Zm120-120q-33 0-56.5-23.5T120-360v-360q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720H200v360h280v80H200Zm600 40v-320H640v320h160Zm-180 80q-25 0-42.5-17.5T560-220v-360q0-25 17.5-42.5T620-640h200q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H620Zm100-300q13 0 21.5-9t8.5-21q0-13-8.5-21.5T720-520q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 60Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat">Baterai gadget terisi penuh</p>
                    <p className="font-opensans">Pastikan perangkat yang kamu gunakan tidak kehabisan daya di tengah try out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="px-16 pb-10 bg-gradient-to-r from-light-blue pt-5  to-white">
        <p className="text-center p-16 font-inter font-bold text-3xl font-montserrat">Coba Sekarang</p>
        <ProductCard title="Permainan Flip-Card" subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu" buttonText="Mulai" onButtonClick={() => navigate("/games")}>
          <div className="flex gap-10">
            {items.map((item, i) => (
              <div key={i}>
                <GameCard frontTopText={item.frontTopText} frontBottomText={item.frontBottomText} backContent={item.backContent} />
              </div>
            ))}
          </div>
        </ProductCard>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
