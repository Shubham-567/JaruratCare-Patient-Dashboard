import Button from "../components/Button";
import { ArrowRight, ShieldCheck, Quote, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import CallToAction from "../components/CallToAction";
import { features } from "../constants";

const Home = () => {
  return (
    <main className='px-6 sm:px-13 md:px-18 lg:px-26'>
      {/* Hero Section */}
      <section className='relative py-26 my-26 min-h-[400px] flex flex-col justify-center items-center'>
        {/* background blobs */}
        <div className='max-md:hidden absolute top-0 left-0 size-80 bg-primary/30 blur-[100px] rounded-full -z-10'></div>
        <div className='max-md:hidden absolute bottom-0 right-0 size-80 bg-primary/30 blur-[100px] rounded-full -z-10'></div>

        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
            The Future of Patient <br />
            <span className='text-primary'> Data Management </span>is Here.
          </h1>
          <p className='py-6 max-w-2xl sm:text-lg text-txt-secondary'>
            Jarurat Care is an intelligent, streamlined platform designed to
            give healthcare professionals the clarity and control they need.
          </p>
          <Link to='/patients'>
            <Button variant='primary' className='px-6 py-3'>
              Explore The Dashboard <ArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      {/* features section with bento grid */}
      <section className='py-10 my-10'>
        <h2 className='section-heading'>
          Everything you need. Nothing you don't.
        </h2>

        <p className='section-description'>
          Discover a smarter way to manage patient records, from insights to
          security.
        </p>

        <div className='grid grid-colo-2 lg:grid-cols-3 max-w-7xl mx-auto gap-4 mt-10'>
          <div className='md:col-span-2'>
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
            />
          </div>

          <div className='md:col-span-1'>
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
            />
          </div>
          <div className='md:col-span-1'>
            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              icon={features[2].icon}
            />
          </div>
          <div className='md:col-span-2'>
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
            />
          </div>
        </div>
      </section>

      {/* impact section */}
      <section className='py-10 my-10'>
        <h2 className='section-heading'>Making a Measurable Difference</h2>
        <p className='section-description'>
          From individual clinics to large hospitals, Jarurat Care is
          transforming workflows.
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 max-w-7xl mx-auto mt-10'>
          {/* review card */}
          <div className='col-span-2 lg:col-span-1 row-span-2 card space-y-2'>
            <Quote className='size-8 text-primary' />
            <p className='text-sm sm:text-base lg:text-lg text-txt-secondary'>
              "This platform has revolutionized how we handle patient data. It's
              intuitive, secure, and has genuinely saved us hours every single
              day. I can't imagine our workflow without it."
            </p>
            <p className='text-sm sm:text-base'>
              <span className='font-semibold'>- Dr. Anjali Rao,</span>
              <br />
              <span className='text-txt-secondary'>
                Chief Medical Officer, Nova Clinic
              </span>
            </p>
          </div>

          {/*  states card */}
          <div className='col-span-2 row-span-1 flex items-center gap-4'>
            <div className='card w-full flex flex-col items-center gap-1.5'>
              <Clock className='size-8 text-secondary' />
              <p className='font-semibold text-2xl sm:text-4xl text-primary'>
                40%
              </p>
              <p className='max-sm:text-sm text-txt-secondary text-center'>
                Faster Charting & Admin
              </p>
            </div>

            <div className='card w-full flex flex-col items-center gap-1.5'>
              <Users className='size-8 text-secondary' />
              <p className='font-semibold text-2xl sm:text-4xl text-primary'>
                10,000+
              </p>
              <p className='max-sm:text-sm text-txt-secondary text-center'>
                Healthcare Professionals
              </p>
            </div>
          </div>
          <div className='col-span-2 row-span-1 card flex flex-col items-center gap-1.5'>
            <ShieldCheck className='size-8 text-secondary' />
            <p className='font-semibold text-2xl sm:text-4xl text-primary'>
              99.9%
            </p>
            <p className='max-sm:text-sm text-txt-secondary text-center'>
              Uptime Guarantee & Data Security
            </p>
          </div>
        </div>
      </section>

      {/* call to action  */}
      <CallToAction />
    </main>
  );
};

export default Home;
