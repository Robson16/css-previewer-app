import React from "react";

import "./styles.css";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <h1>{props.title}</h1>
    </header>
  );
};

export default PageHeader;
