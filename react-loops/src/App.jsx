import College from "./College";

function App() {
  const collegeData = [
    {
      college: "Indian Institute of Technology, Delhi",
      city: "New Delhi",
      website: "https://home.iitd.ac.in/",
      students: [
        { name: "Aarav Sharma", age: 21, email: "aarav.sharma@iitd.ac.in" },
        { name: "Neha Patel", age: 22, email: "neha.patel@iitd.ac.in" },
        { name: "Rohit Kumar", age: 23, email: "rohit.kumar@iitd.ac.in" },
      ],
    },
    {
      college: "Indian Institute of Technology, Bombay",
      city: "Mumbai",
      website: "https://www.iitb.ac.in/",
      students: [
        { name: "Priya Mehta", age: 20, email: "priya.mehta@iitb.ac.in" },
        { name: "Karan Singh", age: 22, email: "karan.singh@iitb.ac.in" },
        { name: "Simran Kaur", age: 21, email: "simran.kaur@iitb.ac.in" },
      ],
    },
    {
      college: "National Institute of Technology, Trichy",
      city: "Tiruchirappalli",
      website: "https://www.nitt.edu/",
      students: [
        { name: "Sneha Patel", age: 21, email: "sneha.patel@nitt.edu" },
        { name: "Ravi Kumar", age: 22, email: "ravi.kumar@nitt.edu" },
        { name: "Isha Raj", age: 23, email: "isha.raj@nitt.edu" },
      ],
    },
    {
      college: "Vellore Institute of Technology",
      city: "Vellore",
      website: "https://vit.ac.in/",
      students: [
        { name: "Ananya Das", age: 20, email: "ananya.das@vit.ac.in" },
        { name: "Ritesh Verma", age: 21, email: "ritesh.verma@vit.ac.in" },
        { name: "Tanya Nair", age: 22, email: "tanya.nair@vit.ac.in" },
      ],
    },
    {
      college: "Amity University",
      city: "Noida",
      website: "https://www.amity.edu/",
      students: [
        { name: "Isha Raj", age: 20, email: "isha.raj@amity.edu" },
        { name: "Rahul Mehta", age: 21, email: "rahul.mehta@amity.edu" },
        { name: "Aditi Sharma", age: 22, email: "aditi.sharma@amity.edu" },
      ],
    },
  ];

  return (
    <>
      <h1>Nested looping for component!</h1>
      {
        collegeData.map((colleges, index) => (
          <div key={index}>
            <College college = {colleges}/>
          </div>
        ))
      }
    </>
  );
}

export default App;
