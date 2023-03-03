import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup, waitFor } from "@testing-library/react-native";

import Home from "../../src/screens/Home";
import { getRequest } from "../../src/api/api";

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({ useNavigation: () => ({ navigate: mockedNavigate }) }));
jest.mock("../../src/api/api");

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe("Home Screen", () => {
  let props;
  beforeEach(() => {
    props = createTestProps({});
    getRequest.mockResolvedValue({
      results: [],
    });
  });
  afterEach(cleanup);

  it("render base element", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("find Popular section", async () => {
    const { getByText } = render(<Home {...props} />);
    await waitFor(() => {
      expect(getByText("Popular")).toBeDefined();
    });
  });
});
