import React from 'react'
import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Container,
  Body,
  Hr,
  Link,
} from '@react-email/components';

export const ContactEmailTemplate = ({
  name,
  email,
  company,
  message,
}:any) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo contacto de {name} - Nivora Tech</Preview>
      <Body style={{ margin: '0', padding: '0', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
          <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Heading style={{ color: '#333' }}>Nuevo Contacto</Heading>
          </Section>
          <Row>
            <Text style={{ color: '#555', marginBottom: '10px' }}>
              Nombre: {name}
            </Text>
          </Row>
          <Row>
            <Text style={{ color: '#555', marginBottom: '10px' }}>
              Email: {email}
            </Text>
          </Row>
          <Row>
            <Text style={{ color: '#555', marginBottom: '10px' }}>
              Empresa: {company || 'No especificada'}
            </Text>
          </Row>
          <Row>
            <Text style={{ color: '#555', marginBottom: '10px' }}>
              Mensaje:
            </Text>
            <Text style={{ color: '#555', whiteSpace: 'pre-wrap' }}>
              {message}
            </Text>
          </Row>
          <Hr style={{ marginTop: '20px', marginBottom: '20px' }} />
          <Section style={{ textAlign: 'center' }}>
            <Link href="https://nivoratech.com" style={{ color: '#007bff' }}>
              Visita nuestro sitio web
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
