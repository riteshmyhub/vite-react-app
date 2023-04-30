import { describe, it, expect } from "vitest";
import useHome from "./useHome";
import { renderHook } from "@testing-library/react-hooks";

describe("useHome", () => {
   it("should be return text value string", () => {
      const { result } = renderHook(useHome);
      expect(Array.isArray(result.current.users));
   });
});
