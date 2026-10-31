import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Chapter, Rise } from './Chapter';

// Each chapter's field is a tone taken from its own photograph
const CHAPTERS = [
  {
    title: 'Design and sourcing',
    text: 'Work directly with verified fabric mills, keep every tech pack in one place, and launch collections up to 40% faster.',
    image: '/photos/saree-weaving-by-handloom-2.jpg',
    width: 1920, height: 883, position: '38% 50%',
    alt: 'A weaver at a Pochampally ikat handloom in Telangana',
    bg: '#2F2821', ink: 'light',
  },
  {
    title: 'Production tracking',
    text: 'See every cutting queue and line milestone live, so a delay shows up before it costs you a launch.',
    image: '/photos/paharganj-market-tailor-shop.jpg',
    width: 1920, height: 1280, position: '50% 50%',
    alt: 'A tailor at his sewing machine in a narrow lane of Paharganj market, Delhi',
    bg: '#D6CFC2', ink: 'dark',
  },
  {
    title: 'Inventory and B2B',
    text: 'One stock count across every store, automatic replenishment, and a wholesale portal for your B2B buyers.',
    image: '/photos/india-colours-of-india-004-suit-shop.jpg',
    width: 1920, height: 1440, position: '50% 40%',
    alt: 'Bolts of suiting fabric stacked by colour on shop shelves',
    bg: '#3A2C22', ink: 'light',
  },
];

export default function CoreShowcase() {
  return (
    <div>
      {CHAPTERS.map((c, i) => {
        const Heading = i === 0 ? 'h2' : 'h3';
        return (
          <Chapter key={c.title} bg={c.bg} ink={c.ink} className="min-h-[100svh] wrap py-24 lg:py-0 flex flex-col lg:block">
            <Rise as={Heading} className="t-lead lg:absolute lg:top-28 lg:left-[var(--margin)] lg:max-w-[22ch]">
              {c.title}
            </Rise>

            <motion.figure
              className="mx-auto my-10 lg:my-0 w-[80%] max-w-[30rem] lg:absolute lg:top-28 lg:left-1/2 lg:-translate-x-1/2 lg:w-auto lg:h-[calc(100svh-14rem)] lg:max-h-[42rem] aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={c.image}
                alt={c.alt}
                width={c.width}
                height={c.height}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: c.position }}
              />
            </motion.figure>

            <Rise as="p" delay={0.08} className="t-body max-w-[34ch] lg:absolute lg:bottom-12 lg:left-[var(--margin)]">
              {c.text}
            </Rise>
            <Rise delay={0.16} className="mt-6 lg:mt-0 lg:absolute lg:bottom-12 lg:right-[var(--margin)]">
              <Link to="/modules" className="link-arrow">Explore the module</Link>
            </Rise>
          </Chapter>
        );
      })}
    </div>
  );
}
