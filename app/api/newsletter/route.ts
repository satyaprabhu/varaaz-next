import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate name
    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Please provide your name' },
        { status: 400 }
      )
    }

    const brevoApiKey = process.env.BREVO_API_KEY
    const brevoListId = process.env.BREVO_LIST_ID

    if (!brevoApiKey || !brevoListId) {
      console.error('Missing Brevo API credentials')
      return NextResponse.json(
        { error: 'Newsletter service is not configured. Please try again later.' },
        { status: 500 }
      )
    }

    // Send to Brevo API
    console.log('Sending to Brevo:', { email, name, listId: brevoListId })

    // Parse name into first and last name
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || ''

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        listIds: [parseInt(brevoListId)],
        updateEnabled: true, // Update contact if already exists
      }),
    })

    const responseText = await brevoResponse.text()
    console.log('Brevo response status:', brevoResponse.status)
    console.log('Brevo response text:', responseText)

    let brevoData: { code?: string; message?: string; id?: string } = {}
    if (responseText) {
      brevoData = JSON.parse(responseText)
    }

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', brevoResponse.status, brevoData)

      // Handle specific Brevo errors
      if (brevoData.code === 'duplicate_parameter') {
        return NextResponse.json(
          { success: true, message: 'You are already subscribed to our newsletter.' },
          { status: 200 }
        )
      }

      return NextResponse.json(
        { error: brevoData.message || 'Failed to subscribe. Please try again.' },
        { status: brevoResponse.status }
      )
    }

    console.log('Newsletter subscription successful:', { email, brevoId: brevoData.id })

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    )
  }
}
