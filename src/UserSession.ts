class UserSession {
  private static instance: UserSession; // declaring my static single instance as a private static member of type UserSession
  private user: { id: number; name: string } | null;
  private constructor() {
    // creating a private constructor to prevent instantiation from outside the class
    this.user = null;
  }
  public static getInstance(): UserSession {
    // creating a static method to return the single instance of the class UserSession
    if (!this.instance) {
      this.instance = new UserSession(); // if my isntance is not exist we creat it
    }
    return this.instance; // if my isntance is already exist we return it
  }
  public setUser(user: { id: number; name: string }): void {
    // set method  to set the user data
    this.user = user;
  }
  public getUser(): { id: number; name: string } | null {
    // get method  to get the user data
    return this.user;
  }
  public clearUser(): void {
    // method to clear user data
    this.user = null;
  }
}
export { UserSession };
