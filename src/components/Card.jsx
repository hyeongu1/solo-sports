import axios from "axios";

const API_URL = "http://api.odcloud.kr/api";
const AUTH_KEY = "VY0kJp0hYcMV1TBsds584abcL0diYMf7NinyBW7r94J9UAXkPt2ubos/2UXuX+XtGaYsyBgXTw+c5otZLp7iGg==";

async function fetchData() {
    try {
      const response = await axios.get(`${API_URL}/endpoint`, {
        headers: {
          Authorization: `Bearer ${AUTH_KEY}`,
        },
        // 요청에 필요한 다른 옵션들을 설정할 수 있습니다.
      });
  
      // 응답 데이터를 처리하는 로직을 작성합니다.
      console.log(response.data);
    } catch (error) {
      // 오류 처리 로직을 작성합니다.
      console.error(error);
    }
  }
  
  // fetchData 함수를 호출하여 데이터를 요청합니다.
  fetchData();

  
  
  
  
  

