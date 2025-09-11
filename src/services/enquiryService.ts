// Enquiry Service for handling form submissions
// This service will send data to Google Apps Script endpoint

export interface EnquiryData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  source: 'home' | 'contact'; // Track which form was used
  timestamp: string;
}

// Google Apps Script endpoint URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVjQVOjOwErqgodrnl1dtnREnN_-CJ9fWQ7w8dmtzS9MwXDtlo_a4eK-DCGDCzinn-/exec';

export const submitEnquiry = async (data: Omit<EnquiryData, 'timestamp'>): Promise<{ success: boolean; message: string }> => {
  try {
    const enquiryData: EnquiryData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiryData),
    });

    // Since we're using no-cors mode, we can't read the response
    // But we can assume success if no error is thrown
    return {
      success: true,
      message: 'Thank you for your enquiry! We will get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return {
      success: false,
      message: 'Sorry, there was an error submitting your enquiry. Please try again or contact us directly.',
    };
  }
};

// Alternative: Email-based submission (fallback)
export const submitEnquiryViaEmail = (data: Omit<EnquiryData, 'timestamp'>): void => {
  const subject = `New Enquiry from ${data.name} - ${data.source === 'home' ? 'Home Page' : 'Contact Page'}`;
  
  const emailBody = `
New enquiry received:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Service: ${data.service || 'Not specified'}
Budget: ${data.budget || 'Not specified'}
Source: ${data.source === 'home' ? 'Home Page (Get in Touch)' : 'Contact Page (Tell Us About Your Project)'}
Timestamp: ${new Date().toLocaleString()}

Message:
${data.message}
  `.trim();

  const mailtoUrl = `mailto:support@boldtribe.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
  window.open(mailtoUrl, '_blank');
};
