import ProductCard from "./ProductCard";
import {
  render,
  fireEvent
} from "@testing-library/react";

describe("<ProductCard />", () => {
  const mockFn = jest.fn();
  const props = {
    id: "1",
    title: "apple iphone",
    price: 128000,
    picture: "https://unsplash.it/500/500",
    hasFreeShipping: true,
    stateName: "colorado",
    onProductClick: mockFn
  }

  it("should render correct information", () => {
    const { getByText, getByRole } = render(<ProductCard {...props} />);
    expect(getByText(/apple iphone/i)).toBeInTheDocument();
    expect(getByText(/128.000/i)).toBeInTheDocument();
    expect(getByRole('img', {
      name: /shipping truck with green background/i
    })).toBeInTheDocument();
    expect(getByText(/colorado/i)).toBeInTheDocument();
  });

  it("should call click handler", () => {
    const { getByRole } = render(<ProductCard {...props} />);
    fireEvent.click(getByRole('img', {
      name: /product apple iphone/i
    }));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
})
