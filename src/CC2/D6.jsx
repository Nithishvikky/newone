import React, { useState } from "react";

const homeData = [
  {
    id: 1,
    name: "Victus Laptop",
    price: "53,990",
    imgUrl:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71AToeJUPBL._SY355_.jpg",
    web:"https://www.amazon.in/HP-16-1-inch-Response-Graphics-16-e0650ax/dp/B0B2KGJ212/ref=sr_1_1_sspa?crid=2KW9YCQ3BETQF&keywords=victus+laptop&qid=1680676789&sprefix=victus%2Caps%2C283&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"  
  },
  {
    id: 2,
    name: "MSI Katana",
    price: "1,01,990",
    imgUrl:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71yxQ9XaIwL._AC_SS450_.jpg",
    web:"https://www.amazon.in/dp/B0BW9HGBHP/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=c2879f4c326f61a45e5e71f93a851100&content-id=amzn1.sym.f2e74a72-0286-402b-ae7d-4395a990fd1f%3Aamzn1.sym.f2e74a72-0286-402b-ae7d-4395a990fd1f&hsa_cr_id=0&pd_rd_plhdr=t&pd_rd_r=569066db-5d17-4d9b-bc4e-a6979842e675&pd_rd_w=5tT5K&pd_rd_wg=3NuHX&qid=1680676942&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987"
  },
  {
    id: 3,
    name: "ASUS TUF",
    price: "79,990",
    imgUrl:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61+DLbuLHTL._AC_SS450_.jpg",
    web:"https://www.amazon.in/ASUS-15-6-inch-NVIDIA-GeForce-RTX-3050-Battery-FA506ICB-HN005W/dp/B09ZXVY6NR/ref=sr_1_fkmr0_1?crid=22KA0G7A5UM7P&keywords=asus+tuf+79900&qid=1680677083&s=computers&sprefix=asus+tuf+79900%2Ccomputers%2C480&sr=1-1-fkmr0"
  },
];

export const D6 = () => {
  const [items, setItems] = useState(homeData);

  return (
    <div className="row">

      {items.map((e) => (
        <>
          <div class="card col" style={{width:"18rem"}}>
            <img
              class="card-img-top"
              src={e.imgUrl}
              key={e.id}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" key={e.id}>
                {e.name}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">{e.price}</h6>
              <a href={e.web} target="blank" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
