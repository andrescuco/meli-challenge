import LoadingScreen from "./LoadingScreen";
import { render } from "@testing-library/react";

describe("<LoadingScreen />", () => {
  it("should render without crashing", () => {
    const { container } = render(<LoadingScreen />);
    expect(container.firstChild?.firstChild).toHaveClass(
      "spinner-grow text-primary"
    );
  });
});
