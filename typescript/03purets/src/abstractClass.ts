abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }

    abstract getSepia():void
    getReelTime():number{
        // logic here
        return 8;
    }
}


class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { 
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log('got sepia')
    }

}
const lokesh = new Instagram('original', 'micro',3)
lokesh.getReelTime();