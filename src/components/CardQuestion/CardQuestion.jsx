import React from 'react'

const CardQuestion = () => {
  return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-800 font-bold text-lg">TOPIK II - Simulasi Ujian</h2>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">59:42</span>
            </div>

            <div className="mb-4">
                <p className="text-gray-700 font-semibold">Bagian: Listening (듣기)</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p className="text-gray-800 font-medium mb-1">
                문제 15. 다음을 듣고 알맞은 것을 고르십시오.
                </p>
                <p className="text-gray-600 text-sm">Dengarkan dan pilih jawaban yang tepat.</p>
            </div>

            <div className="space-y-3 mb-6">
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ① 회의 시간을 변경하려고 한다
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ② 회의 장소를 예약하려고 한다
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ③ 회의 자료를 준비하려고 한다
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ④ 회의 참석자를 확인하려고 한다
                </button>
            </div>

            <div className="text-center">
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold">
                Jawab & Lihat Penjelasan
                </button>
            </div>
        </div>
    )
}

export default CardQuestion