import image1 from '@/assets/images/project-1.jpg';
import image2 from '@/assets/images/project-2.jpg';
import image3 from '@/assets/images/project-3.jpg';
import image4 from '@/assets/images/project-4.jpg';
import image5 from '@/assets/images/project-5.jpg';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
    {
        name: 'Artisan Brew Co.',
        image: image1,
        link: "#",
    },
    {
        name: "Wavelength Studios",
        image: image2,
        link: "#",
    },
    {
        name: "Nova Fitness",
        image: image3,
        link: "#",
    },
    {
        name: "Urban Plates",
        image: image4,
        link: "#",
    },
    {
        name: "Bloom Botanicals",
        image: image5,
        link: "#",
    },
];

const Projects = () => {
    return (
        <section className='section'>
            <div className="container">
                <h2 className='text-4xl md:text-7xl lg:text-8xl'>
                    Selected works
                </h2>
                <div className='mt-10 md:mt-16 lg:mt-20'>
                    {PROJECTS.map(({ name, image, link }) => (
                        <Link href={link} key={name} className='border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col'>
                            <div>
                                <div className='aspect-video md:hidden'>
                                    <Image src={image} alt={`${name} image`} className='size-full object-cover' />
                                </div>
                                <div className='mt-8 md:mt-0 flex justify-between items-center'>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl'>{name}</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
