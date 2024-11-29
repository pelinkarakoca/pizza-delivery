/*import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="error">
      <p>{data}</p>
    </div>
  );
}
*/
import { useLocation } from "react-router-dom";
import React, { FC } from "react";

interface LocationState {
  state: string;
}

const ErrorPage: FC = () => {
  const location: LocationState = useLocation();
  const data: string | undefined = location.state;
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default ErrorPage;
