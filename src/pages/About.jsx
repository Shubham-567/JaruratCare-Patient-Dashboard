import { BookOpen, Target } from "lucide-react";
import TeamCard from "../components/TeamCard";
import CallToAction from "../components/CallToAction";
import { teamMembers } from "../constants";

const About = () => {
  return (
    <main className='px-6 sm:px-13 md:px-18 lg:px-26 mt-18'>
      {/* Hero Section */}
      <section className='py-10 pb-2'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          About Jarurat Care
        </h1>
        <p className='py-3 max-w-2xl sm:text-lg text-txt-secondary'>
          Jarurat Care is a cutting-edge platform that empowers healthcare
          professionals to harness the power of patient data to deliver
          exceptional patient care.
        </p>
      </section>

      {/* Mission and Story section */}
      <section className='py-10'>
        <div className='relative card grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto'>
          {/* Mission  */}
          <div>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/10 p-2 rounded-full'>
                <Target className='size-6 text-primary' />
              </div>
              <h3 className='text-xl sm:text-2xl font-semibold'>Our Mission</h3>
            </div>
            <p className='py-3 sm:text-lg text-txt-secondary'>
              Our mission is to empower healthcare professionals by providing a
              cutting-edge platform that empowers healthcare professionals to
              harness the power of patient data to deliver exceptional patient
              care.
              <br />
              <br />
              Our platform is designed to help healthcare professionals harness
              the power of patient data to deliver exceptional patient care.
            </p>
          </div>

          {/* divider */}
          <div className='max-md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-1/1 bg-primary/50'></div>

          {/* Story  */}
          <div>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/10 p-2 rounded-full'>
                <BookOpen className='size-6 text-primary' />
              </div>
              <h3 className='text-xl sm:text-2xl font-semibold'>Our Story</h3>
            </div>
            <p className='py-3 sm:text-lg text-txt-secondary'>
              Jarurat Care was founded by a team of healthcare professionals who
              recognized the need for a platform that could harness the power of
              patient data to deliver exceptional patient care.
              <br />
              <br />
              Our platform is designed to help healthcare professionals harness
              the power of patient data to deliver exceptional patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section  */}
      <section className='py-10'>
        <h2 className='section-heading'>Meet The Team</h2>
        <p className='section-description'>
          We are a team of dedicated healthcare professionals who are passionate
          about harnessing the power of patient data to deliver exceptional
          patient care.
        </p>

        {/* Team members */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto py-6'>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              avatarUrl={member.avatarUrl}
            />
          ))}
        </div>
      </section>

      {/* call to action  */}
      <CallToAction />
    </main>
  );
};

export default About;
