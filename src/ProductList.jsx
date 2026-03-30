import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Peace Lily', price: 12.99, description: 'Removes toxins and improves air quality.', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg' },
      { name: 'Spider Plant', price: 9.99, description: 'Easy to care for and purifies air.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_-_01.jpg/800px-Chlorophytum_comosum_-_01.jpg' },
      { name: 'Snake Plant', price: 14.99, description: 'Tolerates low light and purifies air.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/800px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
      { name: 'Aloe Vera', price: 8.99, description: 'Great for skin care and air purification.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png' },
      { name: 'Boston Fern', price: 11.99, description: 'Removes formaldehyde from the air.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Boston_fern_Nephrolepis_exaltata.jpg/800px-Boston_fern_Nephrolepis_exaltata.jpg' },
      { name: 'Rubber Plant', price: 15.99, description: 'Effective at removing toxins.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_variegata.jpg/800px-Ficus_elastica_variegata.jpg' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', price: 13.99, description: 'Calming fragrance, great for relaxation.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/800px-Hapus_Mango.jpg' },
      { name: 'Jasmine', price: 10.99, description: 'Sweet fragrance that fills any room.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jasminum_polyanthum.jpg/800px-Jasminum_polyanthum.jpg' },
      { name: 'Gardenia', price: 16.99, description: 'Beautiful white blooms with heavenly scent.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Gardenia_jasminoides.jpg/800px-Gardenia_jasminoides.jpg' },
      { name: 'Mint', price: 5.99, description: 'Fresh mint scent, great for kitchen.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/800px-Hapus_Mango.jpg' },
      { name: 'Rosemary', price: 7.99, description: 'Aromatic herb with many uses.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jasminum_polyanthum.jpg/800px-Jasminum_polyanthum.jpg' },
      { name: 'Eucalyptus', price: 12.49, description: 'Refreshing menthol scent, air freshener.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Gardenia_jasminoides.jpg/800px-Gardenia_jasminoides.jpg' },
    ],
  },
  {
    category: 'Succulents & Cacti',
    plants: [
      { name: 'Echeveria', price: 6.99, description: 'Rosette-shaped succulent, easy to grow.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Echeveria_-_a_rosette-forming_succulent.jpg/800px-Echeveria_-_a_rosette-forming_succulent.jpg' },
      { name: 'Jade Plant', price: 9.49, description: 'Symbol of good luck and prosperity.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Jade_Plant_Crassula_ovata.jpg/800px-Jade_Plant_Crassula_ovata.jpg' },
      { name: 'Barrel Cactus', price: 11.49, description: 'Classic cactus with minimal care needed.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ferocactus_wislizeni_0001.JPG/800px-Ferocactus_wislizeni_0001.JPG' },
      { name: 'Haworthia', price: 7.49, description: 'Small and perfect for windowsills.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Echeveria_-_a_rosette-forming_succulent.jpg/800px-Echeveria_-_a_rosette-forming_succulent.jpg' },
      { name: 'Prickly Pear', price: 8.49, description: 'Edible cactus with colorful pads.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ferocactus_wislizeni_0001.JPG/800px-Ferocactus_wislizeni_0001.JPG' },
      { name: 'Sempervivum', price: 5.49, description: 'Hens and chicks, incredibly hardy.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Jade_Plant_Crassula_ovata.jpg/800px-Jade_Plant_Crassula_ovata.jpg' },
    ],
  },
];

function ProductList({ onCartClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <span className="logo">Paradise Nursery</span>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <div className="cart-icon" onClick={onCartClick}>
            <span>&#128722;</span>
            {totalCartCount > 0 && (
              <span className="cart-count">{totalCartCount}</span>
            )}
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: '70px', padding: '80px 20px 20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Plant Collection</h1>
        {plantCategories.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.name)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
