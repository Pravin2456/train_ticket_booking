import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => date.toLocaleString();

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img
            src="https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png"
            alt="Indian Railways Logo"
            className="logo-img"
          />
        </div>
        <nav className="nav">
          <button aria-label="Login">LOGIN</button>
          <button aria-label="Register">REGISTER</button>
          <button aria-label="Agent Login">AGENT LOGIN</button>
          <button aria-label="Contact Us">CONTACT US</button>
          <button aria-label="Daily Deals">DAILY DEALS</button>
          <button aria-label="Alerts">ALERTS</button>
          <div className="time-date" aria-label={`Current date and time: ${formatDate(currentDate)}`}>
            {formatDate(currentDate)}
          </div>
        </nav>
      </header>

      <div className="main">
        <div className="booking-section">
          <h2>BOOK TICKET</h2>
          <form>
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input id="from" type="text" placeholder="Enter source station" />
            </div>
            <div className="form-group">
              <label htmlFor="to">To</label>
              <input id="to" type="text" placeholder="Enter destination station" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input id="date" type="date" defaultValue="2024-08-26" />
            </div>
            <div className="form-group">
              <label htmlFor="class">Class</label>
              <select id="class">
                <option value="all">All Classes</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category">
                <option value="general">General</option>
              </select>
            </div>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Person With Disability Concession
              </label>
              <label>
                <input type="checkbox" /> Flexible With Date
              </label>
              <label>
                <input type="checkbox" /> Train with Available Berth
              </label>
              <label>
                <input type="checkbox" /> Railway Pass Concession
              </label>
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
          <button className="ask-disha-btn">Easy Booking on AskDISHA</button>
        </div>
        <div className="image-section">
        </div>
      </div>
      <div>
      </div>
    </div>
  
  );
}

export default App;