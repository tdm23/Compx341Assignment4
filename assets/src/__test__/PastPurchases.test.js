import React from "react";
import PastPurchases from "../modules/pastPurchases/PastPurchases";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import bestSellers from "../images/bestSellers.png";
import yourshoppingcart from "../images/yourshoppingcart.png";

configure({ adapter: new Adapter() });
window.alert = jest.fn();

it("Past Purchases rendering without crashing", () => {
  shallow(<PastPurchases />);
});

it("PastPurchases correct heading", () => {
  const wrapper = shallow(<PastPurchases />);
  const heading = <h3>Past purchases</h3>;
  expect(wrapper.contains(heading)).toEqual(true);
});

it("PastPurchases Correct Link BestSellers ", () => {
  const wrapper = shallow(<PastPurchases />);
  const heading = (
    <a href="/best">
      <img
        src={bestSellers}
        alt="Best sellers"
        className="checkout-img no-padding"
      />
    </a>
  );
  expect(wrapper.contains(heading)).toEqual(true);
});

it("PastPurchases Correct Link yourshoppingcart", () => {
  const wrapper = shallow(<PastPurchases />);
  const heading = (
    <a href="/cart">
      <img
        src={yourshoppingcart}
        alt="Shopping cart"
        className="checkout-img no-padding"
      />
    </a>
  );
  expect(wrapper.contains(heading)).toEqual(true);
});
