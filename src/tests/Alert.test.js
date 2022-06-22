import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  const validProps = {
    alertFail: {
      message: "Error!",
      success: false,
    },
    alertSuccess: {
      message: "Success!",
      success: true,
    },
  };

  it("renders correctly with an error", () => {
    const { asFragment } = render(
      <Alert message={validProps.alertFail.message} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with a success", () => {
    const { asFragment } = render(
      <Alert message={validProps.alertFail.success} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("display error when failed to create new item request", () => {
    const { getByText } = render(
      <Alert
        message={validProps.alertFail.message}
        success={validProps.alertFail.success}
      />
    );
    expect(getByText("Error!")).toBeInTheDocument();
  });

  it("display success when failed to create new item request", () => {
    const { getByText } = render(
      <Alert
        message={validProps.alertSuccess.message}
        success={validProps.alertSuccess.success}
      />
    );
    expect(getByText("Success!")).toBeInTheDocument();
  });

  it("ensure no error is rendered when there isn't a message", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
