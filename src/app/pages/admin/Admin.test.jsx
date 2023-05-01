import Admin from "./Admin";
import { it, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Admin.jsx", () => {
   it("is setText work!", () => {
      // ARRANGE
      render(<Admin />);
      // ACT
      let txtElem = screen.getByText("PlaceHolder component work!");
      // ASSERT
      expect(txtElem).toBeInTheDocument();
   });
});
