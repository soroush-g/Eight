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
            <div className="text-2xl fo">

            </div>

          </div>
        </>
     );
}
 
export default Heading;