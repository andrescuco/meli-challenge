import BreadCrumb from "./BreadCrumb";
import { render } from "@testing-library/react";

describe("<BreadCrumb />", () => {
  it("should render categories", () => {
    const mockCategories = ["apple", "iphone", "128gb"];
    const { getByText } = render(<BreadCrumb categories={mockCategories} />);
    expect(getByText(/apple/i)).toBeInTheDocument();
    expect(getByText(/iphone/i)).toBeInTheDocument();
    expect(getByText(/128gb/i)).toBeInTheDocument();
  });
});
