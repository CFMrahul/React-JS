import { useActionState } from "react";

function ActionState() {
  const handleAction = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    console.log(name, password);
    await new Promise((res) => setTimeout(res, 2000));
    if (name && password) {
      return { message: "Data Submitted!", name, password };
    } else {
      return { error: "Please faild Datas!", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleAction, undefined);
  console.log(data);
  return (
    <>
      <h1>React in UseAction State</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="enter username" name="name" />
        <br />
        <br />
        <input defaultValue={data?.password} type="password" placeholder="enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Click</button>
      </form>
      <br />
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
      <h3>name:{data?.name}</h3>
      <h3>password:{data?.password}</h3>
    </>
  );
}
export default ActionState;
