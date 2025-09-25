import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className='card my-10 py-10 flex flex-col items-center justify-center gap-4 sm:gap-6 '>
      <h3 className='section-heading '>What are you waiting for?</h3>
      <p className='text-sm sm:text-base text-txt-secondary text-center sm:max-w-3xl '>
        Jarurat Care is a cutting-edge platform that empowers healthcare
        professionals to harness the power of patient data to deliver
        exceptional patient care.
      </p>
      <Link to='/patients'>
        <Button variant='primary' className='px-6 py-3'>
          Get Started <ArrowRight className='size-4 sm:size-6' />
        </Button>
      </Link>
    </section>
  );
};

export default CallToAction;
