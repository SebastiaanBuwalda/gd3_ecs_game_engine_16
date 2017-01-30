import Rectangle from './Rectangle';
import Vector2 from  './Vector2';


export default class Main {

    constructor(){
        console.log("main app is running");

        let testRectangle = new Rectangle(10, 10, 50, 50);
        let testVector = new Vector2(5,5);
        //console.log(testRectangle.contains(2, 20));
        console.log(testVector.Magnitude());
    }

}