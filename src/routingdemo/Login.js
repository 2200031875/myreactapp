import React from 'react'

export default function Login() {
  return (
    <div>
        <h3 align="center"><u>Login page</u></h3>
        <form>
          <table align="center">
            <tr>
              <td><b>Enter Email Address</b></td>
              <td><input type="email"/></td>
            </tr>
            <tr>
            <td><b>Enter Password</b></td>
              <td><input type="password"/></td>
            </tr>
            <tr align="center">
              <td colSpan={2}><input type="submit" value="Login" className='button'/></td>
            </tr>
          </table>
        </form>
    </div>
  )
}

// if take colSpan it will merge 2 td's