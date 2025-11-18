'use client'

interface Testimonial {
  id: string
  quote: string
  author: string
  initials: string
  title: string
  location: string
  course: string
  rating: number
  bgColor: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'I went from staring at blank pages with anxiety to completing my first Flower of Life mandala in just 3 weeks. The step-by-step guidance gave me confidence I didn\'t know I had. Now I use mandala art daily as my meditation practice.',
    author: 'Priya Sharma',
    initials: 'PS',
    title: 'Art Therapist',
    location: 'Chennai',
    course: 'Flower of Life Mastery Graduate',
    rating: 5,
    bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500'
  },
  {
    id: '2',
    quote: 'After 15 years of mindfulness practice, I finally found a method that combines meditation with creative expression. Varalakshmi\'s teaching connects Vedic principles to every compass stroke—nothing is arbitrary. I\'ve created 12 mandalas in 2 months and my clients notice the difference in my presence.',
    author: 'Rajesh Kumar',
    initials: 'RK',
    title: 'Mindfulness Coach',
    location: 'Bangalore',
    course: '8 Mandala Journey Graduate',
    rating: 5,
    bgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500'
  },
  {
    id: '3',
    quote: 'As a graphic designer, I thought I knew geometry. I was wrong. This course taught me the sacred why behind the patterns. I\'ve incorporated these principles into my client work, and one design won a regional award. Beyond skills, I gained a daily practice that centers me.',
    author: 'Ananya Patel',
    initials: 'AP',
    title: 'Graphic Designer',
    location: 'Mumbai',
    course: 'Sacred Torus Foundations + 8 Mandala Journey',
    rating: 5,
    bgColor: 'bg-gradient-to-br from-purple-400 to-violet-500'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-4 px-4 bg-white relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-1 bg-sgma-cta/10 border border-sgma-cta/30 rounded-full text-xs font-semibold tracking-widest text-sgma-cta uppercase">
            Student Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-sgma-charcoal">
            From Blank Pages to<span className="text-sgma-navy"> Beautiful Mandalas</span>
          </h2>
          <p className="text-lg text-sgma-charcoal/70 max-w-2xl mx-auto">
            Hear from students who discovered calm, creativity, and confidence through sacred geometry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>

              {/* Card */}
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-cta/20 group-hover:border-sgma-cta/40 rounded-xl p-6 transition-all duration-300 h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-sgma-cta text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sgma-charcoal italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-sgma-navy/20 flex items-center gap-3">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sgma-charcoal text-sm">{testimonial.author}</p>
                    <p className="text-xs text-sgma-charcoal/60 uppercase tracking-widest font-semibold">
                      {testimonial.title}, {testimonial.location}
                    </p>
                    <p className="text-xs text-sgma-cta uppercase tracking-widest font-semibold mt-1">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-1 bg-sgma-navy/30"></div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sgma-charcoal/70 mb-4">Ready to start your transformation?</p>
          <a href="/bookings" className="inline-block bg-sgma-cta text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
            Book Your Session Today
          </a>
        </div>
      </div>
    </section>
  )
}
