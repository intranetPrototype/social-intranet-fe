/* tslint:disable */
/* eslint-disable */
export interface User {

  /**
   * Has user confirmed registration
   */
  confirmed: boolean;

  /**
   * User email
   */
  email: string;

  /**
   * User first name
   */
  firstName: string;

  /**
   * User id
   */
  id: number;

  /**
   * User last name
   */
  lastName: string;

  /**
   * User roles
   */
  role: Array<string>;
}
