import ErrorScreen from "./ErrorScreen";
import {
  render,
} from "@testing-library/react";

describe("<ErrorScreen />", () => {
  it("should render without crashing", () => {
    const { getByRole } = render(<ErrorScreen />);
    const errorMessage = getByRole('heading', {
  name: /\(╯°□°）╯︵ ┻━┻ ups! ha ocurrido un error, por favor intentalo de nuevo más tarde\./i
})
    expect(errorMessage).toBeInTheDocument();
  });
})
