let searchEl = document.querySelector("#search");
let productContainersEl = document.querySelector("#products-container");
const url = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const generateProducts = (product) => {
  return `     <div class="product-container" >
            <div class="image">
              <img src="${product.image}" alt=""  />
             
            </div>

            <div class="product-description">
              <div class="title">
                <h2 >
                 ${product.title}
                </h2>
              </div>
              <div class="description">
                <p >
                 ${product.description}
                </p>
              </div>

              <button class="btn" >${product.price} $</button>
            </div>
          </div>
`;
};

const renderProducts = (products) => {
  productContainersEl.innerHTML = "";
  products.forEach((product) => {
    productContainersEl.innerHTML += generateProducts(product);
  });
};

async function init() {
  let products = await fetchProducts();
  renderProducts(products);

  const checkTextContent = (text, seacrtext) => {
    return text.toString().toLowerCase().includes(seacrtext);
  };

  const filterHandler = (event) => {
    let searchText = event.target.value.toLowerCase();
    const filterProducts = products.filter((product) => {
      return (
        checkTextContent(product.description, searchText) ||
        checkTextContent(product.title, searchText) ||
        checkTextContent(product.price, searchText)
      );
    });

    renderProducts(filterProducts);
  };

  searchEl.addEventListener("keyup", filterHandler);
}
init();
