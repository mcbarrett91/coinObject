const bodyElement = document.querySelector("body");

const coin = {
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
    image.style.height = "100px";
    image.style.width = "100px";
    if (this.state === 0) {
      image.src = "images/heads.jpg";
    } else {
      image.src = "images/tails.jpg";
    }
    return image;
  },
};

function dipslay20Flips() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    bodyElement.append(coin.toString());
    document.write("<br>");
    coin.state = 0;
  }
}

function display20Images() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    bodyElement.append(coin.toHTML());
    document.write("<br>");
    coin.state = 0;
  }
}

dipslay20Flips();
display20Images();
