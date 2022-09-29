import { Stomp } from "@stomp/stompjs";
import { SYSTEM_CONFIG } from "utils/StytemConfig";
import SockJS from "sockjs-client";

export default function WebSocketClient(url: any) {
  var sock = new SockJS(SYSTEM_CONFIG.webSocketUrl);
  let stompClient = Stomp.over(sock);
  sock.onopen = function () {};
  return new Promise((resolve, reject) => {
    stompClient.connect({}, (frame: any) => {
      stompClient.subscribe(url, (data) => {
        resolve(data);
        let dataH = JSON.parse(data.body);
        console.log("conneted", dataH);
      });
    });
    stompClient.activate();
  });
}
