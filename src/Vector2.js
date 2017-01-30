/**
 * Created by Buwalda on 19-12-16.
 */
export default class Vector2 {
    constructor(x=0,y=0)
    {
        this.x = x;
        this.y = y;
    }

    static get zero()
    {
        return new Vector2();
    }

    static get one()
    {
        return new Vector2(1,1);
    }

    static get down()
    {
        return new Vector2(0,-1);
    }

    static get up()
    {
        return new Vector2(0,1);
    }

    static get left()
    {
        return new Vector2(-1,0);
    }

    static get right()
    {
        return new Vector2(1,0);
    }

    get Magnitude()
    {
        return this.x*this.x+this.y*this.y;
    }
}