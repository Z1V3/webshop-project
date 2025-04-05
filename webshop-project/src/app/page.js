import { DesktopHome } from "@/components/home/DesktopHome";
import { PhoneHome } from "@/components/home/PhoneHome";

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className="sm:hidden md:block">
      <DesktopHome />
      </div>
      <div className="md:hidden">
        <PhoneHome />
      </div>
    </div>
  );
}