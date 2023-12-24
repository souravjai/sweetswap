import candyOne from "../assets/Candy (1).png"
import candyTwo from "../assets/Candy (2).png"
import candyThree from "../assets/Candy (3).png"
import candyFour from "../assets/Candy (4).png"
import candyFive from "../assets/Candy (5).png"

const candies = [
    1, 2, 3, 4, 5
]

const mapper = (index) => {
    const wrapper = [candyOne, candyTwo, candyThree, candyFour, candyFive];
    return wrapper[index - 1];
}

export { mapper, candies };