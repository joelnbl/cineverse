import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("should render component propertly", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
