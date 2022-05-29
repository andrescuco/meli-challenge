import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";

describe("<Button />", () => {
  it("should render children being passed down", () => {
    const { getByText } = render(<Button>Buy!</Button>);
    expect(getByText(/buy!/i)).toBeInTheDocument();
  });

  it("should call click handler", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<Button handleClick={mockFn}>Send</Button>);

    const button = getByRole("button");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
