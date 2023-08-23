const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://www.bing.com/images/search?view=detailV2&ccid=dicir8rc&id=7430DA36A278F7E171A6162BB1868F034962C572&thid=OIP.dicir8rckMvRVPAZcZpgCwHaHa&mediaurl=https%3a%2f%2fi5.walmartimages.com%2fasr%2fc198f40b-b3be-4ec1-8cd2-be316896aaf0_1.344c0b6baa14263ef5b958109bd06f1d.jpeg%3fodnWidth%3d1000%26odnHeight%3d1000%26odnBg%3dffffff&exph=1000&expw=1000&q=high+back+bench&simid=608027074559678098&FORM=IRPRST&ck=7E56665B36FCD780AE37CC3C8E2DC182&selectedIndex=5&ajaxhist=0&ajaxserp=0',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
    price: 9.99,
  },
];

// display array data using map function
function productData(mydata) {
  const newProduct = mydata.map(function (value) {

    return `<article class="product">
  <img
    src="${value.image}"
    class="product-img img"
    alt=""
  />
  <footer>
    <h5 class="product-name">${value.title}</h5>
    <span class="product-price">${value.price}</span>
  </footer>
</article>`
  });

  //console.log(newProduct)

  document.getElementById("product").innerHTML = newProduct.join(" ")

};


// find unique button from product 

let sortbuttons = products.reduce(function (pre, value) {
  if (pre.includes(value.company) == false) {
    pre.push(value.company)
  }
  return pre;
}, []);

// display unique values(button)
let button = sortbuttons.map(function (value) {
  return `<button class="company-btn" onclick="filterdata('${value}')">${value}</button>`
})
// filter data of product and display
function filterdata(companyname) {
  //alert(companyname)
  let productlist = products.filter(function (value) {
    return value.company == companyname
  })
  //console.log(productlist)
  productData(productlist);


};
// filterdata on input text 
function filterBasedOnTitle() {
  let title = document.getElementById("searchTerm").value;
  let filterinputdata = products.filter(function (value) {
    return value.title.toLowerCase() == title.toLowerCase()
  });

  productData(filterinputdata)
}
productData(products)
document.getElementById("com").innerHTML = button.join(" ")

