// Mock data for buses
const buses = [
  { id: 1, name: "Elite" },
  { id: 2, name: "High Class" },
  { id: 3, name: "Shwe Mandalar" },
];

// Mock data for reservation history
const reservationHistory = [
  { busId: 1, time: "08:00", tickets: 20 },
  { busId: 1, time: "18:00", tickets: 15 },
  { busId: 2, time: "10:00", tickets: 25 },
  { busId: 3, time: "14:00", tickets: 10 },
];

// Populate bus select options
const busSelect = document.getElementById("busSelect");
buses.forEach((bus) => {
  const option = document.createElement("option");
  option.value = bus.id;
  option.textContent = bus.name;
  busSelect.appendChild(option);
});

// Function to update the history table
function updateHistoryTable() {
  const historyTable = document.getElementById("historyTable");
  historyTable.innerHTML = ""; // Clear existing data

  const selectedBusId = parseInt(busSelect.value);
  const filteredHistory = reservationHistory.filter(
    (reservation) => reservation.busId === selectedBusId
  );

  filteredHistory.forEach((reservation) => {
    const bus = buses.find((b) => b.id === reservation.busId);
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${bus.name}</td>
            <td>${reservation.time}</td>
            <td>${reservation.tickets}</td>
        `;
    historyTable.appendChild(row);
  });
}

// Initial update of history table with the first bus selected
busSelect.addEventListener("change", updateHistoryTable);
document.addEventListener("DOMContentLoaded", () => {
  busSelect.value = buses[0].id;
  updateHistoryTable();
});
