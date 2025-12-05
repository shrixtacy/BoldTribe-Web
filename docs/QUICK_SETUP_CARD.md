# Quick Setup Reference Card

## 🚀 Quick Setup Checklist

### 1. Google Sheet
- [ ] Create new Google Sheet named "BoldTribe Enquiries"
- [ ] Keep tab open

### 2. Google Apps Script
- [ ] Extensions → Apps Script
- [ ] Delete default code
- [ ] Paste code from `google-apps-script-template.js`
- [ ] Save as "BoldTribe Enquiry Handler"

### 3. Deploy Script
- [ ] Deploy → New deployment
- [ ] Type: Web app
- [ ] Execute as: Me
- [ ] Who has access: Anyone
- [ ] Deploy
- [ ] Copy Web App URL

### 4. Update Code
- [ ] Open `src/services/enquiryService.ts`
- [ ] Replace `YOUR_SCRIPT_ID` with actual URL
- [ ] Save file

### 5. Test
- [ ] Test home page form
- [ ] Test contact page form
- [ ] Check Google Sheet for data
- [ ] Check email for notifications

## 🔗 Important URLs

- **Google Sheets**: https://sheets.google.com
- **Google Apps Script**: https://script.google.com
- **Your Sheet**: [Your BoldTribe Enquiries sheet]
- **Your Script URL**: `https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec`

## 📧 Email Notifications

All enquiries will be sent to: **support@boldtribe.in**

## 🛠️ Troubleshooting

- **No data in sheet**: Check URL and permissions
- **Permission errors**: Re-authorize the script
- **Form errors**: Check browser console
- **Test script**: Run `testScript` function in Apps Script

## 📊 Data Captured

- Name, Email, Company, Service, Budget, Message
- Source (Home Page or Contact Page)
- Timestamp (automatic)

## ⚡ Quick Test

1. Fill out any form on your website
2. Submit it
3. Check your Google Sheet
4. Check your email

**Setup time: ~10-15 minutes**
