import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../../types/types";

const Token: React.FunctionComponent = () => {
  let params = useParams();
  let location = useLocation();
  const { history } = useContext(GlobalContext);
  console.log(history);
  return (
    <div className="token-container">
      <p>{params.slug}</p>
      <button className="back" onClick={(e) => history?.back()}>
        Back
      </button>
    </div>
  );
};

export default Token;
