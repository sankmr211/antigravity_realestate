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
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```
2. Open `src/services/googleSheetsService.js`.
3. Update the `sheetId` variable with your copied ID:
   ```javascript
   const sheetId = "YOUR_SHEET_ID_HERE";
   ```
