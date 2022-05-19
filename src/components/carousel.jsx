
export const Carousel = () => {
    return (
       <div className="car">

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
   
  </div>
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img src="/assets/img1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0119/1222/files/Autumn_Home_Homepage_Banner-01_1424744a-f2c2-45b1-b677-820cb3a0d6b7_1512x.png?v=1650339588" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                        </div>
                   
                    )
}
///assets/img2.jpg