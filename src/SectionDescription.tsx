import './SectionDescription.css';

type SectionDescriptionProps = {
  title: string;
  description: string;
};

export const SectionDescription = ({ title, description }: SectionDescriptionProps) => {
  return (
    <div className='SectionDescription'>
      <div className='SectionDescription__content'>
        <h3 className='SectionDescription__contentTitle' >{title}</h3>
        <p className='SectionDescription__contentDescription'>{description}</p>
      </div>
    </div>
  );
};