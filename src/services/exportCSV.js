export const exportCSV = (data, fileName) => {

  const csvRows = [];

  // Headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  // Rows
  for (const row of data) {
    const values = headers.map(header => row[header]);
    csvRows.push(values.join(","));
  }

  // Convert to Blob
  const csvString = csvRows.join("\n");

  const blob = new Blob([csvString], {
    type: "text/csv",
  });

  // Download Link
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download = `${fileName}.csv`;

  link.click();
};