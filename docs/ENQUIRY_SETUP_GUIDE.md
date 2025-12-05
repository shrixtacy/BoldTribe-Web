# Enquiry Data Storage Setup Guide

This guide will help you set up a free solution to save all enquiry data from your website forms.

## Option 1: Google Sheets + Google Apps Script (Recommended)

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BoldTribe Enquiries"
4. The sheet will automatically have headers when the first enquiry is submitted

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste the code from `google-apps-script-template.js`
3. Save the project (Ctrl+S) and give it a name like "BoldTribe Enquiry Handler"

### Step 3: Deploy the Script
1. Click **Deploy** → **New Deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy**
6. Copy the **Web App URL** (this is your endpoint)

### Step 4: Update the Code
1. Open `src/services/enquiryService.ts`
2. Replace `YOUR_SCRIPT_ID` in the `GOOGLE_SCRIPT_URL` with your actual Web App URL
3. Save the file

### Step 5: Test the Setup
1. Submit a test enquiry from your website
2. Check your Google Sheet - you should see the data appear
3. Check your email for the notification

## Option 2: Airtable (Alternative)

### Step 1: Create Airtable Base
1. Go to [Airtable](https://airtable.com)
2. Create a new base called "BoldTribe Enquiries"
3. Create the following fields:
   - Name (Single line text)
   - Email (Email)
   - Company (Single line text)
   - Service (Single select: Web Development, Mobile Development, etc.)
   - Budget (Single select: $5,000 - $10,000, etc.)
   - Message (Long text)
   - Source (Single select: Home Page, Contact Page)
   - Timestamp (Date)

### Step 2: Get API Key
1. Go to [Airtable API](https://airtable.com/create/tokens)
2. Create a personal access token
3. Note down your Base ID from the API documentation

### Step 3: Update the Service
Replace the Google Sheets implementation in `enquiryService.ts` with Airtable API calls.

## Option 3: Formspree (Simplest)

### Step 1: Create Formspree Account
1. Go to [Formspree](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy the form endpoint URL

### Step 2: Update Forms
Replace the form action URLs in both forms with your Formspree endpoint.

## Option 4: Email-Only Fallback

The current implementation already includes email fallback. If the primary method fails, it will:
1. Show an error message
2. Open the user's email client with pre-filled content
3. Send the enquiry details to support@boldtribe.in

## Data Structure

Both forms will save the following data:
- **Name** (required)
- **Email** (required)
- **Company** (optional, contact page only)
- **Service** (optional, contact page only)
- **Budget** (optional, contact page only)
- **Message/Project Details** (required)
- **Source** (Home Page or Contact Page)
- **Timestamp** (automatically added)

## Features Included

✅ **Form Validation**: Required fields are validated
✅ **Loading States**: Users see loading indicators during submission
✅ **Success Feedback**: Confirmation messages after successful submission
✅ **Error Handling**: Graceful error handling with fallback options
✅ **Email Fallback**: If primary method fails, opens email client
✅ **Data Tracking**: Tracks which form was used (home vs contact page)
✅ **Responsive Design**: Works on all device sizes
✅ **Dark Mode Support**: Adapts to your theme

## Testing

1. Test both forms (Home page "Get in Touch" and Contact page "Tell Us About Your Project")
2. Verify data appears in your chosen storage solution
3. Check that email notifications are received
4. Test the fallback email functionality

## Troubleshooting

### Google Sheets not receiving data
- Check that the Web App URL is correct
- Ensure the script is deployed with "Anyone" access
- Check the Apps Script logs for errors

### Email fallback not working
- Ensure the user's device has an email client configured
- Check that the email address is correct

### Forms not submitting
- Check browser console for JavaScript errors
- Verify all required fields are filled
- Check network connectivity

## Security Notes

- The Google Apps Script endpoint is public but only accepts POST requests
- Email addresses are validated on the client side
- No sensitive data is stored in the frontend code
- Consider adding rate limiting for production use

## Next Steps

1. Choose your preferred storage method
2. Follow the setup guide for that method
3. Test thoroughly
4. Monitor the data collection
5. Set up regular backups if needed

For any issues, check the browser console and the Apps Script logs for error messages.
