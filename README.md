#Real Estate

Minimal React + Vite starter for the Hindu Sangamam invite site.

**Node:** v20.19.1 (use `nvm use` if you have `nvm` installed)

## Run

Start the dev server:

```bash
npm run dev
```

This runs the Vite dev server with hot reload. Open `http://localhost:5173` in your browser.

To show a short run note before the server starts (useful locally), run:

```bash
npm run dev
# prints a short message via the predev script, then starts Vite
```

## Notes

- Linting: run `npm run lint` to check code with ESLint.
- Build: run `npm run build` to produce a production build.

For more about React + Vite configuration and plugins, see the Vite documentation.

## Google Sheets Integration

To dynamically update properties on the website, we use a public Google Sheet as a CMS.

### Step 1: Prepare Your Google Sheet
1. Create a header row in your Google Sheet with the following columns (Order matters!):
   - **Column A**: Title
   - **Column B**: Price
   - **Column C**: Location
   - **Column D**: Beds (Number)
   - **Column E**: Baths (Number)
   - **Column F**: Area (e.g., "1200 sqft")
   - **Column G**: Image URL
   - **Column H**: Type (e.g., "Sale", "Rent", "Villa")
   - **Column I**: Description

2. **Rename the Tab**: Ensure the sheet tab name is **"Product"** (case-sensitive).

### Step 2: Make Google Sheet Public
1. Open your Google Sheet.
2. Click **Share** (top right corner).
3. Under "General access", switch from "Restricted" to **Anyone with the link**.
4. Set the role to **Viewer**.
5. Click **Done**.

### Step 3: Connect to the App
1. Copy the **Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/{YOUR_SHEET_ID_HERE}/gviz/tq?sheet={YOUR_SHEET_TAB_NAME_HERE}
   ```
2. Open `src/services/googleSheetsService.js`.
3. Update the `sheetId` variable with your copied ID:
   ```javascript
   const sheetId = "YOUR_SHEET_ID_HERE";
   sheetName = "YOUR_SHEET_TAB_NAME_HERE";
   ```

## Deployment (Netlify)

This project includes a `public/_redirects` file configured for Single Page Application (SPA) routing on Netlify.

- **File**: `public/_redirects`
- **Content**: `/*  /index.html  200`
- **Purpose**: Ensures that refreshing pages like `/properties` works correctly by redirecting all requests to `index.html` (so React Router can handle them).

When deploying, simply connect your repository to Netlify. The `dist` folder created by `npm run build` will automatically include this file.

## Google Drive Image Hosting

To **display a Google Drive image on a web page**, you must convert the normal Drive sharing link into a **direct viewable image URL**. Below are the **correct, working ways**.

### Method 1: Convert Google Drive Link (Most Common)

#### Step 1: Set Image Permission
1. Right-click image in Google Drive
2. **Get link → Anyone with the link → Viewer**

#### Step 2: Copy Share Link
Example:
```
https://drive.google.com/file/d/1AbCDeFGhIjKLMnoPQRstuVWxyz/view?usp=sharing
```

#### Step 3: Convert to Direct Image URL
Extract the **FILE_ID**: `1AbCDeFGhIjKLMnoPQRstuVWxyz`

Use this URL:
```
https://drive.google.com/uc?export=view&id=FILE_ID
```
*Works in HTML & React. No API key required.*

### Method 2: Use Google Drive Thumbnail (Fast & Optimized)

```html
<img src="https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000" alt="Drive Image" />
```

**Resize Options:**
- 200px: `sz=w200`
- 500px: `sz=w500`
- Full: `sz=w1000`

### ⚠️ Common Mistakes
- ❌ Using `https://drive.google.com/file/d/FILE_ID/view` directly (won't work).
- ❌ Image permission set to **Restricted**.

### Best Practice
- **Personal / Demo**: Use `uc?export=view`
- **Faster Load**: Use `thumbnail`
