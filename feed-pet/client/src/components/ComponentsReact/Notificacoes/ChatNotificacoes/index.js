import { Modal, Button, Popover, Dropdown } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { api } from "../../../../service";
import { Link } from "react-router-dom";
import Overlay from "react-overlays/esm/Overlay";
import { RiChatHeartLine } from "react-icons/ri"
import { ChatBox } from "../../WebChat/ChatBox";
import { Chat } from "../../WebChat/Chat";
import { GiVibratingBall } from "react-icons/gi"

const jwt = require('jsonwebtoken');

export function ModalChat(props) {
  const [show, setShow] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(async () => {
    setShow(!show);
    const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
    if (token?.sub){
      try {
        const res = await api.get("/chats/");
        let chats = res.data[0]
        setChats(chats)
      } catch (error) {
        console.log(error)
      }
    }
   
  },[])

  function handleClick(e){
    let alerta = document.querySelectorAll(".chatMenu")
    alerta[0].className = "chatMenu invisivel"

  }
  return (
    <>
      <Dropdown className="menuNotificacao" onClick={handleClick} 
      >
        <Dropdown.Toggle id="dropdown-basic" className="menuchaticon">
          <RiChatHeartLine size='30' />
          <div className="chatMenu invisivel">
              <GiVibratingBall color="red" size='20'></GiVibratingBall>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            {(chats.length<1)&&<p>Não há mensagens Ainda!</p>}
          </Dropdown.Item>
          {<Chat estado="menu"/>}

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

// export function ModalChat(props) {
//   const [show, setShow] = useState(false);
//   const [notificacoes, setNotificacoes] = useState([]);
//   const [target, setTarget] = useState(null);
//   const ref = useRef(null);

//   const handleClick = (event) => {
//     setShow(!show);
//     setTarget(event.target);
//   };

//   // const handleShow = async () => {
//   //   setShow(true)
//   //   try {
//   //     const res = await api.get(`/alertas/`);
//   //     let animal = res.data.filter(alerta => alerta.concluido == false)
//   //     console.log(animal)
//   //     setAnimais(animal)
//   //   } catch (error) {
//   //     console.log(error)
//   //   }

//   // };


//   return (
//     <>
//           <Button
//         classNameName="btn"
//         id="botaogeraralerta"
//         class="btn btn-primary"
//         onClick={handleClick}
//       >
//         {" "}
//         <RiChatHeartLine/>
//       </Button>
//         <div ref={ref}>


//       <Overlay
//         show={show}
//         target={target}
//         placement="bottom"
//         container={ref}
//         containerPadding={20}
//       >
//         <Popover id="popover-contained">
//           <Popover.Header as="h3">Popover bottom</Popover.Header>
//           <Popover.Body>
//             <strong>Holy guacamole!</strong> Check this info.
//           </Popover.Body>
//         </Popover>
//       </Overlay>
//     </div>

//     </>
//   );
// }
