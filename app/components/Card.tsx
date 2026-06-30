import Image from 'next/image';

export default function Card() {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center bg-[#faeaf4] min-h-112 border border-[#f3bcdf] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        
        <div className="w-full flex flex-col items-center">
          <div className="relative w-28 h-28 mt-2 overflow-hidden rounded-full border border-[#f3bcdf]">
            <Image
                src="/facecard.png"
                alt="facecard"
                fill
                className="object-cover"
            />
          </div>

          <div className="mt-4 w-full flex flex-col items-center text-center space-y-1">
            <h1 className="text-lg font-bold text-gray-800 tracking-tight">Damian Payano</h1>
            <p className="text-xs font-semibold text-pink-600">FTC 20712 & FRC 1880</p>
            
            <p className="text-xs text-gray-600 font-medium leading-relaxed italic pt-4 border-t border-pink-200/60 w-full mt-3 px-2">
              "If Java had runtime mutation, flying cars would be old news."
            </p>
          </div>
        </div>

        <div className="w-full mt-6 flex justify-center items-center gap-3 text-[11px] font-bold text-gray-500 border-t border-pink-200/60 pt-4">
          <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
          <span className="text-pink-300">•</span>
          <a href="#" className="hover:text-pink-600 transition-colors">Instagram</a>
          <span className="text-pink-300">•</span>
          <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
        </div>

      </div>  
    </>
  );
}