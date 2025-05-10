import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";
export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-pink-100 overflow-hidden">
      <div className="w-1/2 h-full bg-pink-100">
        <LeftComponent />
      </div>
      <div className="w-1/2 h-full bg-white">
        <RightComponent />
      </div>
    </div>
  );
}
