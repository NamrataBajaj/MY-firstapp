function Home() {
  return (
    <>
      <section class="abc bg-black">
        <div className="container-fluid">
          <div className="row">
            <div className="p-0 col-md-12">
              <video className="img-fluid object-fit-cover video" autoPlay loop muted autobuffer preload="auto" src="https://testvideosfirst.s3.ap-south-1.amazonaws.com/firstfiddlev2/bannervideo.mp4" ></video>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-black">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fhome%2Fhmm.jpg&w=640&q=75"
                className="img-fluid" alt="9"></img>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <h2 className="only"><b>GET TO <br></br> KNOW <span className="text-warning">
                US</span></b></h2>
              <p className="startup">First Fiddle Restaurants, one of India's leading and widely recognised F&B
                companies, is owned
                and piloted by Priyanka Sukhija. A pioneer in the industry, he started First Fiddle Restaurants
                in 1999 with his first brand, Lazeez Affaire, which is a loved fine dine space even today.
                Having completed 24 years since, the company now has more than 15 + brands and 35+ outlets to
                it's name!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="wait"><b>The Game <span className="text-warning">Changer <br></br></span><span className="warning"> Priyank Sukhija</span></b></h2><br></br>
              <p className="pt-5">With over 30 restaurants in 23 years under his belt, the prolific restaurateur
                Priyank Sukhija
                has become somewhat of a legend in the industry, starting his journey at a mere age of 19.
                Priyank was the first in his family to venture into business, hailing from a family of lawyers,
                going on to create an empire in F&B. Following his heart and tongue through his F&B career,
                Priyank has successfully created some of the most talked-about brands in the industry - Diablo,
                Lord of the Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying Saucer Cafe, and
                many more.</p>
            </div>
            <div className="col-md-6" >
             <div data-aos="fade-up"  data-aos-duration="3000">
             <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fhome%2Fhmm.jpg&w=640&q=75"
                className="img-fluid" alt="fiddle"></img>

             </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container">
          <h1 className="text-center pt-5 pick"><b>Pick A <span className="text-warning">Brand</span></b></h1>
          <div className="row">
            <div className="col-md-4">
              <img src="https://firstfiddle.in/_next/image?url=https%3A%2F%2Ffirstfiddle.s3.ap-south-1.amazonaws.com%2Fbrands%2Flogo%2F1693046587077_lotd1.jpg&w=640&q=75" alt="" className="img-fluid pt-4"></img>
            </div>
            <div className="col-md-4">
              <img src="https://firstfiddle.in/_next/image?url=https%3A%2F%2Ffirstfiddle.s3.ap-south-1.amazonaws.com%2Fbrands%2Flogo%2F1693043796961_lazeez1.jpg&w=640&q=75" alt="" className="img-fluid pt-4"></img>
            </div>
            <div className="col-md-4">
              <img src="https://firstfiddle.in/_next/image?url=https%3A%2F%2Ffirstfiddle.s3.ap-south-1.amazonaws.com%2Fbrands%2Flogo%2F1695726103713_tp1.jpg&w=640&q=75" alt="" className="img-fluid pt-4"></img>
            </div>
            <div className="col-md-4">
              <img src="https://firstfiddle.in/_next/image?url=https%3A%2F%2Ffirstfiddle.s3.ap-south-1.amazonaws.com%2Fbrands%2Flogo%2F1693049189307_diablo1.jpg&w=640&q=75" alt="" className="img-fluid pt-4"></img>
            </div>
            <div className="col-md-4">
              <img src="https://firstfiddle.in/_next/image?url=https%3A%2F%2Ffirstfiddle.s3.ap-south-1.amazonaws.com%2Fbrands%2Flogo%2F1693049481284_misosexy1.jpg&w=640&q=75" alt="" className="img-fluid pt-4"></img>
            </div>
            <div className="col-md-4">
              <img src="https://firstfiddle.in/_next/image?url=https%3A%2F%2Ffirstfiddle.s3.ap-south-1.amazonaws.com%2Fbrands%2Flogo%2F1693047951070_plum1.jpg&w=640&q=75" alt="" className="img-fluid pt-4"></img>
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <button className="way">view more</button>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;