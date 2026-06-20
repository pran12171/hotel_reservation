import { useState, useEffect } from "react";
import "./TableReservation.css";

const MAX_DURATION_HOURS = 2;

const durationOptions = [
  { label: "30 minutes", value: 0.5 },
  { label: "1 hour", value: 1 },
  { label: "1.5 hours", value: 1.5 },
  { label: "2 hours", value: 2 },
];

const initialTables = [
  { id: 1, name: "Table 1", capacity: 2, availableAt: null, bookedFor: null },
  { id: 2, name: "Table 2", capacity: 2, availableAt: null, bookedFor: null },
  { id: 3, name: "Table 3", capacity: 4, availableAt: null, bookedFor: null },
  { id: 4, name: "Table 4", capacity: 4, availableAt: null, bookedFor: null },
  { id: 5, name: "Table 5", capacity: 6, availableAt: null, bookedFor: null },
];

function TableReservation() {
  const [tables, setTables] = useState(initialTables);
  const [now, setNow] = useState(Date.now());
  const [activeFormId, setActiveFormId] = useState(null);
  const [partySize, setPartySize] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const openForm = (id) => {
    setActiveFormId(id);
    setPartySize("");
    setDuration("");
    setError("");
  };

  const closeForm = () => {
    setActiveFormId(null);
    setError("");
  };

  const handleConfirmBooking = (table) => {
    const size = parseInt(partySize, 10);
    const hours = parseFloat(duration);

    if (!size || size <= 0) {
      setError("Please enter a valid number of members.");
      return;
    }
    if (size > table.capacity) {
      setError(`This table only seats up to ${table.capacity} people.`);
      return;
    }
    if (!hours) {
      setError("Please select a reservation time.");
      return;
    }
    if (hours > MAX_DURATION_HOURS) {
      setError(`Maximum reservation time is ${MAX_DURATION_HOURS} hours.`);
      return;
    }

    const bookedUntil = Date.now() + hours * 60 * 60 * 1000;
    setTables((prev) =>
      prev.map((t) =>
        t.id === table.id
          ? { ...t, availableAt: bookedUntil, bookedFor: size }
          : t
      )
    );
    setActiveFormId(null);
  };

  const formatRemaining = (availableAt) => {
    const diff = availableAt - now;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="reservation-container">
      <h1>Reserve a Table</h1>
      <div className="table-grid">
        {tables.map((table) => {
          const isBooked = table.availableAt && table.availableAt > now;
          const isFormOpen = activeFormId === table.id;

          return (
            <div key={table.id} className="table-card">
              <h2>{table.name}</h2>
              <p className="capacity">Seats up to {table.capacity}</p>

              {isBooked ? (
                <>
                  <p className="status booked">Booked for {table.bookedFor}</p>
                  <p className="countdown">
                    Available in {formatRemaining(table.availableAt)}
                  </p>
                  <button className="secondary-btn" disabled>
                    Unavailable
                  </button>
                </>
              ) : isFormOpen ? (
                <div className="booking-form">
                  <input
                    type="number"
                    placeholder="No. of members"
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                  />
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <option value="">Select reservation time</option>
                    {durationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {error && <p className="error-text">{error}</p>}
                  <div className="form-buttons">
                    <button
                      className="primary-btn"
                      onClick={() => handleConfirmBooking(table)}
                    >
                      Confirm
                    </button>
                    <button className="secondary-btn" onClick={closeForm}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="status available">Available</p>
                  <button
                    className="primary-btn"
                    onClick={() => openForm(table.id)}
                  >
                    Book This Table
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TableReservation;