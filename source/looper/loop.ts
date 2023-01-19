import send from "../actions/sendMessage";
const delay: number = 7000;

//(
function loop() {
  setTimeout(() => {


    send("A very interesting message o-O", "no@mail.com");

    loop();
  }, delay);
}
//)();

export default loop;