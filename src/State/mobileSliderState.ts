import {createEvent, createStore} from "effector";
import {left, right} from "../scroll";

interface mobileSliderState {
    position: "Left" | "Right";
}

export const $mobileSliderState = createStore("Left");
export const changePosition = createEvent();

$mobileSliderState.on(changePosition, (_) => {
    if (_ === "Left") {
        right();
        return "Right";
    } else {
        left();
        return "Left";
    }
})


