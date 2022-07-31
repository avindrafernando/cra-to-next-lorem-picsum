import React from "react";
import { render, screen } from "@testing-library/react";
import Posts from "../pages/posts";

it("Should render the Posts component", async () => {
  // Arrange
  const returnData = [
    {
      author: "John Doe",
      author_url: "https://unsplash.com/@johndoe",
      filename: "0000_yC-Yzbqy7PY.jpeg",
      format: "jpeg",
      height: 3744,
      id: 0,
      post_url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      width: 5616,
    },
    {
      author: "Jane Doe",
      author_url: "https://unsplash.com/@janedoe",
      filename: "0100_pwaaqfoMibI.jpeg",
      format: "jpeg",
      height: 1656,
      id: 1,
      post_url: "https://unsplash.com/photos/pwaaqfoMibI",
      width: 2500,
    },
  ];

  // Act
  render(<Posts posts={returnData} />);

  const cardNodeForJohnDoe = await screen.findByTitle("John Doe");
  const cardNodeForJaneDoe = await screen.findByTitle("Jane Doe");

  // Assert
  expect(cardNodeForJohnDoe).toHaveStyle(
    "backgroundImage: 'url(\"https://picsum.photos/250/375?image=0\")'"
  );
  expect(cardNodeForJaneDoe).toHaveStyle(
    "backgroundImage: 'url(\"https://picsum.photos/250/375?image=1\")'"
  );
});
