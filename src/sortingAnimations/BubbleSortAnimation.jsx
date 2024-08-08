import React from "react";
import getBubbleSortAnimations from '../sortingAlgorithms/BubbleSort.jsx';
import { Disable, Enable } from "./EnablingAndDisabling.jsx";

export default function BubbleSortAnimation(array,PRIMARY_COLOR,SECONDARY_COLOR,ANIMATION_SPEED_MS){
    
    Disable();

    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const ColorChange = animations[i][0];
      if (ColorChange>0) {
        const barOneIdx=animations[i][1];
        const barTwoIdx=animations[i][2];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = ColorChange===2 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIdx=animations[i][1];
          const newHeight1=animations[i][2];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight1}px`;
          const barTwoIdx=animations[i][3];
          const newHeight2=animations[i][4];
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const arrayBars = document.getElementsByClassName('array-bar');
    console.log(arrayBars);
    
    const time=(animations.length*ANIMATION_SPEED_MS)+1000;
    Enable(time);
}