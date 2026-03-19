# ✈️ TravelReady

> A web app that creates personalized travel checklists that covers visa requirements, health documents, and packing recommendations tailored to your destination and travel dates.

---

## 🧩 The Problem

Planning a trip abroad is exciting — but with so many things to think about, booking, and scheduling, it's common that we forget about the important things that can impact our trip. Like meeting visa requirements. Health or vaccination requirements. Or bringing the right clothes for the climate. Every year, travellers are turned away at borders, denied boarding, or forced to cancel trips because of this, turning their long-anticipated trip a dreadful nightmare.

---

## 💡 What TravelReady Does

TravelReady takes your trip details — where you're from, where you're going, and when — and creates a clear, personalised checklist of everything you need before your trip:

- 📄 **Visa & entry requirements** — fetched from official government sources
- 🏥 **Health & vaccination requirements** — including any mandates or recommendations
- 🧳 **Packing recommendations** — tailored to your destination and the time of year
- ⏰ **Timeline warnings** — flags if your visa application window is too tight
- 🛂 **Passport validity checks** — alerts if your passport may not meet the destination's requirements

---

## 🎯 Goal & Vision

The goal of TravelReady is to make international travel preparation **stress-free and seamless** — especially for first-time international travellers, people visiting complex destinations, or anyone who just doesn't want to spend hours researching requirements across multiple government sites.

**The long-term vision is to become the single source of truth for travel preparation** — a tool that notifies you of everything you need before you leave, personalised to who you are and where you're going. Future directions include:

- 👤 Traveller profiles (citizenship, passport expiry, medical needs, pets)
- 🔔 Trip reminders and document deadline notifications
- 🌍 Multi-destination and layover support
- 🤝 Crowdsourced ground-truth reports from real travellers
- 📱 A companion mobile app built with React Native

---

## 🛠️ Tech Stack

| Layer                    | Technology             |
| ------------------------ | ---------------------- |
| Frontend                 | React + Vite           |
| Styling                  | Tailwind CSS           |
| API / Data fetching      | React Query (TanStack) |
| Routing                  | React Router           |
| Travel data              | Sherpa API / IATA      |
| Weather & seasonal data  | Open-Meteo             |
| Backend / Auth (planned) | Supabase               |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/travel-ready.git
cd travel-ready

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📍 Project Status

🟡 **Early development** — core UI and trip input form in progress.

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome! Feel free to open an issue or submit a pull request.
