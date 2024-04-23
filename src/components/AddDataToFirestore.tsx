import React from 'react';
import { IonButton } from '@ionic/react';
import { addRoomToFirestore } from '../firebaseUtils/addFirestoreData';

const AddRoomPage: React.FC = () => {
  const handleAddData = () => {
    const dataToAdd = {
      data: [
      {
        "RoomNo": 1,
        "RoomType": "Suite",
        "Occupancy": 2,
        "RoomPrice": 50,
        "Available": 1,
        "RoomImage": "https://firebasestorage.googleapis.com/v0/b/resort-2ffe4.appspot.com/o/images%2Froom-1.jpg?alt=media&token=a69fc089-f401-4aae-a62c-b31e163a1a18",
        "RoomDesc": "Indulge in opulence with our Suite Room, offering a spacious sanctuary adorned with luxurious furnishings and sophisticated decor. With a separate living area and bedroom, enjoy ample space for relaxation and entertainment. Immerse yourself in comfort with plush bedding, a cozy seating area, and modern amenities, including a flat-screen TV, mini-bar, and complimentary Wi-Fi. The expansive windows showcase panoramic views of the surrounding landscapes, allowing you to soak in the natural beauty. Pamper yourself in the lavish ensuite bathroom, complete with a deep soaking tub, rainfall shower, and premium toiletries. Whether you're traveling for business or leisure, our Suite Room provides the perfect blend of elegance and comfort for an unforgettable stay.",
        "RoomTitle": "The suite room at Horse Valley Resort offers luxurious accommodations with spacious living areas, elegant furnishings, modern amenities, and stunning views, ensuring a memorable and comfortable stay for guests."
      },
      {
        "RoomNo": 2,
        "RoomType": "Family",
        "Occupancy": 4,
        "RoomPrice": 35,
        "Available": 1,
        "RoomImage": "https://firebasestorage.googleapis.com/v0/b/resort-2ffe4.appspot.com/o/images%2Froom-2.jpg?alt=media&token=57bef501-8f4c-4257-b146-83f98848dec8",
        "RoomDesc": "Experience ultimate comfort and convenience in our Family Room, designed to accommodate your entire family with ample space and thoughtful amenities. Featuring multiple sleeping areas, including a comfortable queen-sized bed and bunk beds for the kids, everyone can enjoy a restful night's sleep. The spacious layout includes a cozy seating area, perfect for family bonding and relaxation. Stay entertained with a flat-screen TV, DVD player, and complimentary Wi-Fi access. The ensuite bathroom is equipped with a bathtub/shower combination and complimentary toiletries for added convenience. With plenty of storage space and a mini-fridge, our Family Room ensures a comfortable and stress-free stay for families of all sizes.",
        "RoomTitle": "The family room at Horse Valley Resort provides a cozy and welcoming atmosphere, ideal for families, featuring ample space, comfortable bedding, and convenient amenities for an enjoyable and relaxing stay together."
      },
      {
        "RoomNo": 3,
        "RoomType": "Deluxe",
        "Occupancy": 2,
        "RoomPrice": 30,
        "Available": 1,
        "RoomImage": "https://firebasestorage.googleapis.com/v0/b/resort-2ffe4.appspot.com/o/images%2Froom-3.jpg?alt=media&token=89f57c21-3b15-4a49-befc-06b0582a90fd",
        "RoomDesc": "Step into luxury in our Deluxe Room, where modern elegance meets exceptional comfort. Designed with discerning travelers in mind, this room features contemporary furnishings, stylish decor, and upscale amenities. Sink into the plush king-sized bed and enjoy a restful night's sleep, or unwind in the cozy seating area with a good book or your favorite TV show. Stay connected with complimentary Wi-Fi access, and catch up on work at the convenient workstation. The spacious ensuite bathroom boasts a walk-in rainfall shower, luxurious bathrobes, and premium toiletries for a spa-like experience. Whether you're traveling for business or leisure, our Deluxe Room offers a serene retreat in the heart of the city.",
        "RoomTitle": "The deluxe room at Horse Valley Resort offers a refined retreat with contemporary décor, plush furnishings, and upscale amenities, providing guests with an indulgent and rejuvenating experience during their stay.The suite room at Horse Valley Resort offers luxurious accommodations with spacious living areas, elegant furnishings, modern amenities, and stunning views, ensuring a memorable and comfortable stay for guests."
      },
      {
        "RoomNo": 4,
        "RoomType": "Classic",
        "Occupancy": 2,
        "RoomPrice": 25,
        "Available": 1,
        "RoomImage": "https://firebasestorage.googleapis.com/v0/b/resort-2ffe4.appspot.com/o/images%2Froom-4.jpg?alt=media&token=2e67bb66-d06f-4a0d-861b-589a2eaccbda",
        "RoomDesc": "Experience timeless charm and comfort in our classic rooms at Horse Valley Resort. Each classic room is tastefully decorated in a traditional style, featuring cozy furnishings, warm colors, and all the modern amenities you need for a comfortable stay. Sink into the plush bedding and enjoy a restful night's sleep, or relax in the inviting ambiance of your room after a day of exploring the resort's attractions. Whether you're traveling for business or pleasure, our classic rooms offer the perfect combination of comfort and convenience, ensuring a relaxing and enjoyable stay for all guests.",
        "RoomTitle": "The classic room at Horse Valley Resort exudes timeless charm and comfort, featuring elegant décor, cozy furnishings, and essential amenities, creating a serene and inviting atmosphere for a delightful stay.Spacious suite with luxurious amenities and stunning views."
      },
      {
        "RoomNo": 5,
        "RoomType": "Superior",
        "Occupancy": 2,
        "RoomPrice": 40,
        "Available": 1,
        "RoomImage": "https://firebasestorage.googleapis.com/v0/b/resort-2ffe4.appspot.com/o/images%2Froom-5.jpg?alt=media&token=a18feac2-b7a3-452a-b5b3-cfd3599c48ca",
        "RoomDesc": "Experience luxury redefined in our Superior Room, where modern design meets timeless elegance. Offering a spacious and well-appointed retreat, this room is ideal for discerning travelers seeking comfort and style. Sink into the sumptuous king-sized bed and enjoy a restful night's sleep, or unwind in the cozy seating area with a glass of wine from the minibar. The ensuite bathroom features a walk-in rainfall shower, luxurious bathrobes, and premium toiletries for a spa-like experience. Stay connected with complimentary Wi-Fi access, and catch up on work at the convenient workstation. With stunning views of the city skyline or surrounding landscapes, our Superior Room promises a truly unforgettable stay.",
        "RoomTitle": "The superior room at Horse Valley Resort presents a blend of sophistication and comfort, boasting modern décor, upscale furnishings, and enhanced amenities, ensuring a luxurious experience for discerning guests."
      },
      {
        "RoomNo": 6,
        "RoomType": "Luxury",
        "Occupancy": 2,
        "RoomPrice": 60,
        "Available": 1,
        "RoomImage": "https://firebasestorage.googleapis.com/v0/b/resort-2ffe4.appspot.com/o/images%2Froom-6.jpg?alt=media&token=2b3860a1-ef3d-4e0d-8695-258803b022fe",
        "RoomDesc": "Escape to indulgence in our Luxury Room, where every detail has been carefully curated to provide an unparalleled experience of comfort and sophistication. From the moment you enter, you'll be greeted by elegant furnishings, plush bedding, and modern amenities designed to elevate your stay to new heights of luxury. Relax in the spacious seating area or retreat to the sumptuous king-sized bed for a restful night's sleep. The ensuite bathroom features a deep soaking tub, separate rainfall shower, and luxurious bathrobes for the ultimate pampering experience. With stunning views of the surrounding landscapes or city skyline, our Luxury Room offers a serene oasis in the heart of the city.",
        "RoomTitle": "The luxury room at Horse Valley Resort epitomizes opulence and refinement, offering lavish furnishings, exquisite décor, state-of-the-art amenities, and breathtaking views, a great retreat for discerning travelers."
      }
    ]};
    addRoomToFirestore(dataToAdd);
  };

  return (
    <div>
      <h1>Add Room</h1>
      <IonButton onClick={handleAddData}>Add Room</IonButton>
    </div>
  );
};

export default AddRoomPage;
