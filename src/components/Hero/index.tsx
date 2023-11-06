import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  // arabaları kesfet butonuna basınca scrol yapar !!
  const scrollTo = () => {
    const ele: HTMLElement | null = document.getElementById("catalogue");

    ele?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title"> Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton
          title="Arabaları Keşfet"
          designs="mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          src="/hero.png"
          className="img-fluid object-contain"
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
