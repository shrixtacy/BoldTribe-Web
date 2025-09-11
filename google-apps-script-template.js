// Google Apps Script Code Template
// Copy this code into your Google Apps Script project

function doPost(e) {
  try {
    // Get the data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (you'll need to create this first)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([
        ['Timestamp', 'Name', 'Email', 'Company', 'Service', 'Budget', 'Message', 'Source']
      ]);
    }
    
    // Add the new enquiry data
    const newRow = [
      data.timestamp,
      data.name,
      data.email,
      data.company || '',
      data.service || '',
      data.budget || '',
      data.message,
      data.source
    ];
    
    sheet.appendRow(newRow);
    
    // Send email notification
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Enquiry saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Error processing enquiry' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
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

---
This enquiry has been automatically saved to your Google Sheet.
  `.trim();
  
  // Send email to your team
  GmailApp.sendEmail(
    'support@boldtribe.in', // Your email address
    subject,
    emailBody
  );
}

// Test function to verify the script works
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    service: 'Web Development',
    budget: '$10,000 - $25,000',
    message: 'This is a test enquiry',
    source: 'contact'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
