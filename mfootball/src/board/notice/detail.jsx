import '../../css/board.css'
import { useEffect, useState } from "react";

export default function Detail() {

  return (
<div className="home container py-4">
  <h2 className="notice-title">공지사항 세부</h2>
  <table className="notice-table" border="1">
      <thead>
        <tr>
          <th>순번</th>
          <th>제목</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <td></td>
        <td></td>
        <td></td>
      </tbody>
    </table>
 
</div>
  );
}