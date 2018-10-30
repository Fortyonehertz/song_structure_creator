

export class SimpleTime {
    minutes: number = 0;
    seconds: number = 0;
    timeString: string = "0:00";
    MAX_SECONDS: number = 360;

    public scaleTime(scalar: number) {
        var newSeconds = Math.round(scalar * this.MAX_SECONDS);
        this.minutes = Math.round(newSeconds / 60);
        this.seconds = Math.round(newSeconds % 60);
        if (this.seconds <= 9) {
            this.timeString = String(this.minutes) + ":0" + String(this.seconds);
        } else {
            this.timeString = String(this.minutes) + ":" + String(this.seconds);
        }
         
        return(this.timeString)
    }

    public getSeconds() {
        return this.seconds;
    }

    public getMinutes() {
        return this.minutes;
    }
}