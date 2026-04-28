import AboutFounder from "@/components/sections/AboutFounder";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
          About GetsStuffDone
        </h1>
        <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
          We build operational systems for oilfield and industrial services SMBs in the Texas, Oklahoma, and Louisiana corridor.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 mt-16">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900">Our approach</h2>
          <p className="mt-4 text-zinc-600">
            We do not believe in massive digital transformations that take 2 years and end up confusing your field workers. 
            We believe in specific, high-impact systems installed in 6 weeks that solve exactly one operational bottleneck at a time.
          </p>
          <ul className="mt-6 space-y-4 text-zinc-700">
            <li className="flex gap-2 border-l-2 border-teal-600 pl-4">
              <strong>CTO-level architecture:</strong> 20 years of enterprise data experience, applied to your SMB.
            </li>
            <li className="flex gap-2 border-l-2 border-teal-600 pl-4">
              <strong>Mobile-first execution:</strong> If it doesn&apos;t work offline on a cracked screen with gloves on, we don&apos;t ship it.
            </li>
            <li className="flex gap-2 border-l-2 border-teal-600 pl-4">
              <strong>Transparent pricing:</strong> Flat fees for implementations. No hourly billing surprises.
            </li>
          </ul>
        </div>
        
        <div>
          <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-200">
            <h3 className="text-xl font-bold text-zinc-900">Pricing Bands</h3>
            <p className="mt-2 text-zinc-600">We don&apos;t do &quot;$500/hr consulting&quot;. We install fixed-scope products.</p>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                <span className="font-semibold text-zinc-900">Foundations Engagement</span>
                <span className="font-bold text-teal-600">From $25K</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                <span className="font-semibold text-zinc-900">Core Systems Overhaul</span>
                <span className="font-bold text-teal-600">From $45K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-zinc-900">Managed Automation</span>
                <span className="font-bold text-teal-600">Custom Retainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <AboutFounder />
      </div>
    </div>
  );
}
