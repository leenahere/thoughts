import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import {
  CardContainer,
  CardHeader,
  CardCategory,
  CardTitle
} from './'

export const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name;
    });

    setLabels(labels);
  }, [blog.labels.nodes]);

  return (
    <CardContainer>
      <CardHeader>
        <>
        {labels.map((value, i) => {
          return (
            <CardCategory value={value} key={i} />
          );
        })}
        </>
      </CardHeader>
      <div>
        <CardTitle>{blog.title}</CardTitle>
        <Markdown>
            {blog.body}
          </Markdown>
      </div>
    </CardContainer>
  );
}
