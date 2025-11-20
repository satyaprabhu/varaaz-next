'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 'varalakshmi',
    name: 'Varalakshmi Bharanidharan',
    title: 'Founder SGMA Studios',
    role: 'Art Therapist',
    image: '/images/varalakshmi.png',
    bio: 'Varalakshmi is the visionary founder of SGMA Studio with extensive expertise in sacred geometry and mandala art. Her passion for bridging ancient Vedic wisdom with contemporary art therapy has transformed the lives of thousands of students worldwide.',
    socials: {
      website: 'https://www.varaaz.com',
      instagram: 'https://www.instagram.com/varaazart2023/',
      facebook: 'https://www.facebook.com/varaazstudio',
      youtube: 'https://www.youtube.com/@varaazart.mandalaartinfusi6084',
    },
  },
  {
    id: 'jayasri',
    name: 'Jayasri Suresh',
    title: 'MDA Remedial Learning Centre',
    role: 'Senior Special Educator & Assessor',
    image: '/images/jayasri.png',
    bio: 'Jayasri brings specialized expertise in remedial learning and assessment. Her unique approach combines educational psychology with mandala art, making sacred geometry accessible to learners of all abilities.',
    socials: {
      instagram: null,
      linkedin: null,
      twitter: null,
    },
  },
  {
    id: 'ramya',
    name: 'Ramya Ravindran',
    title: 'Conceptual Mandala Artist',
    role: 'Art Therapist',
    image: '/images/ramya.png',
    bio: 'Ramya is a talented conceptual mandala artist whose creative vision pushes the boundaries of traditional sacred geometry. Her innovative techniques and deep understanding of color symbolism inspire students to explore new artistic horizons.',
    socials: {
      instagram: null,
      linkedin: null,
      twitter: null,
    },
  },
  {
    id: 'jayanthi',
    name: 'Jayanthi V. Menon',
    title: 'Dexio LabX, Director',
    role: 'Waldorf Educator',
    image: '/images/jayanthi.png',
    bio: 'Jayanthi brings a holistic educational philosophy grounded in Waldorf principles. Her integrative approach combines art, mathematics, and spirituality, creating a transformative learning experience.',
    socials: {
      instagram: null,
      linkedin: null,
      twitter: null,
    },
  },
]

export default function TeamSection() {
  const [selectedId, setSelectedId] = useState('varalakshmi')
  const [autoRotate, setAutoRotate] = useState(false)
  const selectedMember = teamMembers.find(m => m.id === selectedId)

  // Auto-rotate team members every 5 seconds
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setSelectedId(prevId => {
        const currentIndex = teamMembers.findIndex(m => m.id === prevId)
        const nextIndex = (currentIndex + 1) % teamMembers.length
        return teamMembers[nextIndex].id
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRotate])

  // Handle manual selection
  const handleTabClick = (memberId: string) => {
    setSelectedId(memberId)
  }

  return (
    <div className="mb-20">
      <h2 className="text-h2 md:text-h1 font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
        Core Team - SGMA Studio
      </h2>

      <div className="mb-12">
        {/* Team Member Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-start md:justify-start">
          {teamMembers.map(member => (
            <button
              key={member.id}
              onClick={() => handleTabClick(member.id)}
              className={`px-6 py-2 rounded-lg font-semibold uppercase tracking-widest text-sm transition-all duration-300 ${
                selectedId === member.id
                  ? 'bg-sgma-cta text-white shadow-lg shadow-sgma-cta/50'
                  : 'bg-white/60 border-2 border-sgma-cta/30 text-sgma-cta hover:border-sgma-cta'
              }`}
            >
              {member.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 items-start">
        {/* Left Column - Team Member Image */}
        {selectedMember && (
          <div className="md:sticky md:top-0">
            <div className="relative w-full md:w-60 h-60 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Team Member Info */}
        {selectedMember && (
          <div className="md:col-span-3">
            <div className="animate-fadeIn">
              <h3 className="text-2xl md:text-3xl font-black text-sgma-charcoal mb-2 uppercase tracking-tight">
                {selectedMember.name}
              </h3>
              <p className="text-sgma-cta font-bold text-lg mb-1">{selectedMember.title}</p>
              <p className="text-sgma-navy font-semibold text-sm mb-6">{selectedMember.role}</p>

              <p className="text-sgma-charcoal leading-relaxed text-base mb-8">
                {selectedMember.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mb-8 flex-wrap">
                {selectedMember.socials.website && (
                  <a
                    href={selectedMember.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sgma-cta/20 flex items-center justify-center text-sgma-cta hover:bg-sgma-cta hover:text-white transition-all duration-300"
                    aria-label="Website"
                    title="Website"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm2.854 7.063l2.25 2.25c.322.321.322.843 0 1.165l-2.25 2.25c-.322.321-.844.321-1.166 0l-2.25-2.25c-.321-.322-.321-.844 0-1.165l2.25-2.25c.322-.321.844-.321 1.166 0zm-5.708 0l2.25 2.25c.321.321.321.843 0 1.165l-2.25 2.25c-.322.321-.843.321-1.165 0l-2.25-2.25c-.321-.322-.321-.844 0-1.165l2.25-2.25c.322-.321.843-.321 1.165 0z"/>
                    </svg>
                  </a>
                )}
                {selectedMember.socials.instagram && (
                  <a
                    href={selectedMember.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sgma-cta/20 flex items-center justify-center text-sgma-cta hover:bg-sgma-cta hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                )}
                {selectedMember.socials.facebook && (
                  <a
                    href={selectedMember.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sgma-cta/20 flex items-center justify-center text-sgma-cta hover:bg-sgma-cta hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {selectedMember.socials.youtube && (
                  <a
                    href={selectedMember.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sgma-cta/20 flex items-center justify-center text-sgma-cta hover:bg-sgma-cta hover:text-white transition-all duration-300"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
              </div>

              <div className="pt-6 border-t border-sgma-navy/20">
                <p className="text-sm text-sgma-navy font-semibold">Learn more about their expertise in our courses</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
