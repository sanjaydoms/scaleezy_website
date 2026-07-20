import React from 'react';
import { PlayIcon, TrendingUpIcon } from 'lucide-react';
import { IMAGES } from './assets';
import { Reveal } from './motion';
const STORIES = [{
  name: 'Aanya Weaves',
  place: 'Saree Boutique, Jaipur',
  image: IMAGES.storyCustomer,
  alt: 'Owner of Aanya Weaves in her boutique',
  badge: '28% less dead stock',
  quote: 'For the first time, we can see the collection clearly and still serve customers personally.'
}, {
  name: 'Maison Léa',
  place: 'Bridal House, Mumbai',
  image: IMAGES.industryBridal,
  alt: 'Bridal house interior with wedding gowns',
  badge: 'Improved repeat purchases',
  quote: 'Our brides feel remembered long after their first fitting.'
}, {
  name: 'North & Thread',
  place: 'D2C Brand, Bengaluru',
  image: IMAGES.onlineShopping,
  alt: 'Customer shopping a fashion brand online',
  badge: 'Less manual follow-ups',
  quote: 'The handoffs disappeared. The customer experience got better.'
}];
export function Stories() {
  return <section id="stories" className="w-full bg-cream py-24 text-forest md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mb-16 text-center md:mb-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-medium tracking-widest text-lime-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-dark" />
            SUCCESS STORIES
          </div>
          <h2 className="font-serif-display mt-6 text-5xl leading-[0.98] md:text-7xl">
            Measurable change, felt every day.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORIES.map((story, index) => <Reveal key={story.name} delay={index * 0.1} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/5">
              <div className="group relative aspect-[4/3] w-full overflow-hidden">
                <img src={story.image} alt={story.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Dark overlay for better icon/badge contrast */}
                <div className="absolute inset-0 bg-forest/20 transition-opacity duration-300 group-hover:bg-forest/30" />

                {/* Play Button */}
                <button type="button" aria-label={`Play video story for ${story.name}`} className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-forest text-cream shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2">
                  <PlayIcon className="h-6 w-6 ml-1" fill="currentColor" />
                </button>

                {/* Metric Badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1.5 text-xs font-medium text-cream shadow-md">
                  <TrendingUpIcon className="h-3.5 w-3.5 text-lime" />
                  {story.badge}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <blockquote className="flex-1 text-lg leading-relaxed text-forest/80">
                  "{story.quote}"
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-forest">{story.name}</p>
                  <p className="text-sm text-forest/60">{story.place}</p>
                </div>
              </div>
            </Reveal>)}
        </div>
      </div>
    </section>;
}