import User from './utils/User';

function App() {
  const userDatas = [
    {
      name: "Rana ji",
      age: 22,
      email: "ranaji1234@gmail.com",
      id: 1234,
    },
    {
      name: "Hansha",
      age: 18,
      email: "hansha44@gmail.com",
      id: 4567,
    },
    {
      name: "Roni",
      age: 24,
      email: "roniroy92@gmail.com",
      id: 9876,
    },
    {
      name: "jacks",
      age: 42,
      email: "jack2.pow@gmail.com",
      id: 6543,
    },
    {
      name: "Alex jon",
      age: 34,
      email: "alexjon@gmail.com",
      id: 3854,
    }
  ];
  return (
    <>
    <h2>Re-used component in loops</h2>
    {
      userDatas.map((user) => (
        <div key={user.id}>
          <User data = {user}/>
        </div>
      ))
    }
    </>
  )
}

export default App
