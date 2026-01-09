import Image from "next/image";
import LikeIcon from "./components/LikeIcon/LikeIcon";
import SplitText from "./components/SplitText/SplitText";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Magnet from "./components/Magnet/Magnet";

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Your content here */}
      <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex items-center cursor-pointer">
          <SplitText text="Hello, you!" delay={100} duration={0.7} className="text-2xl font-semibold text-center mr-2" />
          <LikeIcon className="h-6 w-6" />
        </div>
        <br/>
        <br/>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <p>Star React Bits on GitHub!</p>
        </Magnet>
      </div>
    </ClickSpark>
  );
}
