import { Box } from '@mui/material';
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';
import SockJS from 'sockjs-client';
import StompJS from 'stompjs';
import { useState, useEffect, useRef } from 'react';
// import ColorChips from "../components/CallCategory";
// import styles from "../styles/Call.module.css";
import '../styles/Call.css';

const cate = [
  { id: 0, name: '물' },
  { id: 1, name: '물컵' },
  { id: 2, name: '숟가락' },
  { id: 3, name: '젓가락' },
  { id: 4, name: '포크' },
  { id: 5, name: '앞접시' },
];

export default function Call({ seat }) {
  const [clicked, setClicked] = useState([false, false, false, false, false, false]);
  let request = '';

  const sendRequest = async () => {
    await sendRequestString();
    handleRequest();
  };

  const sendRequestString = async () => {
    await setRequestString();
    sendReq();
  };
  const setRequestString = async () => {
    for (let i = 0; i < clicked.length; i++) {
      if (clicked[i]) {
        if (request === '') {
          request = cate[i].name;
        } else {
          request = request + ', ' + cate[i].name;
        }
      }
    }
  };
  const click = (e) => {
    let index = e.target.value;
    console.log(index);
    clicked[index] = !clicked[index];
    console.log(clicked);
    setClicked(() => [...clicked]);
  };
  const handleRequest = () => {
    request = '';
    setClicked([false, false, false, false, false, false]);
  };

  // const [req, setReq] = useState('물, 숟가락');
  // const [seatNum, setSeatnum] = useState(1);
  const client = useRef();

  // // seatId를 param으로 받고 Subscribe
  // const seatId = useParams();

  useEffect(() => {
    const sock = new SockJS('http://localhost:8080/stomp/chat');
    client.current = StompJS.over(sock);
    waitForConnection(client, stompConnect);
    return () => stompDisconnect();
  }, []);

  const stompConnect = () => {
    try {
      client.current.connect({}, () => {
        // // seatId를 사용한 구독
        // client.current.subscribe('/sub/message/' + { seatId }, (chat) => {
        client.current.subscribe('/sub/message/customer', (chat) => {
          const newMessage = JSON.parse(chat.body);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const stompDisconnect = () => {
    try {
      client.current.disconnect(() => {
        client.current.unsubscribe('sub-0');
      });
    } catch (error) {
      console.log(error);
    }
  };
  function waitForConnection(client, callback) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (client.current.ws.readyState === 0) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(client, callback);
        }
      },
      1, // 밀리초 간격으로 실행
    );
  }
  const sendCall = () => {
    console.log(seat);
    client.current.send(
      '/pub/chat/message/store',
      {},
      JSON.stringify({
        type: 'true',
        seatNum: seat.seatNum,
      }),
    );
  };

  const sendReq = () => {
    if (request === '') {
      alert('요청메뉴를 선택하세요!');
    } else {
      client.current.send(
        '/pub/chat/message/store',
        {},
        JSON.stringify({
          content: request,
          type: 'false',
          seatNum: seat.seatNum,
        }),
      );
    }
  };
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '30px' }}>
        {cate.map((item, index) => {
          return (
            <>
              <button
                onClick={click}
                value={item.id}
                className={'button' + (clicked[index] ? ' buttonClicked' : '')}
              >
                {item.name}
              </button>
            </>
          );
        })}
        <Box
          sx={{
            display: 'flex',
            width: 1,
            height: '50vh',
            justifyContent: 'flex-end',
          }}
        >
          <button onClick={sendRequest} className={'subButton'}>
            요청
          </button>
        </Box>

        <button className={'callServer'} onClick={sendCall}>
          직원만 호출하기
        </button>
      </Box>
    </>
  );
}
