import Wraper from "../sections/Wraper";
import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";

const MyList = () => {
  const { userInfo } = useAppSelector(({ app }) => app);
  return (
    <div className="list">
      <Login />
    </div>
  );
};

export default Wraper(MyList);
