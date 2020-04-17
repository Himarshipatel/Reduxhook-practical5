import React from "react";

function Images() {
  const url =
    "https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png";

  return (
    <div className="titleimage">
      <img src={url} alt="" width={370} />
    </div>
  );
}
export default Images;
