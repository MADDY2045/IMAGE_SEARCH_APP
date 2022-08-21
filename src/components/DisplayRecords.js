import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DisplayRecords = () => {
  const { images, loading } = useSelector((state) => state.loadData);
  const search = useSelector((state) => state.searchInput);

  const [tempDisplay, setTempDisplay] = useState("");

  useEffect(() => {
    if (images && images.length > 0) {
      setTempDisplay(search);
    }
    // eslint-disable-next-line
  }, [images]);

  return (
    <div data-testid="div">
      {!loading && images.length > 0 ? (
        <>
          <span>
            <strong>{`Displaying ${images.length} search results for ${tempDisplay}`}</strong>
          </span>
          <hr />
        </>
      ) : (
        !loading && (
          <p style={{ textAlign: "center" }}>No search records to display</p>
        )
      )}
    </div>
  );
};

export default DisplayRecords;
