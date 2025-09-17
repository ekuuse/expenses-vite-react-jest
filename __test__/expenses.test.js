import React from "react";
import App from "../src/App.jsx";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// whatever this fix is supposed to be cuz jest SUCKS in react
beforeEach(() => {
  const backdropRoot = document.createElement('div');
  backdropRoot.setAttribute('id', 'backdrop-root');
  document.body.appendChild(backdropRoot);

  const overlayRoot = document.createElement('div');
  overlayRoot.setAttribute('id', 'overlay-root');
  document.body.appendChild(overlayRoot);
});

afterEach(() => {
  const backdropRoot = document.getElementById('backdrop-root');
  if (backdropRoot) document.body.removeChild(backdropRoot);

  const overlayRoot = document.getElementById('overlay-root');
  if (overlayRoot) document.body.removeChild(overlayRoot);
});

// literally all these tests failed because "React is not imported" even though it wasn't needed
// bandaid fix by importing React in every jsx component ever

it("should create an expense", async () => {
  render(<App />);
  const add = screen.getByRole('button', { name: /add expense/i });
  userEvent.click(add)
  var titleinput
  await waitFor(() => {
    titleinput = screen.getByRole('textbox', { name: /title/i })
    expect(titleinput).toBeInTheDocument()
  });

  const amountinput = screen.getByRole('spinbutton', { name: /price/i })
  const dateinput = screen.getByLabelText(/date/i);

  const submit = screen.getByRole('button', { name: /add/i });
  await userEvent.type(titleinput, "ritzcar");
  await userEvent.type(amountinput, "10.50");
  await userEvent.type(dateinput, "2023-01-02");
  await userEvent.click(submit);

  const addedExpense = await screen.findByText("ritzcar");
  expect(addedExpense).toBeInTheDocument();
});


it("should create an expense in the 2024 filter, as its unseen due to 2023 being the default", async () => {
  render(<App />);
  const add = screen.getByRole('button', { name: /add expense/i });
  userEvent.click(add)
  var titleinput
  await waitFor(() => {
    titleinput = screen.getByRole('textbox', { name: /title/i })
    expect(titleinput).toBeInTheDocument()
  });

  const amountinput = screen.getByRole('spinbutton', { name: /price/i })
  const dateinput = screen.getByLabelText(/date/i);

  const submit = screen.getByRole('button', { name: /add/i });
  await userEvent.type(titleinput, "oi oi u stupid cat");
  await userEvent.type(amountinput, "16.50");
  await userEvent.type(dateinput, "2024-01-02");
  await userEvent.click(submit);

  const addedExpense = await screen.queryByText("oi oi u stupid cat");
  expect(addedExpense).toBeNull()
});

it("should find the previously created expense when switching filter", async () => {
  render(<App />);
  const yearSelect = screen.getByLabelText(/filter by year/i);
  await userEvent.selectOptions(yearSelect, "2024");
  expect(yearSelect.value).toBe("2024");

  const previouslyAddedExpense = await screen.queryByText("oi oi u stupid cat");
  expect(previouslyAddedExpense).toBeInTheDocument()
});

it("should find the previously created expense and click the button", async () => {
  render(<App />);
  const yearSelect = screen.getByLabelText(/filter by year/i);
  await userEvent.selectOptions(yearSelect, "2024");
  expect(yearSelect.value).toBe("2024");
  
  const previouslyAddedExpense = screen.getByText("oi oi u stupid cat");
  expect(previouslyAddedExpense).toBeInTheDocument();

  const clickButton = previouslyAddedExpense.closest(".expense-item").querySelector("button");
  await userEvent.click(clickButton);

  const updatedTitle = await screen.findByText(/updated by click oi oi u stupid cat/i);
  expect(updatedTitle).toBeInTheDocument();

  const updatedPrice = screen.getByText(/updated by click oi oi u stupid cat/i);
  expect(updatedPrice).toBeInTheDocument();
});

it("should show an error on invalid input", async () => {
  render(<App />);
  const add = screen.getByRole('button', { name: /add expense/i });
  userEvent.click(add)
  var titleinput
  await waitFor(() => {
    titleinput = screen.getByRole('textbox', { name: /title/i })
    expect(titleinput).toBeInTheDocument()
  });

  const amountinput = screen.getByRole('spinbutton', { name: /price/i })
  const dateinput = screen.getByLabelText(/date/i);

  const submit = screen.getByRole('button', { name: /add/i });
  await userEvent.type(titleinput, "haha");
  await userEvent.type(amountinput, "number");
  await userEvent.click(submit);

  const modalTitle = await screen.findByText(/invalid input/i);
  const modalMessage = await screen.findByText(
    /please enter a valid title or amount or date/i
  );

  expect(modalTitle).toBeInTheDocument();
  expect(modalMessage).toBeInTheDocument();
});