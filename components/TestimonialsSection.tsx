'use client'

interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'The Flower of Life course transformed my understanding of sacred geometry. I now see the universe in a completely different way. Truly life-changing!',
    author: 'Priya Sharma',
    title: 'Art Therapist & Student',
    rating: 5
  },
  {
    id: '2',
    quote: 'Varalakshmi\'s teaching methodology is unparalleled. Her blend of Vedic science with practical mandala creation is the most comprehensive approach I\'ve encountered.',
    author: 'Rajesh Kumar',
    title: 'Mindfulness Practitioner',
    rating: 5
  },
  {
    id: '3',
    quote: 'The 8 Mandala Journey was intense, rewarding, and deeply transformative. I\'ve gained not just artistic skills but spiritual insight. Highly recommended!',
    author: 'Ananya Patel',
    title: 'Graphic Designer & Seeker',
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-1 bg-yellow-200/20 border border-yellow-300/50 rounded-full text-xs font-semibold tracking-widest text-yellow-200 uppercase">
            Student Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight text-white">
            Transform Your<span className="text-yellow-300"> Consciousness</span>
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Hear from students and seekers who have embarked on their transformative journey with SGMA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>

              {/* Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-sm border-2 border-yellow-400/30 group-hover:border-yellow-300 rounded-xl p-6 transition-all duration-300 h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-200 italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-yellow-400/20">
                  <p className="font-bold text-white text-sm">{testimonial.author}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-300 mb-4">Ready to start your transformation?</p>
          <a href="/bookings" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300">
            Book Your Session Today
          </a>
        </div>
      </div>
    </section>
  )
}
