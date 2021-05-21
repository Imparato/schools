import React, { useEffect, useState } from "react";
import SchoolShow from "./SchoolShow";

const Schools = () => {
  const [schools, setSchools] = useState();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    fetch("/schools")
    .then((res) => res.json())
    .then((data) => {
      setSchools(data[0]);
      setReady(true);
      console.log(schools);
      });
  }, []);
  return (
    <>
      {schools ? (
        <>
          <SchoolShow schools={schools} setSchools={setSchools} />
        </>
      ) : (
          <p>Créer une ecole ?</p>
      )}
    </>
  );
};

export default Schools;
