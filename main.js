let bodyElement = document.querySelector("body");

let flipsButton = document.createElement("button");
flipsButton.append("Flips!");

let imageButton = document.createElement("button");
imageButton.append("Images!");

bodyElement.append(flipsButton);
// document.write("<br>");
bodyElement.append(imageButton);

let coin = {
  state: 0,
  flip: function () {
    if (Math.random() > 0.5) {
      this.state++;
    }
  },
  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "images/heads.jpg";
      image.style.height = "100px";
      image.style.width = "100px";
    } else {
      image.src = "images/tails.jpg";
      image.style.height = "100px";
      image.style.width = "100px";
    }
    return image;
  },
};

function dipslay20Flips() {
  //   let bodyElement = document.querySelector("body");

  for (i = 0; i < 20; i++) {
    coin.flip();
    bodyElement.append(coin.toString());
    document.write("<br>");
    coin.state = 0;
  }
}

function display20Images() {
  //   let bodyElement = document.querySelector("body");

  for (i = 0; i < 20; i++) {
    coin.flip();
    bodyElement.append(coin.toHTML());
    document.write("<br>");
    coin.state = 0;
  }
}

flipsButton.addEventListener("click", dipslay20Flips);
imageButton.addEventListener("click", display20Images);

// dipslay20Flips();
// display20Images();

// coin.flip();
// console.log(coin);
// console.log(coin.toString());
// console.log(coin.toHTML());
