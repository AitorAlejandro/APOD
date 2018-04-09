export class Apod {
  // Date of image
  public date: String;

  // The supplied text explanation of the image
  public explanation: String;

  // The type of media (data) returned. May either be 'image' or 'video'
  public media_type: String;

  // The title of the image
  public title: String;

  // The URL of the APOD image or video of the day.
  public url: String;

  // will be ommited in the response IF it does not exist
  public hdurl: String;
}
