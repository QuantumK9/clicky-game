import App from "./App";
import { shallow } from "enzyme";

// Our custom setup function returns a single instance of a shallow rendered App component.
// It allows us to optimize our code so that we do not have to instantiate an instance of the App component inside ever test which in turn speeds up how much time it takes to run our test.
// We are concerned about the time it takes to run our test because in a large application you can have hundred if not thousand of test, the more time we can save in running our test the faster we can deploy our code.
const setup = () => shallow(<App />);

//This functions allows us to provide two arguments:
// 1. Wrapper: such as the app component which we perform a find on to locate the value passed as the second argument within the said wrapper
// 2. Value: is the data-test attribute value we are searching for within the wrapper provided as our first argument

const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it("App Component Renders Without Error", () => {
  const wrapper = shallow(<App />);
});

// Test 2: Write a test that checks if the button within the `App` component renders properly.
it("App Component Renders a Button", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('[data-test="increment-button"]');

  expect(button.length).toBe(1);
});

// Test 3: Write a test which checks if the counter starts at 0.
it("Counter Starts At 0", () => {
  const wrapper = shallow(<App />);
  const count = wrapper.find('[data-test="count"]').text();

  expect(count).toBe("0");
});

// Test 4: Write a test which checks if the increment button increase the count.
it("Clicking Increment Button Increases Counter Display", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('[data-test="increment-button"]');

  button.simulate("click");

  const count = wrapper.find('[data-test="count"]').text();

  expect(count).toBe("1");
});

// Test 5: Write a test which checks if the increment button increase the count.
it("App Component Renders the Counter", () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find('[data-test="counter-display"]');

  expect(div.length).toBe(1);
});

// Test 6: Write a test that checks if the button within the `App` component renders properly.
it("App Component Renders an Decrement Button", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('[data-test="decrement-button"]');

  // button.simulate("click");

  //it must be a string below cause of .text()
  expect(button.length).toBe(1);
});

// Test 7: Write
it("Count is Unable to go Below Zero and Throws Error", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('[data-test="decrement-button"]');
  const errorMessage = wrapper.find('[data-test="error-message"]').text();

  button.simulate("click");

  expect(errorMessage).toEqual("The counter can not go below zero");
});

// Test 8
it("Decrement Error Message Clears When Count Increment Higher than 0", () => {
  const wrapper = shallow(<App />);
  const errorMessage = wrapper.find('[data-test="error-message"]').text();
  const button = wrapper.find('[data-test="increment-button"]');

  button.simulate("click");
  expect(errorMessage).toEqual("");
});
