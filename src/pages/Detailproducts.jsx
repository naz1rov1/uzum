import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const DetailProducts = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("Xatolik:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Yuklanmoqda...</h2>
    );

  if (!product) return <h2>Mahsulot topilmadi!</h2>;

  // Thumbnail uchun rasm array’ini tayyorlash
  const thumbImages =
    product.images.length === 1
      ? [...product.images, ...product.images] // 1 rasm bo‘lsa, ikki marta qo‘shamiz
      : product.images;

  return (
    <div className="detail-container">
      <div className="detail-in">
        <h2>{product.title}</h2>
        <div className="detail-in1">
          <p>⭐⭐⭐⭐⭐</p>
          <p>4.8 ( 2817 sharh )</p>
          <p>191 fotosurat</p>
          <p>16000+ buyurtma</p>
        </div>
        <div className="skidka-btn">
          <button className="forty">-40%</button>
          <button className="orginal">ORIGINAL</button>
          <button className="super">SUPERNARX</button>
        </div>
      </div>
      <div className="detail">
        <div className="left-gallery">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={2}
            direction="vertical"
            watchSlidesProgress
            style={{ height: "160px" }}
          >
            {thumbImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="thumb" className="thumb" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

 
        <div className="main-gallery">
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className="main-swiper"
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="product" className="main-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* O‘ng - product tafsilotlari */}
        <div className="product-info">
          <h2>{product.title}</h2>

          <div className="rating">
            <span>⭐ {product.rating}</span>
            <span className="reviews">({product.stock} ta sharh)</span>
          </div>

          <div className="price-section">
            <p className="old-price">
              {(product.price * 1.5).toLocaleString()} so‘m
            </p>
            <h3 className="new-price">{product.price.toLocaleString()} so‘m</h3>
            <p className="discount">-40%</p>
          </div>

          <p className="desc">{product.description}</p>

          <div className="options">
            <button className="btn-buy">1 klikda xarid qilish</button>
            <button className="btn-cart" onClick={() => addToCart(product)}>
              <i className="fa-solid fa-basket-shopping"></i> Savatchaga
              qo‘shish
            </button>
          </div>

          <div className="delivery">
            <p>🚚 Ertaga yetkazib beramiz</p>
            <p>✅ Sklad: {product.stock} dona mavjud</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProducts;
