const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className='card flex items-start gap-3 min-h-[200px]'>
      <div className='bg-primary/10 p-2 rounded-xl'>{icon}</div>
      <div className='space-y-2'>
        <h3 className='text-lg sm:text-xl font-semibold'>{title}</h3>
        <p className='text-txt-secondary'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
