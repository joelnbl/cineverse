import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  test("should render component propertly", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
