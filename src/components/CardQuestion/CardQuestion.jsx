import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountdownTimer = ({ initialMinutes = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // dalam detik

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
      {minutes}:{seconds}
    </span>
  );
};

const CardQuestion = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg bg-gradient-to-br from-light-blue via-white to-light-red">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black font-bold text-lg">Simulasi Ujian</h2>
        <CountdownTimer initialMinutes={10} />
      </div>

      <div className="mb-4">
        <p className="text-gray-700 font-semibold">TOPIK - Simulasi Ujian (듣기)</p>
      </div>

      <div className="bg-white p-4 rounded-md mb-4">
        <p className="text-gray-800 font-medium mb-1">문제 15. 다음을 듣고 알맞은 것을 고르십시오.</p>
        <p className="text-gray-600 text-sm">Dengarkan dan pilih jawaban yang tepat.</p>
      </div>

      <div className="space-y-3 mb-6 bg-white">
        <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">① 회의 시간을 변경하려고 한다</button>
        <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">② 회의 장소를 예약하려고 한다</button>
        <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">③ 회의 자료를 준비하려고 한다</button>
        <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">④ 회의 참석자를 확인하려고 한다</button>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/tryouts")}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold"
        >
          Coba Sekarang
        </button>
      </div>
    </div>
  );
};

export default CardQuestion;
