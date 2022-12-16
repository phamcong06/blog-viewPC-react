import { React, useState } from "react";
function Home() {
  return (
    <div className="flex flex-row w-full h-44  p-3 gap-3 cursor-pointer hover:border-2 border-indigo-500 box-border">
      <div className="w-1/3">
        <img src="https://picsum.photos/seed/picsum/536/354" alt="" />
      </div>
      <div className="content flex flex-col w-2/3 " >
        <div className="content_title font-bold w-full">Lorem Ipsum là gì?</div>
        <div className="content_text">
          Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
          trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
          như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
          khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành ...
        </div>
      </div>
    </div>
  );
}
export default Home;
