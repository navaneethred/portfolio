'use client'

import { useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Testimonial } from "@/components/Testimonial";

const TESTIMONIALS = [
    {
        name: "Sarah Chen",
        company: "Pixel Perfect",
        role: "Head of Design",
        quote: "Navaneeth's expertise in both technical development and design created a beautiful, high-performing website.",
        image: image1,
        imagePositionY: 0.2,
    },
    {
        name: "Marcus Rodriguez",
        company: "Craft Coffee Co.",
        role: "Founder",
        quote: "Navaneeth transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
        image: image2,
        imagePositionY: 0.1,
    },
    {
        name: "Emily Watson",
        company: "Studio Minimal",
        role: "Creative Director",
        quote: "The collaborative process was amazing. Navaneeth brought lots of fresh perspectives and innovative solutions.",
        image: image3,
        imagePositionY: 0.55,
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const titleRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ['start end', 'end start']
    });
    const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '15px']);
    const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '-15px']);

    const handleClickPrev = () => {
        setActiveIndex(curr => {
            if (curr === 0) {
                return TESTIMONIALS.length - 1;
            }
            return curr - 1;
        });
    };

    const handleClickNext = () => {
        setActiveIndex(curr => {
            if (curr === TESTIMONIALS.length - 1) {
                return 0;
            }
            return curr + 1;
        });
    };

    return (
        <section className="section" id="testimonials">
            <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter" ref={titleRef}>
                <motion.span
                    className="whitespace-nowrap"
                    style={{
                        x: transformTop,
                    }}
                >
                    Some nice words from my past clients
                </motion.span>
                <motion.span
                    className="whitespace-nowrap self-end text-red-orange-500"
                    style={{
                        x: transformBottom,
                    }}
                >
                    Some nice words from my past clients
                </motion.span>
            </h2>
            <div className="container">
                <div className="mt-20">
                    <AnimatePresence mode="wait" initial={false}>
                        {TESTIMONIALS.map(({ name, company, role, quote, image, imagePositionY }, index) => index === activeIndex && (
                            <Testimonial
                                key={name + company}
                                name={name}
                                company={company}
                                role={role}
                                quote={quote}
                                image={image}
                                imagePositionY={imagePositionY}
                            />
                        ))}
                    </AnimatePresence>
                </div>
                <div className="flex gap-4 mt-6 lg:mt-10">
                    <button
                        className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
                        onClick={handleClickPrev}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button
                        className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
                        onClick={handleClickNext}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
