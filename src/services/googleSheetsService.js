
export const fetchPropertiesFromSheet = async () => {
    // Configuration: Replace with your specific Google Sheet details
    const sheetId = "1mu-73itDu06Lb20D5eZK1pLZFSDYOgyqYLeHJifMKmI";
    const sheetName = "Product";

    // Google Visualization API Endpoint
    // Format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?sheet={SHEET_NAME}
    // This API allows us to fetch the sheet data as a JSON-like string without an API key.
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${sheetName}`;

    try {
        const response = await fetch(url);
        const text = await response.text();

        // Parse standard Google Visualization API response
        // The response text starts with "/*O_o*/\ngoogle.visualization.Query.setResponse(" and ends with ");"
        const json = JSON.parse(text.substring(47).slice(0, -2));

        if (json.table && json.table.rows) {
            // Transform sheet rows into Property objects
            // Expected Sheet Columns:
            // A: Title, B: Price, C: Location, D: Image URL, E: Beds, F: Baths, G: Area, H: Type, I: Description
            return json.table.rows.map((row, index) => {
                const getVal = (i) => (row.c && row.c[i]) ? row.c[i].v : "";
                return {
                    id: `sheet-${index}`,
                    title: getVal(0) || "Untitled Property",
                    price: getVal(1) || "Price on Request",
                    location: getVal(2) || "Location TBD",
                    beds: getVal(3) || 2,
                    baths: getVal(4) || 2,
                    area: getVal(5) || "1200 sqft",
                    image: getVal(6) || "https://images.unsplash.com/photo-1600596542815-e32c21216e53?auto=format&fit=crop&w=800&q=80",
                    type: getVal(7) || "Sale",
                    description: getVal(8) || "No description available."
                };
            });
        }
        return [];
    } catch (error) {
        console.error("Error fetching properties from sheet:", error);
        return [];
    }
};
