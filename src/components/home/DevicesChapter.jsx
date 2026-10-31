import React from 'react';
import { Chapter, Rise } from './Chapter';

export default function DevicesChapter() {
  return (
    <Chapter bg="var(--color-stone)" className="pt-28 lg:pt-36 pb-16">
      <div className="wrap grid grid-cols-12 gap-x-6 gap-y-8 items-end">
        <Rise as="h2" className="col-span-12 lg:col-span-7 t-head">Every reason to run on Scaleezy.</Rise>
        <Rise as="p" delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9 t-body max-w-[40ch]">
          Inventory, customers and orders on the laptop at the counter, the tablet on the floor and the phone in your pocket.
        </Rise>
      </div>
      <Rise delay={0.12} className="wrap mt-12">
        <img
          src="/assets/dashboard_devices.png"
          alt="Scaleezy's customer and inventory screens on a laptop, a tablet and a phone"
          width="1024" height="682" loading="lazy"
          className="w-full max-w-[1200px] mx-auto"
        />
      </Rise>
    </Chapter>
  );
}
