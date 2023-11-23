import React from "react";
import ContentLoader from "react-content-loader";
import styles from "../styles";
const Loading = ({ style }) => {
  const loaderItems = Array.from({ length: 8 }, (_, index) => (
    <div key={index}>
      <ContentLoader
        width={300}
        height={300}
        viewBox="0 0 450 400"
        backgroundColor="#4c4c4d"
        foregroundColor="#dedede"
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
        <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
    </div>
  ));

  return (
    <div
      className={`${styles.paddingX} gap-20 ${style} flex items-center justify-center`}
    >
      {loaderItems}
    </div>
  );
};

export default Loading;
