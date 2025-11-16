import Link from 'next/link'

interface CourseData {
  slug: string
  title: string
  description: string
  price: number
  duration: string
  level: string
}

export default function CourseCard({ course }: { course: CourseData }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-sgma-navy/20">
      <div className="bg-sgma-navy h-40"></div>

      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className="text-xs bg-sgma-navy text-white px-3 py-1 rounded-full">
            {course.level}
          </span>
          <span className="text-xs bg-sgma-beige text-sgma-charcoal px-3 py-1 rounded-full">
            {course.duration}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-sgma-charcoal">{course.title}</h3>
        <p className="text-sgma-charcoal/70 text-sm mb-4">{course.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-sgma-navy">
              ₹{course.price}
            </p>
            <p className="text-xs text-sgma-charcoal/60">One-time payment</p>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="bg-sgma-cta text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
