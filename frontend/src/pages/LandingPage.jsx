import { useState } from "react";
import { Globe } from "../components/Globe";
import "./LandingPage.css";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function LandingPage() {
  const [form, setForm] = useState({
    nationality: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  });
  const [errors, setErrors] = useState({});
  const [nationalitySearch, setNationalitySearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const filteredNationalities = COUNTRIES.filter((c) =>
    c.toLowerCase().includes(nationalitySearch.toLowerCase()),
  );
  const filteredDestinations = COUNTRIES.filter(
    (c) =>
      c.toLowerCase().includes(destinationSearch.toLowerCase()) &&
      c !== form.nationality,
  );

  const getDuration = () => {
    if (!form.departureDate || !form.returnDate) return null;
    const dep = new Date(form.departureDate);
    const ret = new Date(form.returnDate);
    const diff = Math.ceil((ret - dep) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : null;
  };

  const validate = () => {
    const newErrors = {};
    if (!form.nationality)
      newErrors.nationality = "Please select your nationality";
    if (!form.destination)
      newErrors.destination = "Please select a destination";
    if (!form.departureDate)
      newErrors.departureDate = "Please select a departure date";
    if (!form.returnDate) newErrors.returnDate = "Please select a return date";
    if (
      form.departureDate &&
      form.returnDate &&
      new Date(form.returnDate) <= new Date(form.departureDate)
    ) {
      newErrors.returnDate = "Return date must be after departure date";
    }
    if (
      form.nationality &&
      form.destination &&
      form.nationality === form.destination
    ) {
      newErrors.destination = "Destination must differ from your nationality";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", { ...form, duration: getDuration() });
      // TODO: navigate to checklist page
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const duration = getDuration();

  return (
    <div className="landing">
      {/* Background elements */}
      <div className="bg-grid" />
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />

      {/* Globe background */}
      <div className="globe-bg">
        <Globe />
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">✈</span>
          <span className="logo-text">TravelReady</span>
        </div>
      </header>

      {/* Hero */}
      <main className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Never miss a document again</p>
          <h1 className="hero-title">
            Your trip,
            <br />
            <span className="hero-title--accent">fully prepared.</span>
          </h1>
          <p className="hero-sub">
            Enter your trip details and get a personalised checklist of visas,
            health requirements, and packing essentials — in seconds.
          </p>
        </div>

        {/* Form Card */}
        <div className="card">
          <div className="card-inner">
            {/* Row 1: Nationality + Destination */}
            <div className="form-row">
              {/* Nationality */}
              <div className="field">
                <label className="field-label">Your Nationality</label>
                <div className="select-wrapper">
                  <input
                    className={`field-input ${errors.nationality ? "field-input--error" : ""}`}
                    type="text"
                    placeholder="Search country..."
                    value={form.nationality || nationalitySearch}
                    onChange={(e) => {
                      setNationalitySearch(e.target.value);
                      setForm((f) => ({ ...f, nationality: "" }));
                      setShowNationalityDropdown(true);
                    }}
                    onFocus={() => setShowNationalityDropdown(true)}
                    onBlur={() =>
                      setTimeout(() => setShowNationalityDropdown(false), 150)
                    }
                  />
                  <span className="field-icon">🌍</span>
                  {showNationalityDropdown &&
                    filteredNationalities.length > 0 && (
                      <ul className="dropdown">
                        {filteredNationalities.slice(0, 8).map((c) => (
                          <li
                            key={c}
                            className="dropdown-item"
                            onMouseDown={() => {
                              setForm((f) => ({ ...f, nationality: c }));
                              setNationalitySearch(c);
                              setShowNationalityDropdown(false);
                            }}
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
                {errors.nationality && (
                  <span className="field-error">{errors.nationality}</span>
                )}
              </div>

              {/* Arrow */}
              <div className="arrow-divider">→</div>

              {/* Destination */}
              <div className="field">
                <label className="field-label">Destination</label>
                <div className="select-wrapper">
                  <input
                    className={`field-input ${errors.destination ? "field-input--error" : ""}`}
                    type="text"
                    placeholder="Search country..."
                    value={form.destination || destinationSearch}
                    onChange={(e) => {
                      setDestinationSearch(e.target.value);
                      setForm((f) => ({ ...f, destination: "" }));
                      setShowDestinationDropdown(true);
                    }}
                    onFocus={() => setShowDestinationDropdown(true)}
                    onBlur={() =>
                      setTimeout(() => setShowDestinationDropdown(false), 150)
                    }
                  />
                  <span className="field-icon">📍</span>
                  {showDestinationDropdown &&
                    filteredDestinations.length > 0 && (
                      <ul className="dropdown">
                        {filteredDestinations.slice(0, 8).map((c) => (
                          <li
                            key={c}
                            className="dropdown-item"
                            onMouseDown={() => {
                              setForm((f) => ({ ...f, destination: c }));
                              setDestinationSearch(c);
                              setShowDestinationDropdown(false);
                            }}
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
                {errors.destination && (
                  <span className="field-error">{errors.destination}</span>
                )}
              </div>
            </div>

            {/* Row 2: Dates */}
            <div className="form-row">
              <div className="field">
                <label className="field-label">Departure Date</label>
                <div className="select-wrapper">
                  <input
                    className={`field-input ${errors.departureDate ? "field-input--error" : ""}`}
                    type="date"
                    min={today}
                    value={form.departureDate}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        departureDate: e.target.value,
                        returnDate: "",
                      }))
                    }
                  />
                </div>
                {errors.departureDate && (
                  <span className="field-error">{errors.departureDate}</span>
                )}
              </div>

              <div className="field">
                <label className="field-label">Return Date</label>
                <div className="select-wrapper">
                  <input
                    className={`field-input ${errors.returnDate ? "field-input--error" : ""}`}
                    type="date"
                    min={form.departureDate || today}
                    value={form.returnDate}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, returnDate: e.target.value }))
                    }
                  />
                </div>
                {errors.returnDate && (
                  <span className="field-error">{errors.returnDate}</span>
                )}
              </div>
            </div>

            {/* Duration pill */}
            {duration && (
              <div className="duration-pill">
                🗓{" "}
                <strong>
                  {duration} night{duration !== 1 ? "s" : ""}
                </strong>{" "}
                in {form.destination || "your destination"}
              </div>
            )}

            {/* Submit */}
            <button className="submit-btn" onClick={handleSubmit}>
              <span>Build My Checklist</span>
              <span className="submit-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Feature hints */}
        <div className="features">
          {[
            { icon: "📄", label: "Visa & Entry Requirements" },
            { icon: "💉", label: "Health & Vaccinations" },
            { icon: "🧳", label: "Seasonal Packing List" },
            { icon: "⏰", label: "Timeline Warnings" },
          ].map((f) => (
            <div key={f.label} className="feature-chip">
              <span>{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
