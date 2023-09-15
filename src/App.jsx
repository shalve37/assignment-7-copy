import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Checkout from "./components/Checkout/Checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [checklist, setChecklist] = useState([]);
  const [credits, setCredits] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);
  const toastStyles =
    "bg-white text-black font-inherit text-lg font-bold py-4 rounded-md";
  const showLimitToast = () => {
    toast.success("You have reached the credit limit", {
      position: toast.POSITION.TOP_CENTER,
      className: toastStyles,
    });
  };
  const showMoreThanOnceToast = () => {
    toast.success("You cannot select one course more than once", {
      position: toast.POSITION.TOP_CENTER,
      className: toastStyles,
    });
  };
  const handleAddToChecklist = (item, credit) => {
    const newCredits = credits + credit;
    const newRemainingCredits = remainingCredits - credit;
    if (
      !checklist.includes(item) &&
      newCredits <= 20 &&
      newRemainingCredits >= 0
    ) {
      const newChecklist = [...checklist, item];
      setChecklist(newChecklist);
      setCredits(newCredits);
      setRemainingCredits(newRemainingCredits);
    } else if (checklist.includes(item)) {
      showMoreThanOnceToast();
    } else if (newCredits > 20) {
      showLimitToast();
    }
  };
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">Course Registration</h1>
      </header>
      <main className="lg:flex gap-6 my-5 mx-4">
        <Cards handleAddToChecklist={handleAddToChecklist}></Cards>
        <Checkout
          remainingCredits={remainingCredits}
          credits={credits}
          checklist={checklist}
        ></Checkout>
      </main>
    </>
  );
}

export default App;
