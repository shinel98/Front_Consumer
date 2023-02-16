import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

// export default function ColorButtons() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button color="secondary">Secondary</Button>
//       <Button variant="contained" color="success">
//         Success
//       </Button>
//       <Button variant="outlined" color="error">
//         Error
//       </Button>
//     </Stack>
//   );
// }

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function OrderModal({ totalPrice, reset, menuList, count }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (menuList.length === 0) {
      alert("메뉴를 추가해주세요");
    } else setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const orderAndClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        sx={{ width: 1 }}
        onClick={handleOpen}
      >
        주문하기
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            주문하시겠습니까?
          </Typography>

          {menuList.map((menu, index) => (
            <Typography
              id="modal-modal-description"
              sx={{ mt: 1, textAlign: "center" }}
            >
              {menu.name} {count[index]}개
            </Typography>
          ))}

          <Typography
            id="modal-modal-description"
            sx={{ textAlign: "center", mt: 1 }}
          >
            <Divider sx={{ mb: 1 }} />총 {totalPrice}원
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            sx={{ pt: 4, justifyContent: "center" }}
          >
            {/* <Button color="secondary">Secondary</Button> */}
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={orderAndClose}
            >
              주문
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={handleClose}
            >
              취소
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
