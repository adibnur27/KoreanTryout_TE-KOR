import React from "react";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Fotter";
import { NavLink } from "react-router-dom";
import Threads from "../../components/ui/Threads/Threads";
import { FadeContent } from "../../components/ui/FadeContent";
import { CircularText } from "../../components/ui/CircularText";
import { InfiniteScroll } from "../../components/ui/InfiniteScroll";

const Home = () => {
  const items = [
    { content: "카드 뒤집기 게임" },
    { content: <p>Game Balik Kartu</p> },
    { content: "그리고 단어를 맞춰보세요" },
    { content: <p>Dan Tebak Kata</p> },
    { content: "지금 플레이" },
    { content: <p>Mainkan Sekarang</p> },
    { content: "카드 뒤집기 게임" },
    { content: <p>Game Balik Kartu</p> },
    { content: "그리고 단어를 맞춰보세요" },
    { content: <p>Dan Tebak Kata</p> },
    { content: "지금 플레이" },
    { content: <p>Mainkan Sekarang</p> },
  ];
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
        <section className="text-center px-6 py-36 bg-gradient-to-br from-white via-white to-orange-400 h-screen">
          <h1 className="text-4xl font-bold font-poppins">
            Kuasai Bahasa Korea dengan 
            <span className="text-orange-500"> TE</span>
            <span className="text-black">-KOR</span>
          </h1>
          <h2 className="text-xl font-semibold mt-2 font-inter">Buka Potensi Korea Anda Sekarang Juga</h2>
          <div className="mt-16 z-20">
            <NavLink to={'/products'}>
              <Button children={"Coba Sekarang"} width={'400px'} height={'50px'}/>
            </NavLink>
          </div>
          <p className="mt-24 max-w-4xl mx-auto text-md font-medium font-inter">
            Berlatih dengan soal-soal nyata, dapatkan skor instan, dan pahami kesalahan Anda dengan penjelasan rinci. Bergabunglah dengan kami dan capai tujuan bahasa Anda.
          </p>
        </section>
      </FadeContent>
        

      {/* Features Section */}
      
      <section className="text-center
       px-6 bg-gradient-to-bl from-orange-400 pt-5 via-white to-white h-screen relative ">
        <div style={{ width: '100%', height: '300px', position: 'absolute', bottom:10, left:0, top:-190,}}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        <p className="text-xl font-semibold max-w-4xl mx-auto mb-12 font-poppins">
          <span className="text-orange-500">TE</span>
          <span className="text-black">-KOR </span> 
          menyediakan alat dan sumber daya yang Anda butuhkan untuk berhasil dalam perjalanan bahasa Korea Anda.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-around items-center">
          <div>
            <div className="bg-gradient-to-bl from-orange-200 via-white to-orange-400 p-[5px] rounded-lg max-w-72 mb-5 font-inter">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl">Skor Real-time</h3>
                <p className="text-md mt-1">Dapatkan umpan balik instan tentang kinerja Anda dengan skor real-time dan pelacakan kemajuan.</p>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-orange-200 via-white to-orange-400 p-[5px] rounded-lg max-w-72 mb-5 ms-32">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl">Penjelasan Jawaban</h3>
                <p className="text-md mt-1">Pahami kesalahan Anda dengan penjelasan rinci untuk setiap jawaban, membantu Anda belajar secara efektif.</p>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-orange-200 via-white to-orange-400 p-[5px] rounded-lg max-w-72 mb-5">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl">Soal Latihan</h3>
                <p className="text-md mt-1">Akses perpustakaan besar soal latihan yang mencakup semua tingkat kemahiran bahasa Korea.</p>
              </div>
            </div>
          </div>
          <div className="me-20">
            <CircularText
              text="TE-KOR*TEST*KOREA*BERSAMA*"
              onHover="speedUp"
              spinDuration={20}
              className="font-bold"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-16 pb-10 bg-gradient-to-t from-orange-400 pt-5 via-orange-100  to-white">
        <p className="text-center p-16 font-inter font-bold text-3xl">Coba Sekarang</p>
        <div className="flex flex-wrap justify-around bg-white/10 backdrop-blur-xl border border-white/20 text-black rounded shadow">
          <div className="flex items-center gap-5">
            <div className="py-10">
              <h3 className="text-2xl font-bold font-poppins pb-2 mb-5">Permainan Flip-Card</h3>
              <p className="text-base w-80 font-inter mb-5">Tebak kata dan balikkkan kartunya Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu</p>
              <Button children={"Mulai"} width={"200px"} height={"35px"}/>
            </div>
            <div style={{height: '250px', position: 'relative', width: '50em',}} className="md:none">
              <InfiniteScroll
                items={items}
                isTilted={true}
                tiltDirection='left'
                autoplay={true}
                autoplaySpeed={0.1}
                autoplayDirection="down"
                pauseOnHover={true}
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
