import Image from "next/image";
import localFont from "next/font/local";

const ThickerFont = localFont({
  src: "../public/fonts/ThickerBlackItalic.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F5FB] justify-between items-center p-24">
      <section className="w-full flex flex-col justify-center items-center gap-y-6">
        <div className="bg-[#223DFF] px-12 pt-8 pb-1 rounded-3xl relative">
          <h3 className={`text-9xl text-white ${ThickerFont.className}`}>
            DEVELOPER
          </h3>
          <Image
            src="/images/headerImage.png"
            width={185}
            height={185}
            alt="프로필 이미지"
            className="absolute bottom-0 right-16"
          />
        </div>
        <h2 className={`font-extrabold text-4xl text-[#303030] leading-none`}>
          감동을 주는 <span className="text-[#223DFF]">풀스택 개발자</span>,
          김지훈입니다.
        </h2>
        <p className="text-center text-[#555555] font-normal text-lg leading-snug">
          즐겨 읽던 책, 공자의 중용으로부터 찾은 해답은 사람의 마음을 움직이는
          것은 <br />
          지나칠 수 있는{" "}
          <span className="text-white bg-[#596DFF] px-0.5">
            작은 것들에 관심을 갖고 정성을 다하는 것
          </span>
          에서 비롯된다는 점이었습니다.
        </p>
        <p className="text-center text-[#555555] font-normal text-lg leading-snug">
          저 역시 사람들의 마음을 움직일 수 있도록,{" "}
          <span className="text-white bg-[#596DFF] px-0.5">
            {" "}
            작은 디테일에서{" "}
          </span>
          <br />
          <span className="text-white bg-[#596DFF] px-0.5">
            차이를 만들어 낼 수 있는
          </span>{" "}
          풀스택 개발자가 되는 것이 제 목표입니다.
        </p>
      </section>
    </main>
  );
}
