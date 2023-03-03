import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup, waitFor } from "@testing-library/react-native";

import Home from "../../src/screens/Home";
import { getRequest } from "../../src/api/api";
import Recents from "../../src/screens/Recents";

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({ useNavigation: () => ({ navigate: mockedNavigate }) }));
jest.mock("../../src/api/api");

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe("Recents Screen", () => {
  let props;
  beforeEach(() => {
    props = createTestProps({});
    getRequest.mockResolvedValue({
      results: [],
    });
  });
  afterEach(cleanup);

  it("render base element", () => {
    const tree = renderer.create(<Recents />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Recents />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
