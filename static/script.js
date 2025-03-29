// static/script.js

// 예시 학생 데이터 (실제에서는 서버에서 불러와야 함)
const studentData = [
  { id: '2023001', name: '홍길동', googleId: 'honggd@example.com', password: 'pass1234' },
  { id: '2023002', name: '김민지', googleId: 'kimmj@example.com', password: 'pw5678' },
  { id: '2023003', name: '이준호', googleId: 'leejh@example.com', password: 'abcd1234' },
  // ... 필요시 추가
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const resultDiv = document.getElementById("result");
  const googleIdSpan = document.getElementById("google-id");
  const googlePwSpan = document.getElementById("google-pw");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentId = document.getElementById("student-id").value.trim();
    const studentName = document.getElementById("student-name").value.trim();

    const found = studentData.find(
      (student) => student.id === studentId && student.name === studentName
    );

    if (found) {
      googleIdSpan.textContent = found.googleId;
      googlePwSpan.textContent = found.password;
      resultDiv.classList.remove("hidden");
    } else {
      googleIdSpan.textContent = "";
      googlePwSpan.textContent = "";
      resultDiv.classList.remove("hidden");
      resultDiv.innerHTML = `<p style="color: red;">해당 정보를 찾을 수 없습니다. 학번과 이름을 확인해주세요.</p>`;
    }
  });
});
