# Yummy Food Time 🍕

A food order tracking app for Collin and Emily to manage and rate their takeout orders from DoorDash, Uber Eats, and restaurant apps.

## Features

- 📸 **Upload Order Screenshots** - Extract order details automatically using AI
- 🤖 **AI Food Assistant** - Get personalized recommendations based on your order history
- 📊 **Order History** - Track all orders with ratings and notes
- ⭐ **Rate & Review** - Star ratings and notes for each item
- 👥 **Shared Database** - Both users see the same data
- 🔗 **Restaurant Links** - Quick access to menus and locations
- 📱 **Mobile Friendly** - Works great on iOS

## How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it `yummy-food-time` (or any name you prefer)
4. Make it Public (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files

1. Download the `index.html` file from this folder
2. In your new GitHub repository, click "Add file" → "Upload files"
3. Drag and drop the `index.html` file
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Scroll down to **Pages** (in the left sidebar under "Code and automation")
3. Under "Source", select **Deploy from a branch**
4. Under "Branch", select **main** and **/root**
5. Click **Save**

### Step 4: Access Your App

After a few minutes, your app will be live at:
```
https://[your-username].github.io/yummy-food-time/
```

You can find the exact URL on the GitHub Pages settings page.

## How to Use

### Upload an Order

1. Click "Upload Order" on the home screen
2. Take a screenshot of your order from DoorDash, Uber Eats, or any restaurant app
3. Upload the image - the app will automatically extract:
   - Restaurant name
   - Order platform
   - Items and prices
   - Total cost
4. Review and edit the details if needed
5. Click "Save Order"

### Rate & Add Notes

1. Go to "Order History"
2. Click on any order to see details
3. Rate each item with stars (1-5)
4. Add notes about what you liked or didn't like

### Use the Food Assistant

1. Click "Ask Assistant" on the home screen
2. Type what you're in the mood for (e.g., "I want something spicy and filling")
3. The AI will suggest restaurants and dishes from your order history

### Switch Users

Click the user dropdown in the top right to toggle between Collin and Emily.

## Data Storage

- All data is stored using Claude's Artifact storage
- Data is **shared** between both users (Collin and Emily)
- Data persists across sessions
- **Important**: Keep the app URL the same to maintain your data

## Troubleshooting

### Images Not Uploading
- Make sure you're using a supported image format (JPG, PNG)
- Try using a screenshot rather than a photo of a screen
- Ensure the image is clear and readable

### Data Not Saving
- Check that you have a stable internet connection
- Try refreshing the page
- Clear your browser cache and try again

### Chatbot Not Working
- Make sure you have at least one order in your history
- Check your internet connection
- The chatbot uses your order history to make suggestions

## Privacy & Security

- Your order data is stored securely using Claude's storage system
- No login required - data is accessible to anyone with the URL
- Consider this when choosing what information to include in your orders
- The app runs entirely in your browser - your images are only sent to Claude's API for processing

## Updates

To update the app:
1. Download the new `index.html` file
2. In your GitHub repository, click on the existing `index.html`
3. Click the pencil icon (Edit this file)
4. Replace the content with the new version
5. Commit the changes
6. Your app will update automatically within a few minutes

## Support

If you encounter any issues:
1. Try refreshing the page
2. Clear your browser cache
3. Check that JavaScript is enabled in your browser
4. Make sure you're using a modern browser (Chrome, Safari, Firefox, Edge)

---

Built with ❤️ using React, Claude AI, and Tailwind CSS
