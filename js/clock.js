$(document).ready(function() {
  let clock;

  // Lấy ngày hiện tại
  let currentDate = new Date();

  // Ngày bắt đầu yêu (15h45 ngày 15/10/2024)
  let startDate = moment.tz("2024-10-15 15:45", "Asia/Ho_Chi_Minh");

  // Tính số giây đã trôi qua kể từ ngày bắt đầu yêu
  let diff = currentDate.getTime() / 1000 - startDate / 1000;

  if (diff < 0) {
    // Nếu ngày hiện tại trước ngày yêu, đặt số ngày yêu là 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: false,  // Đếm tiến
      autostart: true
    });
    console.log("Chưa đến ngày yêu!");
    
  } else {
    // Nếu ngày yêu đã bắt đầu, hiển thị số ngày yêu
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: false,  // Đếm tiến
      autostart: true,
      callbacks: {
        start: function() {
          console.log("Bắt đầu đếm số ngày yêu!");
        }
      }
    });
    
    // Cập nhật số ngày yêu theo thời gian thực
    setInterval(function() {
      let currentTime = new Date().getTime() / 1000;
      let newDiff = currentTime - startDate / 1000;
      clock.setTime(newDiff);
    }, 1000);
  }
});
