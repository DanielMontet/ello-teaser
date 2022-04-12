import { useParams } from "react-router-dom";

const Token: React.FunctionComponent = () => {
  let params = useParams();
  return (
    <div className="token-container">
      <p>{params.slug}</p>
    </div>
  );
};

export default Token;
