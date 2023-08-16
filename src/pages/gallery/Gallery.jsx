import Header from '../../components/Header';
import HeaderImage from '../../images/galleryheader.jpg';
import './gallery.css';



const Gallery = () => {
  const gallerylength = 30;
  const images = []

  for(let i =1; i <= gallerylength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
    <Header title='Our Gallery' image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Voluptates, in.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery img ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
};

export default Gallery;
