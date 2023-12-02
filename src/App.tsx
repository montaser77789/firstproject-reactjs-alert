import "./App.css";
import Alert from "./Component/Ui/Alert/Alert";
import { BellRing,Ban } from "lucide-react";

function App() {
  return (
    <>
      <Alert
        type={"alert-error"}
        icon={<BellRing size={20} />}
        title={"Somthing Went Rong"}
        description="Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Libero laborum odio 
  reiciendis quo aperiam repellat facilis, 
  veritatis dolorum voluptatum sequi consectetur tempora esse, 
  eveniet, nisi architecto explicabo eius reprehenderit magni!
Sint"
      />
      <Alert
        type={"alert-default"}
        icon={<BellRing size={20} />}
        title={"Somthing Went Rong"}
        childern={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            laborum odio reiciendis quo aperiam repellat, veritatis dolorum
            voluptatum sequi consectetur tempora esse, eveniet, nisi architecto
            explicabo eius reprehenderit magni! Sint
          </p>
        }
      />
      <Alert
        type={"alert-info"}
        icon={<BellRing size={20} />}
        title={"Somthing Went Rong"}
        description="Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Libero laborum odio 
  reiciendis quo aperiam repellat facilis, 
  veritatis dolorum voluptatum sequi consectetur tempora esse, 
  eveniet, nisi architecto explicabo eius reprehenderit magni!
Sint"
      />
      <Alert
        type={"alert-warning"}
        icon={< Ban size={20} />}
        title={"Somthing Went Rong"}
        description="Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Libero laborum odio 
  reiciendis quo aperiam repellat facilis, 
  veritatis dolorum voluptatum sequi consectetur tempora esse, 
  eveniet, nisi architecto explicabo eius reprehenderit magni!
Sint"
      />
      <Alert
        type={"alert-success"}
        icon={<BellRing size={20} />}
        title={"Somthing Went Rong"}
        description="Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Libero laborum odio 
  reiciendis quo aperiam repellat facilis, 
  veritatis dolorum voluptatum sequi consectetur tempora esse, 
  eveniet, nisi architecto explicabo eius reprehenderit magni!
Sint"
      />
    </>
  );
}

export default App;
