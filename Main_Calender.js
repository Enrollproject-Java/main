const year = 2025;
const month = 11; 

const calendar = document.getElementById("calendar");

// 오늘 날짜 정보
const now = new Date();
const todayYear = now.getFullYear();
const todayMonth = now.getMonth() + 1; // getMonth()는 0부터 시작하니까 +1
const todayDate = now.getDate();

// 제목 (2025년 11월 이런거)
const title = document.createElement("h3");
title.textContent = `${year}년 ${month}월`;
title.style.textAlign = "center";
title.style.color = "#357dad";
calendar.appendChild(title);


const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const headerRow = document.createElement("div");
headerRow.className = "calendar-header";

daysOfWeek.forEach(day => {
    const cell = document.createElement("div");
    cell.textContent = day;
    headerRow.appendChild(cell);
});
calendar.appendChild(headerRow);


const firstDay = new Date(year, month - 1, 1).getDay();
const lastDate = new Date(year, month, 0).getDate();

const grid = document.createElement("div");
grid.className = "calendar-grid";


for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    grid.appendChild(empty);
}


for (let date = 1; date <= lastDate; date++) {
    const cell = document.createElement("div");
    cell.textContent = date;

    if (year === todayYear && month === todayMonth && date === todayDate) {
        cell.classList.add("today");
    }

    grid.appendChild(cell);
}

calendar.appendChild(grid);