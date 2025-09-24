import { Linkedin, Twitter } from "lucide-react";

const TeamCard = ({ name, role, bio, avatarUrl }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatarUrl}
        alt={name}
        className='size-24 rounded-full ring-3 ring-primary/50 mx-auto'
      />
      <h3 className='sm:text-lg font-semibold mt-2'>{name}</h3>
      <p className='text-sm sm:text-base text-primary'>{role}</p>
      <p className='text-sm sm:text-base text-txt-secondary mt-2'>{bio}</p>

      {/* social links */}
      <div className='flex items-center justify-center gap-4 mt-4 text-txt-secondary'>
        <a href='#'>
          <Linkedin className='size-6 hover:text-primary' />
        </a>
        <a href='#'>
          <Twitter className='size-6 hover:text-primary' />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
