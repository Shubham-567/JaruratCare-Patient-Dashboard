import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className='card my-10 py-10 flex flex-col items-center justify-center gap-4 sm:gap-6 '>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center sm:max-w-3xl '>
        Join the Revolution Today
      </h2>
      <p className='sm:text-lg text-txt-secondary text-center sm:max-w-3xl '>
        Experience the future of healthcare management with Jarurat Care. Start
        your journey towards better patient care today!
      </p>
      <Link to='/patients'>
        <Button variant='primary' className='px-6 py-3'>
          Get Started <ArrowRight className='size-6' />
        </Button>
      </Link>
    </section>
  );
};

export default CallToAction;
