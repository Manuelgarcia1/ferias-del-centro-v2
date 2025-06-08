import type { FC } from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className = "h-14 w-auto" }) => {
  return (
    <div className={`flex ${className}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0 mt-3 mr-3">
          <Image
            src="/images/LogoFerias.png"
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
            alt="Logo Ferias"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-white font-playfair font-bold text-xl leading-snug m-0">
            FERIAS DEL CENTRO
          </h1>
          <p className="text-white text-xs mt-[1px]"> DESDE 1983 </p>
        </div>
      </div>
    </div>
  );
};
