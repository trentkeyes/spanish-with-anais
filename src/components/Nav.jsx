
import ButtonCTA from './ButtonCTA';

export default function Nav() {
  return (
    <>
      <nav className="py-4 border-green-500 border-b-4">
        <div className="flex items-center justify-between">
          
          <h2 className='font-bold mr-1.5'>Spanish with Anais</h2>
          {/* <i>Icon</i> */}
          <div className="flex gap-4 items-center">
            <a href="" className="font-bold text-green-500">
              About
            </a>
            <a href="" className="font-bold text-green-500">
              Contact
            </a>
            <ButtonCTA>Schedule a class!</ButtonCTA>
          </div>
        </div>
      </nav>
    </>
  );
}
