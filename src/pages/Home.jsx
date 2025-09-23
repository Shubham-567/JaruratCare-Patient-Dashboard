import Button from "../components/Button";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Quote,
  Clock,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    title: "AI-Powered Insights",
    description:
      "Automatically highlight critical patient data, potential risks, and follow-up reminders. Let our AI assist in proactive care.",
    icon: <Sparkles className='size-6 text-primary' />,
  },
  {
    title: "Bank-Grade Security",
    description:
      "Your data is encrypted end-to-end, ensuring compliance and peace of mind.",
    icon: <ShieldCheck className='size-6 text-primary' />,
  },
  {
    title: "Customizable Views",
    description:
      "Tailor the dashboard to your needs. Prioritize what's most important for your workflow.",
    icon: <LayoutDashboard className='size-6 text-primary' />,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Monitor patient vitals and trends with our live, easy-to-read charts and graphs. Gain insights to optimize care.",
    icon: <Activity className='size-6 text-primary' />,
  },
];

const Home = () => {
  return (
    <main className='px-6 sm:px-12'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col justify-center items-center'>
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
            <Button variant='primary'>
              Explore The Dashboard <ArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      {/* features section with bento grid */}
      <section className='min-h-screen'>
        <h2 className='section-heading'>
          Everything you need. Nothing you don't.
        </h2>

        <p className='section-description'>
          Discover a smarter way to manage patient records, from insights to
          security.
        </p>

        <div className='grid grid-colo-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4 py-10'>
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
      <section className='min-h-screen'>
        <h2 className='section-heading'>Making a Measurable Difference</h2>
        <p className='section-description'>
          From individual clinics to large hospitals, Jarurat Care is
          transforming workflows.
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 max-w-6xl mx-auto py-10'>
          {/* review card */}
          <div className='col-span-2 lg:col-span-1 row-span-2 card space-y-2'>
            <Quote className='size-8 text-primary' />
            <p className='lg:text-lg'>
              "This platform has revolutionized how we handle patient data. It's
              intuitive, secure, and has genuinely saved us hours every single
              day. I can't imagine our workflow without it."
            </p>
            <p>
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
    </main>
  );
};

export default Home;
