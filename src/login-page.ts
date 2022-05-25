export class LoginPage {
  public static parameters = ['id'];
  public message = 'Login...';

  load(parameters, instruction) {
    console.log("LOGIN with ", parameters.id);
  }
}
