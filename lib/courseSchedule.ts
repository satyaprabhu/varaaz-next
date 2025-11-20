/**
 * Course Schedule - Master Data Source
 * This is the single source of truth for all course batch dates.
 * Update dates here and they will automatically sync across the entire site.
 */

export interface CourseSession {
  id: string
  name: string
  batchDate: string
  icon?: string
}

export const COURSE_SESSIONS: CourseSession[] = [
  {
    id: 'flower-of-life',
    name: 'Flower of Life Mastery',
    batchDate: 'Dec 1, 2025',
    icon: '🌸',
  },
  {
    id: 'sacred-torus',
    name: 'Sacred Torus Foundations',
    batchDate: 'Dec 8, 2025',
    icon: '🔄',
  },
  {
    id: '8-mandala-journey',
    name: '8 Mandala Journey',
    batchDate: 'Dec 1, 2025',
    icon: '✨',
  },
]

/**
 * Get the next batch date for a specific course
 */
export function getCourseBatchDate(courseId: string): string | undefined {
  const course = COURSE_SESSIONS.find(c => c.id === courseId)
  return course?.batchDate
}

/**
 * Get all courses with their batch dates
 */
export function getAllCourseSessions(): CourseSession[] {
  return COURSE_SESSIONS
}
