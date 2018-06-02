export class Puzzle {

    rewarded_resources : number;
    slicedImage: string[];
  
    constructor(rewarded_resources?: number, slicedImage?: string[], public originalImage?: string) {
      this.rewarded_resources = rewarded_resources;
      this.slicedImage = slicedImage;
  
    }
  }

  //This is the model for the puzzle