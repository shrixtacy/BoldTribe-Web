# Google Sheets + Apps Script Setup - Step by Step Guide

## Prerequisites
- A Google account
- Access to Google Sheets and Google Apps Script
- Your website code editor

## Step 1: Create Google Sheet

1. **Open Google Sheets**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Sign in with your Google account

2. **Create New Spreadsheet**
   - Click the "+" button or "Blank" to create a new spreadsheet
   - Name it "BoldTribe Enquiries"

3. **Keep This Tab Open**
   - Don't close this tab - you'll need it for the next steps

## Step 2: Set Up Google Apps Script

1. **Open Apps Script**
   - In your Google Sheet, go to **Extensions** → **Apps Script**
   - This will open a new tab with the Apps Script editor

2. **Clear Default Code**
   - Delete all the existing code in the editor (the default `myFunction` code)

3. **Paste Our Code**
   - Copy the entire code from `google-apps-script-template.js` file
   - Paste it into the Apps Script editor

4. **Save the Project**
   - Press `Ctrl+S` (or `Cmd+S` on Mac)
   - Name it "BoldTribe Enquiry Handler"
   - Click "OK"

## Step 3: Deploy the Script

1. **Click Deploy**
   - In the Apps Script editor, click the **Deploy** button
   - Select **New deployment**

2. **Configure Deployment**
   - **Type**: Select "Web app"
   - **Execute as**: Select "Me" (your email address)
   - **Who has access**: Select "Anyone"
   - Click **Deploy**

3. **Authorize the Script**
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to BoldTribe Enquiry Handler (unsafe)"
   - Click "Allow"

4. **Copy the Web App URL**
   - After deployment, you'll see a Web App URL
   - It will look like: `https://script.google.com/macros/s/ABC123DEF456/exec`
   - **Copy this URL** - you'll need it for the next step

## Step 4: Update Your Website Code

1. **Open the Enquiry Service File**
   - Navigate to `src/services/enquiryService.ts` in your project

2. **Replace the URL**
   - Find this line:
     ```typescript
     const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
     ```
   - Replace `YOUR_SCRIPT_ID` with your actual Web App URL
   - Example:
     ```typescript
     const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC123DEF456/exec';
     ```

3. **Save the File**
   - Save the changes

## Step 5: Test the Setup

1. **Test the Google Apps Script**
   - In the Apps Script editor, click the "Run" button next to `testScript`
   - Check the logs to see if it works (View → Logs)
   - You should see "Test result: ..." in the logs

2. **Test Your Website Forms**
   - Go to your website
   - Fill out the "Get in Touch" form on the home page
   - Submit it
   - Check your Google Sheet - you should see the data appear
   - Check your email for a notification

3. **Test the Contact Page Form**
   - Go to the contact page
   - Fill out the "Tell Us About Your Project" form
   - Submit it
   - Check your Google Sheet again

## Step 6: Verify Everything Works

### Check Your Google Sheet
- Open your "BoldTribe Enquiries" sheet
- You should see columns: Timestamp, Name, Email, Company, Service, Budget, Message, Source
- New enquiries should appear as new rows

### Check Email Notifications
- You should receive an email at support@boldtribe.in for each enquiry
- The email will contain all the form details

### Check Website Behavior
- Forms should show loading states while submitting
- Success messages should appear after submission
- Error messages should appear if something goes wrong
- Email fallback should work if Google Sheets fails

## Troubleshooting

### If Google Sheets isn't receiving data:
1. **Check the URL**: Make sure you copied the correct Web App URL
2. **Check Permissions**: Ensure the script is deployed with "Anyone" access
3. **Check Logs**: In Apps Script, go to View → Logs to see any errors
4. **Test the Script**: Run the `testScript` function to verify it works

### If you get permission errors:
1. **Re-authorize**: Go to Apps Script → Deploy → Manage deployments
2. **Edit**: Click the edit icon (pencil)
3. **Redeploy**: Change the version to "New" and deploy again
4. **Re-authorize**: You may need to authorize again

### If forms show errors:
1. **Check Console**: Open browser developer tools (F12) and check the Console tab
2. **Check Network**: Look for failed requests in the Network tab
3. **Verify URL**: Double-check the Google Apps Script URL is correct

## What Happens When Someone Submits a Form?

1. **User fills out form** on your website
2. **Form data is sent** to your Google Apps Script
3. **Data is saved** to your Google Sheet automatically
4. **Email notification** is sent to support@boldtribe.in
5. **User sees success message** on the website
6. **If Google Sheets fails**, email client opens as fallback

## Data Structure in Google Sheet

| Timestamp | Name | Email | Company | Service | Budget | Message | Source |
|-----------|------|-------|---------|---------|--------|---------|--------|
| 2024-01-15T10:30:00Z | John Doe | john@example.com | Acme Corp | Web Development | $10,000 - $25,000 | I need a website... | contact |
| 2024-01-15T11:45:00Z | Jane Smith | jane@example.com | | | | Looking for mobile app... | home |

## Security Notes

- The Google Apps Script endpoint is public but only accepts POST requests
- No sensitive data is stored in your website code
- All data is stored securely in your Google Sheet
- You can control access to the sheet through Google Sheets sharing settings

## Next Steps After Setup

1. **Monitor the Sheet**: Check regularly for new enquiries
2. **Set Up Notifications**: You can set up additional Google Sheets notifications
3. **Backup Data**: Consider exporting data periodically
4. **Customize Email**: Modify the email template in the Apps Script if needed

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Check the Apps Script logs
3. Verify all URLs are correct
4. Make sure permissions are set correctly

The setup should take about 10-15 minutes total. Once it's working, you'll have a robust system for capturing and managing all your website enquiries!
