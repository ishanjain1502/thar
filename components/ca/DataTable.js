import React from "react";

export default function DataTable({ userData }) {
  return (
    <table className="table-auto text-left w-full">
      <tbody>
        <tr>
          <td>Address </td>
          <td> {userData.address} </td>
        </tr>

        <tr>
          <td>Email</td>
          <td> {userData.email} </td>
        </tr>
        <tr>
          <td>Phone </td>
          <td> {userData.phone} </td>
        </tr>
        <tr>
          <td>Referral code </td>
          <td> {userData.referralCode} </td>
        </tr>
        <tr>
          <td>College </td>
          <td> {userData.college} </td>
        </tr>
        <tr>
          <td>Year </td>
          <td> {userData.year} </td>
        </tr>
        <tr>
          <td>Degree </td>
          <td> {userData.degree} </td>
        </tr>
      </tbody>
    </table>
  );
}
