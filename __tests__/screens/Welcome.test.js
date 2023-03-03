import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react-native";

import Welcome from "../../src/screens/Welcome";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({ useNavigation: () => ({ navigate: mockedNavigate }) }));

describe("Welcome Screen", () => {
  afterEach(cleanup);

  it("render base element", () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("find login button", () => {
    const { getByText } = render(<Welcome />);
    expect(getByText("Log in")).toBeDefined();
  });
});
