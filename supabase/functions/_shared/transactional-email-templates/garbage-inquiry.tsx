import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Muskoka Improvements"

interface GarbageInquiryProps {
  type?: string
  name?: string
  email?: string
  phone?: string
  island?: string
  message?: string
}

const GarbageInquiryEmail = ({ type, name, email, phone, island, message }: GarbageInquiryProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      {type === 'bin'
        ? `New bin order from ${name || 'a customer'}`
        : `New garbage service inquiry from ${name || 'a customer'}`}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {type === 'bin' ? '🗑️ New Bin Order' : '📋 New Service Inquiry'}
        </Heading>
        <Hr style={hr} />
        <Section style={section}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || 'Not provided'}</Text>
        </Section>
        <Section style={section}>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || 'Not provided'}</Text>
        </Section>
        {phone && (
          <Section style={section}>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone}</Text>
          </Section>
        )}
        <Section style={section}>
          <Text style={label}>Island / Location</Text>
          <Text style={value}>{island || 'Not provided'}</Text>
        </Section>
        {message && (
          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </Section>
        )}
        <Hr style={hr} />
        <Text style={footer}>
          This is an automated notification from {SITE_NAME}. 
          Submitted via the Weekly Garbage & Recycling page.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: GarbageInquiryEmail,
  subject: (data: Record<string, any>) =>
    data.type === 'bin'
      ? `New Bin Order — ${data.name || 'Customer'}`
      : `New Garbage Inquiry — ${data.name || 'Customer'}`,
  displayName: 'Garbage service inquiry / bin order',
  to: 'work@muskokaimprovements.com',
  previewData: {
    type: 'inquiry',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(705) 555-0123',
    island: 'Browning Island',
    message: 'Interested in weekly pickup for our cottage.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '520px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1a2e', margin: '0 0 8px' }
const hr = { borderColor: '#e5e5e5', margin: '20px 0' }
const section = { marginBottom: '4px' }
const label = { fontSize: '11px', fontWeight: '600' as const, color: '#888888', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 2px' }
const value = { fontSize: '15px', color: '#1a1a2e', margin: '0 0 12px', lineHeight: '1.5' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0', lineHeight: '1.4' }
