
import ButtonCTA from './ButtonCTA';

export default function Nav() {
  return (
    <>
      <nav className="py-4">
        <div className="flex items-center justify-between">
          
          <h2 className='font-bold mr-1.5'>Spanish with Anais</h2>
          {/* <i>Icon</i> */}
          <div className="flex gap-4 items-center">
            <a href="" className="text-green-600">
              About
            </a>
            <a href="" className="text-green-600">
              Contact
            </a>
            <ButtonCTA>Schedule a class!</ButtonCTA>
          </div>
        </div>
      </nav>
    </>
  );
}
