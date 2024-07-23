import logo from "./logo.svg";
import "./App.css";
import SumCard from "./Components/Cards/SummaryCard/SumCard";
import colors from "./api/colors.json";

const sumData = [
  {
    header: "Available Position",
    count: "24",
    notificaton: "4 Urgently needed",
    colors: {
      bg: colors.primary.light,
      textColor: colors.primary.base,
      //change colors from colors.json
    },
  },
  {
    header: "Job Open",
    count: "10",
    notificaton: "4 Active hiring",
    colors: {
      bg: colors.tertiary.light,
      textColor: colors.tertiary.base,
    },
  },
  {
    header: "New Employees",
    count: "24",
    notificaton: "4 Department",
    colors: {
      bg: colors.pink.light,
      textColor: colors.pink.base,
    },
  },
];

sumData.map((x) => console.log(x.colors));

function App() {
  return (
    <div className=" App flex justify-center items-center h-full">
      {sumData.map((x, i) => (
        <SumCard
          header={x.header}
          count={x.count}
          notificaton={x.notificaton}
          color={x.colors}
          key={i}
        />
      ))}
    </div>
  );
}

export default App;
