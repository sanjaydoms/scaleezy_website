import React from 'react';
import { Chapter, Rise } from './Chapter';
import BookingFormCard from '../BookingFormCard';

export default function DemoChapter() {
  return (
    <Chapter id="book-demo" bg="var(--color-accent)" logo="mono" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <Rise as="h2" className="t-head">See it with your own stock.</Rise>
          <Rise as="p" delay={0.08} className="t-body mt-8 max-w-[40ch]">
            A 20-minute walkthrough, set up for your kind of store, in the language you prefer. We confirm a time by email.
          </Rise>
          <Rise delay={0.16} className="mt-10 hidden lg:block">
            <img
              src="/ee56d119-f596-4bf8-8ec7-d30b01593ff3.jpg"
              alt="A woman in a bottle-green silk saree"
              width="896" height="1200" loading="lazy"
              className="w-[70%] aspect-[4/5] object-cover"
            />
          </Rise>
        </div>
        <Rise delay={0.12} className="col-span-12 lg:col-span-7">
          <BookingFormCard showHeader={false} />
        </Rise>
      </div>
    </Chapter>
  );
}
