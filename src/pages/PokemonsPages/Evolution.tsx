import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";

const Evolution = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {}, [dispatch]);
  return <div>Evolution</div>;
};

export default Evolution;
