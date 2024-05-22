import { Button } from "antd";

const App = () => {
  const changeName = (name) => {
    localStorage.setItem("name", name);
  };
  const onDelete = () => {
    localStorage.removeItem("name");
  };
  const onClear = () => {
    localStorage.clear();
  };

  return (
    <div className="flex items-center flex-col justify-center w-full h-[100vh] gap-[15px]">
      {localStorage.getItem("name")}
      <Button onClick={() => changeName("ASADBEK")}>ASADBEK</Button>
      <Button onClick={() => changeName("FARRUX")}>FARRUX</Button>
      <Button onClick={() => changeName("DILSHODBEK")}>DILSHODBEK</Button>
      <Button onClick={() => changeName("AZAMBEK")}>AZAMBEK</Button>
      <Button onClick={onDelete}>DELETE</Button>
      <Button onClick={onClear}>CLEAR</Button>
    </div>
  );
};

export default App;
