const wrapper = document.createElement("wrapper");
document.body.appendChild(wrapper);
wrapper.style.position = "flex";
wrapper.style.width = "100%";
wrapper.id = "wrapper";
const backgroundImage = document.createElement("img");
backgroundImage.src = "../images/background-library.jpg";
const body = document.getElementById("body");
wrapper.appendChild(backgroundImage);
backgroundImage.style.width = "100%";
backgroundImage.style.height = "800px";

const buttonM = document.createElement("div");
buttonM.className = "buttonM";
wrapper.appendChild(buttonM);
buttonM.style.position = "absolute";

const btnOurBooks = document.createElement("a");
btnOurBooks.className = "btnOurBooks";
btnOurBooks.textContent = "Which book is next?";
btnOurBooks.href = "#book";
buttonM.appendChild(btnOurBooks);
btnOurBooks.style.color = "white";
// btnOurBooks.style.border = "3px solid #ffdead";
btnOurBooks.style.borderRadius = "50px";
btnOurBooks.style.fontSize = "32px";
btnOurBooks.onClick = function () {
  location.href = "#wrapper";
};
const h2 = document.createElement("H2");
const txt2 = document.createTextNode("Look, what we have prepared for you!");
h2.appendChild(txt2);
h2.id = "books";
document.body.appendChild(h2);
h2.style.padding = "50px 250px 50px 0px";
h2.style.fontSize = "40px";
h2.style.color = "white";
h2.style.textAlign = "center";

fetch("./books.json")
  .then((response) => {
    return response.json();
  })
  // .then((data) => {
  //   console.log(data);
  //   console.log(data[1].author);
  // })
  .then((data) => {
    var dataset = data;
    dataset.map((arr) => {
      const card = document.createElement("section");
      const container = document.createElement("div");
      container.classList = "div";
      card.appendChild(container);
      document.getElementsByTagName("body")[0].appendChild(container);
      card.style.display = "flex";
      container.style.float = "left";
      container.style.width = "50%";
      container.style.display = "flex";
      // container.style.border = "3px solid yellow";
      container.style.borderRadius = "20px";
      container.style.width = "500px";
      container.style.height = "320px";
      container.style.padding = "20px";
      container.style.margin = "20px";

      const div = document.createElement("div");
      div.id = "book";
      div.className = "book";
      container.appendChild(div);
      const bookimg = document.createElement("div");
      bookimg.className = "bookimg";
      div.appendChild(bookimg);
      bookimg.style.width = "250px";
      btnOurBooks.onclick = function () {
        location.href = "#header";
      };
      const img = document.createElement("img");
      img.className = "img";
      img.src = `${arr.imageLink}`;
      bookimg.appendChild(img);
      img.style.width = "240px";
      img.style.height = "280px";

      const textarea = document.createElement("div");
      textarea.className = "textarea";
      container.appendChild(textarea);
      textarea.style.flexDirection = "column";
      textarea.style.width = "250px";
      textarea.style.display = "flex";
      textarea.style.alignItems = "center";
      textarea.style.textAlign = "center";

      const title = document.createElement("h2");
      title.className = "title";
      textarea.appendChild(title);
      title.innerHTML = `${arr.title}`;
      title.style.color = "#000";

      const h3 = document.createElement("h3");
      h3.className = "h3";
      textarea.appendChild(h3);
      h3.innerHTML = `${arr.author}`;
      h3.style.color = "#008b8b";
      const h4 = document.createElement("h3");
      h4.className = "h3";
      h4.id = "h3";
      textarea.appendChild(h4);
      h4.innerHTML = ` ${arr.price}` + "$";
      h4.style.color = "#000";

      const button = document.createElement("section");
      button.className = "button";
      textarea.appendChild(button);
      button.style.paddingTop = "30px";

      const button1 = document.createElement("button");
      button1.className = "button1";
      button1.textContent = "Show More ";
      button.appendChild(button1);
      button1.style.marginRight = "10px";
      // button1.style.border = "3px solid #008b8b";
      button1.style.borderRadius = "50px";
      button1.style.backgroundColor = "#FFF";
      button1.style.fontSize = "15px";

      const button2 = document.createElement("button");
      button2.className = "button2";
      button2.textContent = "Add To Cart";
      button.appendChild(button2);
      // button2.style.border = "3px solid #008b8b";
      button2.style.borderRadius = "50px";
      button2.style.backgroundColor = "#FFF";
      button2.style.fontSize = "15px";

      const modal = document.createElement("div");
      modal.className = "modal";
      modal.style.display = "none";
      modal.style.position = "fixed";
      document.getElementsByTagName("body")[0].appendChild(modal);

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      modal.appendChild(modalContent);

      const modalheader = document.createElement("p");
      modalheader.className = "modalHeader";
      modalheader.innerHTML = `${arr.author}`;
      modalContent.appendChild(modalheader);

      const modalBody = document.createElement("p");
      modalBody.className = "modalBody";
      modalBody.innerHTML = `${arr.description}`;
      modalContent.appendChild(modalBody);

      const close = document.createElement("span");
      close.className = "close";
      close.textContent = "close";
      modalContent.appendChild(close);

      // When the user clicks the button, open the modal
      button1.onclick = function () {
        modal.style.display = "block";
      };
      close.onclick = function () {
        modal.style.display = "none";
      };
    });
  });

const orderSection = document.createElement("div");
orderSection.className = "order-section";
orderSection.textContent = "";
wrapper.appendChild(orderSection);

const order = document.createElement("div");
order.className = "order";
orderSection.appendChild(order);

const item = document.createElement("div");
item.className = "item";
item.textContent = "Add here:";
order.appendChild(item);

const total = document.createElement("div");
total.className = "sum";
total.textContent = "Total price:";
order.appendChild(total);

const orderbtn = document.createElement("a");
orderbtn.className = "orderbtn";
orderbtn.textContent = "Order";
orderbtn.href = "../Order Form/index.html";
order.appendChild(orderbtn);
