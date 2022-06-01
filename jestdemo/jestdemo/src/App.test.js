import {render,screen} from "@testing-library/react"
import UserEvent from "@testing-library/user-event"
import App from "./App"
test("to check render",()=>{
    render(<App></App>)
    const counter=screen.getByTestId("counter")
    const incrementAction=screen.getByText("+")
    UserEvent.click(incrementAction)
    UserEvent.click(incrementAction)
    UserEvent.click(incrementAction)
    UserEvent.click(incrementAction)
    expect(counter.textContent).toEqual("4")
})