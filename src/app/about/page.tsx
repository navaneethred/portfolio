import {skills} from '@/constants';
import Image from 'next/image';

export default function About() {
    return (
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Navaneeth</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Software Engineer based in India, specializing in Cloud Architecture and Full-Stack Development.</p>
        </div>
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <Image src={skill.imageUrl} alt={skill.name} width={50} height={50} className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  