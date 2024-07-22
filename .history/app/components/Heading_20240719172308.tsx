'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return ( 
        <>
          <div className={center ? 'text-center' : }>

          </div>
        </>
     );
}
 
export default Heading;