import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Card } from "./Card";

describe("<Card />", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>,
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("combines default classes with custom className props", () => {
    render(
      <Card className="my-custom-class" data-testid="card-element">
        Card with extra class
      </Card>,
    );

    const cardElement = screen.getByTestId("card-element");

    expect(cardElement).toHaveClass("group", "w-full", "my-custom-class");
  });

  it("forwards remaining HTML attributes correctly (...rest)", () => {
    const handleClick = vi.fn();

    render(
      <Card onClick={handleClick} id="my-card-id" data-testid="card-element">
        Interactive Card
      </Card>,
    );

    const cardElement = screen.getByTestId("card-element");

    expect(cardElement).toHaveAttribute("id", "my-card-id");

    cardElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
