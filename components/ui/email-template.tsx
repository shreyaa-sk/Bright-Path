import React from 'react';

// Define a set of styles for the email layout
const styles = {
  container: {
    backgroundColor: '#E66B2D', // BrightPath's orange background
    color: '#FFFFFF', // White text color
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#FFFFFF',
    color: '#333333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sectionHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#FF6600', // BrightPath orange for section headers
  },
  paragraph: {
    marginBottom: '8px',
    fontSize: '16px',
  },
  footer: {
    marginTop: '40px',
    fontSize: '14px',
    textAlign: 'center',
  },
};

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  card: string;
  income: string;
  phone: string;
  message: string;
}

// The email template component
export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  lastName,
  email,
  card,
  income,
  phone,
  message,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header section */}
        <h1 style={styles.sectionHeader}>Thank You for Your Application, {firstName}!</h1>
        <p style={styles.paragraph}>
          Your application for the <strong>{card}</strong> has been successfully received. We will review your details and get back to you soon.
        </p>

        {/* User details section */}
        <h2 style={styles.sectionHeader}>Application Details</h2>
        <p style={styles.paragraph}>
          <strong>Credit Card Type:</strong> {firstName}
        </p>
        <p style={styles.paragraph}>
          <strong>Full Name:</strong> {lastName}
        </p>
        <p style={styles.paragraph}>
          <strong>Email:</strong> {email}
        </p>

        {/* User message section */}
        <h2 style={styles.sectionHeader}>Your Message</h2>
        <p style={styles.paragraph}>
          <strong>Income Details:</strong> {message || 'No message provided'}
        </p>
      </div>

    </div>
  );
};
