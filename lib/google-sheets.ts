// Google Sheets utility - writes booking and payment data
import { GoogleSpreadsheet } from 'google-spreadsheet'

let doc: GoogleSpreadsheet | null = null
let initialized = false
let initError: string | null = null

async function initializeSheet() {
  if (initialized && !doc) {
    throw new Error(initError || 'Google Sheets not configured')
  }

  if (doc) return doc

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!serviceAccountEmail || !privateKey || !sheetId) {
    initialized = true
    initError = 'Missing Google Sheets credentials in environment variables'
    throw new Error(initError)
  }

  try {
    // Use google-spreadsheet's built-in JWT support
    const jwt = (GoogleSpreadsheet as any).jwt({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    doc = new GoogleSpreadsheet(sheetId, jwt)
    await doc.loadInfo()
    initialized = true
    return doc
  } catch (error) {
    initialized = true
    initError = error instanceof Error ? error.message : 'Failed to initialize Google Sheets'
    throw error
  }
}

export async function addBooking(data: {
  name: string
  email: string
  date: string
  time: string
  topic: string
  notes?: string
}) {
  try {
    const sheet = await initializeSheet()
    const worksheets = sheet.sheetsByTitle
    const bookingSheet = worksheets['Bookings'] || sheet.sheetsByIndex[0]

    if (!bookingSheet) {
      throw new Error('Bookings sheet not found')
    }

    await bookingSheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: data.name,
      Email: data.email,
      Date: data.date,
      Time: data.time,
      Topic: data.topic,
      Notes: data.notes || '',
      Status: 'Pending',
    })

    return { success: true }
  } catch (error) {
    console.error('Error adding booking to Google Sheets:', error)
    throw error
  }
}

export async function addPayment(data: {
  email: string
  amount: number
  orderId: string
  paymentId: string
  courseId: string
  courseName: string
}) {
  try {
    const sheet = await initializeSheet()
    const worksheets = sheet.sheetsByTitle
    const paymentSheet = worksheets['Payments'] || sheet.sheetsByIndex[0]

    if (!paymentSheet) {
      throw new Error('Payments sheet not found')
    }

    await paymentSheet.addRow({
      Timestamp: new Date().toISOString(),
      Email: data.email,
      Amount: data.amount,
      OrderId: data.orderId,
      PaymentId: data.paymentId,
      CourseId: data.courseId,
      CourseName: data.courseName,
      Status: 'Completed',
    })

    return { success: true }
  } catch (error) {
    console.error('Error adding payment to Google Sheets:', error)
    throw error
  }
}
