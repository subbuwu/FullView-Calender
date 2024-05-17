import { useState } from "react";
import CalGrid from "./components/CalGrid";
import Nav from "./components/Nav";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <main>
      <Nav currentMonth={currentMonth} 
        currentYear={currentYear} 
        onNextMonth={handleNextMonth} 
        onPrevMonth={handlePrevMonth} />

      <CalGrid  currentMonth={currentMonth} 
        currentYear={currentYear} />
    </main>
  );
}

export default App;
