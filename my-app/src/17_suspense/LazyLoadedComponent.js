import React, { useEffect } from "react";

export const LazyLoadedComponent = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ default: () => <h2>This component is Lazy loaded</h2> });
      }, 5000);
    })
);

export function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner-circle"></div>
    </div>
  );
}
