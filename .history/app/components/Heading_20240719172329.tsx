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
          <div className={center ? 'text-center' : 'text-end'}>
            div

          </div>
        </>
     );
}
 
export default Heading;