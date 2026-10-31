import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Chapter, Rise } from './Chapter';

const ON_THE_PHONE = ['Manage inventory', 'Track orders', 'Talk to customers', 'Read the day’s numbers'];

export default function MobileChapter() {
  return (
    <Chapter bg="var(--color-stone)" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-12 gap-x-6 gap-y-12 items-center">
        <div className="col-span-12 lg:col-span-5">
          <Rise as="h2" className="t-head">Your store, in your pocket.</Rise>
          <Rise as="p" delay={0.08} className="t-body mt-8 max-w-[40ch]">
            Inventory, orders, customers and the day's numbers from your phone, whether you are on the shop floor, at the mill or at home.
          </Rise>
          <Rise as="ul" delay={0.16} className="mt-8 t-lead space-y-2">
            {ON_THE_PHONE.map(item => <li key={item}>{item}</li>)}
          </Rise>
          <Rise delay={0.24} className="mt-10">
            <a href="#book-demo" className="btn btn-dark">Book a demo <ArrowRight size={18} aria-hidden="true" /></a>
          </Rise>
        </div>
        <Rise delay={0.12} className="col-span-12 lg:col-span-7">
          <img
            src="/scaleezy-app-showcase.jpg"
            alt="The Scaleezy app on two phones showing orders and boutique stock"
            width="1024" height="522" loading="lazy"
            className="w-full"
          />
        </Rise>
      </div>
    </Chapter>
  );
}
