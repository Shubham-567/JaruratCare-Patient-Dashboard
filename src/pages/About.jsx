import { BookOpen, Target } from "lucide-react";
import TeamCard from "../components/TeamCard";

const teamMembers = [
  {
    name: "Dr. Priya Sharma",
    role: "Co-Founder & CEO",
    bio: "A practicing physician with 15 years of experience, Dr. Sharma provides the medical vision for our platform.",
    avatarUrl: "https://picsum.photos/seed/founder1/200",
  },
  {
    name: "Rohan Verma",
    role: "Co-Founder & CTO",
    bio: "Rohan is the architectural mastermind, ensuring our platform is secure, scalable, and cutting-edge.",
    avatarUrl: "https://picsum.photos/seed/founder2/200",
  },
  {
    name: "Aisha Khan",
    role: "Head of Product Design",
    bio: "Aisha crafts the intuitive and user-friendly experience that our clients love to use.",
    avatarUrl: "https://picsum.photos/seed/founder3/200",
  },
];

const About = () => {
  return (
    <main className='px-6 sm:px-12 mt-18'>
      {/* Hero Section */}
      <section className='py-10 text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          About Jarurat Care
        </h1>
        <p className='py-3 max-w-xl mx-auto sm:text-lg text-txt-secondary'>
          Empowering healthcare professionals with tools as intelligent and
          dedicated as they are.
        </p>
      </section>

      {/* Mission and Story section */}
      <section className='py-10'>
        <div className='relative card flex max-md:flex-col items-start gap-8 max-w-6xl mx-auto'>
          {/* Mission  */}
          <div>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/10 p-2 rounded-full'>
                <Target className='size-6 text-primary' />
              </div>
              <h3 className='text-xl sm:text-2xl font-semibold'>Our Mission</h3>
            </div>
            <p className='py-3 sm:text-lg text-txt-secondary mr-4'>
              We believe technology's highest purpose is to serve humanity. In
              healthcare, this means bridging the gap between complex medical
              data and exceptional patient care. Our mission is to create
              intuitive, powerful, and secure tools that free up professionals
              to do what they do best: heal.
              <br />
              <br />
              At Jarurat Care, we're not just a platform; we're a community of
              healthcare professionals dedicated to making healthcare better for
              everyone.
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
              Jarurat Care was born from a simple observation: the people
              dedicated to caring for others were burdened by inefficient,
              outdated systems. Co-founders Dr. Priya Sharma and Rohan Verma,
              witnessing this friction firsthand, knew there had to be a better
              way.
              <br />
              <br />
              Dr. Sharma and Rohan Verma, two doctors with a shared passion for
            </p>
          </div>
        </div>
      </section>

      {/* Team Section  */}
      <section className='py-10'>
        <h2 className='section-heading'>Meet The Team</h2>
        <p className='section-description'>
          A team united by a passion for improving healthcare through
          technology.
        </p>

        {/* Team members */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto py-6'>
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
    </main>
  );
};

export default About;
