import { useEffect, useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

function SuitesSelector() {
  // Suites data structure
  const suites = [
    {
      id: "1",
      title: "SIGNATURE SUITE",
      header: "Ocean Front Suite",
      description: "Perched at the edge of the resort with an unobstructed panoramic sea view. Floor-to-ceiling glass panels frame the horizon like a living painting. Includes a private terrace with plunge pool and outdoor daybed.",
      suite_info: {
        size: "85 sqm",
        bed: "King",
        capacity: "2 Guests",
        view: "Ocean",
      },
      tags: ["PRIVATE PLUNGE POOL", "RAIN SHOWER", "BUTLER SERVICE", "OCEAN TERRACE", "MINI BAR"],
      price: "₱18,000"
    },
  ];

  // --- STATE ---
  // state for calendar
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  const [guestCnt, setGuestCnt] = useState({ adults: 2, kids: 0 });
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  
  const [selectedTags, setSelectedTags] = useState([]);

  // --- REFS FOR CLICK OUTSIDE ---
  const guestRef = useRef(null);
  const calendarRef = useRef(null);

  // --- COMPUTED FILTERS ---
  const allTags = Array.from(new Set(suites.flatMap((suite) => suite.tags)));
  
  const filteredSuiteIds = suites
    .filter((suite) => selectedTags.every((tag) => suite.tags.includes(tag)))
    .map((suite) => suite.id);

  // --- HANDLERS ---
  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;
      
      if (guestRef.current && !guestRef.current.contains(target)) {
        setIsGuestOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(target)) {
        setIsCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDateStr = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      
      {/* Inputs Wrapper */}
      <div style={{ display: "flex", gap: "1rem", backgroundColor: "#f5f5f7", padding: "1rem", borderRadius: "8px", alignItems: "flex-end", marginBottom: "2rem" }}>
        
        {/* Date Inputs */}
        <div ref={calendarRef} style={{ position: "relative", display: "flex", gap: "0.5rem", flex: 2 }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>Check In</label>
            <input
              type="text"
              readOnly
              value={formatDateStr(dateRange[0].startDate)}
              onClick={() => setIsCalendarOpen(true)}
              style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", cursor: "pointer", width: "100%" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>Check Out</label>
            <input
              type="text"
              readOnly
              value={formatDateStr(dateRange[0].endDate)}
              onClick={() => setIsCalendarOpen(true)}
              style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", cursor: "pointer", width: "100%" }}
            />
          </div>

          {/* RDR Calendar Window */}
          {isCalendarOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.15)", borderRadius: "8px", overflow: "hidden", marginTop: "8px" }}>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={new Date()}
              />
            </div>
          )}
        </div>

        {/* Guests Field */}
        <div ref={guestRef} style={{ position: "relative", flex: 1 }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>Guests</label>
          <button
            onClick={() => setIsGuestOpen(!isGuestOpen)}
            style={{ width: "100%", padding: "8px", textAlign: "left", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: "white", cursor: "pointer" }}
          >
            {guestCnt.adults} Adults, {guestCnt.kids} Kids
          </button>

          {isGuestOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", border: "1px solid #ccc", borderRadius: "4px", padding: "12px", zIndex: 90, marginTop: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "14px" }}>Adults</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button onClick={() => setGuestCnt(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))} style={{ width: "24px", height: "24px" }}>-</button>
                  <span>{guestCnt.adults}</span>
                  <button onClick={() => setGuestCnt(prev => ({ ...prev, adults: prev.adults + 1 }))} style={{ width: "24px", height: "24px" }}>+</button>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px" }}>Kids</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button onClick={() => setGuestCnt(prev => ({ ...prev, kids: Math.max(0, prev.kids - 1) }))} style={{ width: "24px", height: "24px" }}>-</button>
                  <span>{guestCnt.kids}</span>
                  <button onClick={() => setGuestCnt(prev => ({ ...prev, kids: prev.kids + 1 }))} style={{ width: "24px", height: "24px" }}>+</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filters Bar */}
      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ marginBottom: "8px" }}>Filter Amenities</h4>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  border: isSelected ? "1px solid #000" : "1px solid #ccc",
                  backgroundColor: isSelected ? "#000" : "#fff",
                  color: isSelected ? "#fff" : "#333",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <hr style={{ borderColor: "#eee", margin: "2rem 0" }} />

      {/* Results View */}
      <div>
        <h4 style={{ margin: "0 0 4px 0" }}>Allowed Suite IDs:</h4>
        <p style={{ color: "#666", fontSize: "14px" }}>
          {filteredSuiteIds.length > 0 ? `[ ${filteredSuiteIds.join(", ")} ]` : "No entries fit your current selection criteria."}
        </p>
      </div>
    </div>
  );
}

export default SuitesSelector;